import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Button, Icon, Textarea, RadioGroup } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";

function FishAddFormContainer() {
  const { register, handleSubmit, errors } = useForm();
  const [imageLinkArr, setImageLinkArr] = useState([{ img: null, alt: null }]);
  const [aliasesArr, setAliasesArr] = useState(['']);
  const onSubmit = data => {
    data.aliases = aliasesArr;
    data.images = imageLinkArr;
    console.log(data);
    API.createFish(data);
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
      <form>
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

        <Input label="Scientific Name" name="scientificName" inputRef={register({
          required: true
        })} />
        {errors.scientificName && <span className="error-msg">This field is required</span>}

        <Input label="Aliases" name="aliases" inputRef={register({
          required: true
        })} />
        {errors.aliases && <span className="error-msg">This field is required</span>}

        <Input label="Description" name="description" inputRef={register({
          required: true
        })} />
        {errors.description && <span className="error-msg">This field is required</span>}

        <Input label="Max Size(cm)" name="maxSize" inputRef={register({
          required: true
        })} />
        {errors.maxSize && <span className="error-msg">This field is required</span>}

        <Input label="Life Span" name="lifeSpan" inputRef={register({
          required: true
        })} />
        {errors.lifeSpan && <span className="error-msg">This field is required</span>}

        <Input label="Diet" name="diet" inputRef={register({
          required: true
        })} />
        {errors.diet && <span className="error-msg">This field is required</span>}

        <Input label="Minimum Tank Size(L)" name="tankSize" inputRef={register({
          required: true
        })} />
        {errors.tankSize && <span className="error-msg">This field is required</span>}

        <Input label="Temperature Range (C)" name="tempRange" inputRef={register({
          required: true
        })} />
        {errors.tempRange && <span className="error-msg">This field is required</span>}

        <br />

        Fish Type? -
        <Input className="with-gap" name="type" type="radio" value="fresh" label="Freshwater" />
        <Input className="with-gap" name="type" type="radio" value="salt" label="Saltwater" />
        <Input className="with-gap" name="type" type="radio" value="brackish" label="Brackish" />

        <br />
        <br />

        Community Fish? -
        <Input className="with-gap" name="communityFish" type="radio" value="true" label="True" />
        <Input className="with-gap" name="communityFish" type="radio" value="false" label="False" />

        <br />
        <br />

        Reef Safe? -
        <Input className="with-gap" name="reefSafe" type="radio" value="safe" label="Safe" />
        <Input className="with-gap" name="reefSafe" type="radio" value="not safe" label="Not Safe" />
        <Input className="with-gap" name="reefSafe" type="radio" value="not applicable" label="Not Applicable" />

        <br />
        <br />

        Aggro Level? -
        <Input className="with-gap" name="agroLevel" type="radio" value="aggressive" label="Aggressive" />
        <Input className="with-gap" name="agroLevel" type="radio" value="semi-aggressive" label="Semi Aggressive" />
        <Input className="with-gap" name="agroLevel" type="radio" value="peaceful" label="Peaceful" />

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