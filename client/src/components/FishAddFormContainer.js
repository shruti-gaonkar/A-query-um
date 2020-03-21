import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, CardPanel, Button, Icon, Textarea, RadioGroup } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";

function FishAddFormContainer() {
  const { register, handleSubmit, errors } = useForm();
  const [imageLinkArr, setImageLinkArr] = useState([{ img: null, alt: null }]);
  const [message, setMessage] = useState("Add fish to the database using the form below");

  const onSubmit = data => {
    console.log(data.type);
    data.aliases = data.aliases.split(",");
    data.images = imageLinkArr;
    console.log(data);
    API.createFish(data).then(function () {
      document.querySelector("#fish-form").reset();
      setImageLinkArr([{ img: null, alt: null }]);
      setMessage("Successfully added new fish record to database");
      window.scrollTo(0, 0);
    });
  }

  const handleAddImage = (e) => {
    e.preventDefault();
    const values = [...imageLinkArr];
    values.push({ img: null, alt: null });
    setImageLinkArr(values);
  }

  const handleImageChange = (e, index) => {
    const values = [...imageLinkArr];
    values[index].img = e.target.value;
    setImageLinkArr(values);
  }

  const handleImageAltChange = (e, index) => {
    const values = [...imageLinkArr];
    values[index].alt = e.target.value;
    setImageLinkArr(values);
  }

  const handleRemoveImage = (e, index) => {
    e.preventDefault();
    const values = imageLinkArr.filter((item, i) => i !== index);
    setImageLinkArr(values);
  }

  return (
    <Container>
      <h4>Add Fish</h4>
      <CardPanel className="teal">
        <span className="white-text">
          {message}
        </span>
      </CardPanel>

      <form id="fish-form">
        <Input label="Scientific Name" name="scientificName" inputRef={register({
          required: true
        })} />
        {errors.scientificName && <span className="error-msg">This field is required</span>}

        <Input label="Aliases" name="aliases" inputRef={register({
          required: true
        })} />
        {errors.aliases && <span className="error-msg">This field is required</span>}

        {
          !imageLinkArr.length ?
            ""
            : (
              imageLinkArr.map((link, index) => {
                const txtlabel = `image_${index}`;
                return (
                  <>
                    <div key={index}>
                      <Input label="Image Link" name={`image_${index}`} value={link.img} onChange={(e) => handleImageChange(e, index)} inputRef={register({
                        required: true
                      })} />
                      {errors[txtlabel] && <span className="error-msg">This field is required</span>}

                      <Input label="Image Alt Text" name={`imagealt_${index}`} value={link.alt} onChange={(e) => handleImageAltChange(e, index)} inputRef={register({
                        required: true
                      })} />
                      {errors[txtlabel] && <span className="error-msg">This field is required</span>}

                    </div>
                    <Button onClick={(e) => handleRemoveImage(e, index)}>Remove</Button>
                  </>
                )
              })
            )
        }
        <Button onClick={(e) => handleAddImage(e)}>Add Image</Button>

        <Input label="Description" name="description" inputRef={register({
          required: true
        })} />
        {errors.description && <span className="error-msg">This field is required</span>}

        <Input type="number" label="Max Size(cm)" name="maxSizeCM" inputRef={register({
          required: true
        })} />
        {errors.maxSize && <span className="error-msg">This field is required</span>}

        <Input label="Life Span" name="lifespan" inputRef={register({
          required: true
        })} />
        {errors.lifeSpan && <span className="error-msg">This field is required</span>}

        <Input label="Diet" name="diet" inputRef={register({
          required: true
        })} />
        {errors.diet && <span className="error-msg">This field is required</span>}

        <Input type="number" label="Minimum Tank Size(L)" name="minTankSizeL" inputRef={register({
          required: true
        })} />
        {errors.tankSize && <span className="error-msg">This field is required</span>}

        <Input label="Temperature Range (C)" name="tempRangeC" inputRef={register({
          required: true
        })} />
        {errors.tempRange && <span className="error-msg">This field is required</span>}

        <br />

        Fish Type? -
        <Input className="with-gap" name="type" type="radio" value="Freshwater" label="Freshwater" inputRef={register({
          required: true
        })} />
        <Input className="with-gap" name="type" type="radio" value="Saltwater" label="Saltwater" inputRef={register({
          required: true
        })} />
        <Input className="with-gap" name="type" type="radio" value="Brackish" label="Brackish" inputRef={register({
          required: true
        })} />

        <br />
        <br />

        Community Fish? -
        <Input className="with-gap" name="communityFish" type="radio" value="true" label="True" inputRef={register({

        })} />
        <Input className="with-gap" name="communityFish" type="radio" value="false" label="False" inputRef={register({

        })} />

        <br />
        <br />

        Reef Safe? -
        <Input className="with-gap" name="reefSafe" type="radio" value="true" label="Safe" inputRef={register({

        })} />
        <Input className="with-gap" name="reefSafe" type="radio" value="false" label="Not Safe" inputRef={register({

        })} />
        <Input className="with-gap" name="reefSafe" type="radio" value="null" label="Not Applicable" inputRef={register({

        })} />

        <br />
        <br />

        Aggro Level? -
        <Input className="with-gap" name="aggroLevel" type="radio" value="Aggressive" label="Aggressive" inputRef={register({

        })} />
        <Input className="with-gap" name="aggroLevel" type="radio" value="Semi-Aggressive" label="Semi Aggressive" inputRef={register({

        })} />
        <Input className="with-gap" name="aggroLevel" type="radio" value="Peaceful" label="Peaceful" inputRef={register({

        })} />

        <br />

        <Textarea />

        <Button className="teal" type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
                    <Icon right>
            send
                    </Icon>
        </Button>
      </form>
    </Container>
  );
}

export default FishAddFormContainer;