import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Container, CardPanel, Button, Icon } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";
import ScrollTop from './ScrollTop';


function FishAddFormContainer() {
  const { register, handleSubmit, errors } = useForm();
  const [imageLinkArr, setImageLinkArr] = useState([{ img: null, alt: null }]);
  const [message, setMessage] = useState("Add fish to the database using the form below.");
  const [admin, setadmin] = useState(false);
  
  useEffect(() => {
    getUser();
  })

  const getUser = () => {
    API.isAuthenticated().then(function (response) {
           setadmin(response.data.user.adminType);
    })
};

  const onSubmit = data => {
    if (!admin){
      setMessage("You must be an admin to add fish into the database");
      window.scrollTo(0,0);
      
      
    }  else {

      console.log("this is the data gathered", data);
      data.aliases = data.aliases.split(",");
      data.images = imageLinkArr;
      API.createFish(data).then(function () {
        document.querySelector("#fish-form").reset();
        setImageLinkArr([{ img: null, alt: null }]);
        setMessage("Successfully added new fish record to database! Add another fish using the form below.");
        window.scrollTo(0, 0);
      });
    }
      
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
      <CardPanel className="cyan">
        <span className="white-text">
          {message}
        </span>
      </CardPanel>

      <form id="fish-form">
        <Input label="Scientific Name" name="scientificName" inputRef={register({
          required: true
        })} />
        {errors.scientificName && <span className="error-msg">This field is required</span>}

        <Input label="Aliases (starting with the most common name)" name="aliases" inputRef={register({
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
                      <Input label="Image URL" name={`image_${index}`} value={link.img} onChange={(e) => handleImageChange(e, index)} inputRef={register({
                        required: true
                      })} />
                      {errors[txtlabel] && <span className="error-msg">This field is required</span>}

                      <Input label="Image Alt Text" name={`imagealt_${index}`} value={link.alt} onChange={(e) => handleImageAltChange(e, index)} inputRef={register({
                        required: true
                      })} />
                      {errors[txtlabel] && <span className="error-msg">This field is required</span>}

                    </div>
                    <Button floating className="red right" icon={<Icon>clear</Icon>} onClick={(e) => handleRemoveImage(e, index)}>Remove</Button>
                  </>
                )
              })
            )
        }
        <Button floating className="cyan right" icon={<Icon>add</Icon>} onClick={(e) => handleAddImage(e)}>Add Image</Button>
        <br />
        <br />


        <Input label="Description of Fish" name="description" inputRef={register({
          required: true
        })} />
        {errors.description && <span className="error-msg">This field is required</span>}

        <p>
          <strong>Fish Type:</strong>
        </p>
        <p>
          <Input className="with-gap" name="type" type="radio" value="Freshwater" label="Freshwater" inputRef={register({
            required: true
          })} />
        </p>
        <p>
          <Input className="with-gap" name="type" type="radio" value="Saltwater" label="Saltwater" inputRef={register({
            required: true
          })} />
        </p>
        <p>
          <Input className="with-gap" name="type" type="radio" value="Brackish" label="Brackish" inputRef={register({
            required: true
          })} />
        </p>

        <Input type="number" label="Max Size (in CM)" name="maxSizeCM" inputRef={register({
          required: true
        })} />
        {errors.maxSizeCM && <span className="error-msg">This field is required</span>}

        <Input label="Lifespan" name="lifespan" inputRef={register({
          required: true
        })} />
        {errors.lifespan && <span className="error-msg">This field is required</span>}

        <Input label="Diet" name="diet" inputRef={register({
          required: true
        })} />
        {errors.diet && <span className="error-msg">This field is required</span>}

        <Input type="number" label="Minimum Tank Size (in Litres)" name="minTankSizeL" inputRef={register({
          required: true
        })} />
        {errors.minTankSizeL && <span className="error-msg">This field is required</span>}

        <Input label="Temperature Range (C)" name="tempRangeC" inputRef={register({
          required: true
        })} />
        {errors.tempRangeC && <span className="error-msg">This field is required</span>}

        <p>
          <strong>Aggression Level:</strong>
        </p>
        <p>
          <Input className="with-gap" name="aggroLevel" type="radio" value="Aggressive" label="Aggressive" inputRef={register({

          })} />
        </p>
        <p>
          <Input className="with-gap" name="aggroLevel" type="radio" value="Semi-Aggressive" label="Semi-Aggressive" inputRef={register({

          })} />
        </p>
        <p>
          <Input className="with-gap" name="aggroLevel" type="radio" value="Peaceful" label="Peaceful" inputRef={register({

          })} />
        </p>

        <p>
          <strong>Community Fish:</strong>
        </p>
        <p>
          <Input className="with-gap" name="communityFish" type="radio" value="true" label="True" inputRef={register({

          })} />
        </p>
        <p>
          <Input className="with-gap" name="communityFish" type="radio" value="false" label="False" inputRef={register({

          })} />
        </p>

        <p>
          <strong>Reef Safe:</strong>
        </p>
        <p>
          <Input className="with-gap" style={{ marginRight: "10px" }} name="reefSafe" type="radio" value="true" label="Yes" inputRef={register({

          })} />
        </p>
        <p>
          <Input className="with-gap" name="reefSafe" type="radio" value="false" label="No" inputRef={register({

          })} />
        </p>
        <p>
          <Input className="with-gap" name="reefSafe" type="radio" value="null" label="Not Applicable" inputRef={register({

          })} />
        </p>

        <p>
          <Input label="Notes" name="notes" inputRef={register({
            required: true
          })} />
          {errors.notes && <span className="error-msg">This field is required</span>}
        </p>

        <Button className="cyan" type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
                    <Icon right>
            send
                    </Icon>
        </Button>
      </form>
      <br />

      <ScrollTop />
    </Container>

  );
}

export default FishAddFormContainer;