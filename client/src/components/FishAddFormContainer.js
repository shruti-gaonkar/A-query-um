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

  const handleAddAliases = (e) => {
    e.preventDefault();
    const values = [...aliasesArr];
    values.push(['']);
    setAliasesArr(values);
  }

  const handleAliasesChange = (e, index) => {
    const values = [...aliasesArr];
    values[index].img = e.target.value;
    setAliasesArr(values);
  }

  const handleRemoveAliases = (e, index) => {
    e.preventDefault();
    const values = aliasesArr.filter((item, i) => i !== index);
    setAliasesArr(values);
  }
  return (
    <Container>
      <form>
        {
          !imageLinkArr.length ?
            ""
            : (
              imageLinkArr.map((link, index) => {
                return (
                  <>
                    <div key={index}>
                      <Input label="Image Link" value={link.img} onChange={(e) => handleImageChange(e, index)} inputRef={register({
                        required: true
                      })} />
                      <Input label="Image Alt Text" value={link.alt} onChange={(e) => handleImageAltChange(e, index)} inputRef={register({
                        required: true
                      })} />
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

        {
          !aliasesArr.length ?
            ""
            : (
              aliasesArr.map((name, index) => {
                return (
                  <>
                    <div key={index}>
                      <Input label="Aliases" name={`aliases_${index}`} key={`aliases_${index}`} value={name} onChange={(e) => handleAliasesChange(e, index)} inputRef={register({
                        required: true
                      })} />
                      {errors.images && <span className="error-msg">This field is required</span>}
                    </div>
                    <Button onClick={(e) => handleRemoveAliases(e, index)}>Remove</Button>
                  </>
                )
              })
            )
        }
        <Button onClick={(e) => handleAddAliases(e)}>Add Aliases</Button>

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
        <RadioGroup
          label="Reef Safe?"
          name="reefSafe"
          onChange={function noRefCheck() { }}
          options={[
            {
              label: 'Freshwater',
              value: 'fresh'
            },
            {
              label: 'Saltwater',
              value: 'true'
            },
            {
              label: 'Brackish',
              value: 'brackish'
            }
          ]}
        />

        <br />
        <br />

        Community Fish? -
        <RadioGroup
          label="Reef Safe?"
          name="reefSafe"
          onChange={function noRefCheck() { }}
          options={[
            {
              label: 'True',
              value: 'true'
            },
            {
              label: 'False',
              value: 'false'
            }
          ]}
        />

        <br />
        <br />

        Reef Safe? -
        <RadioGroup
          label="Reef Safe?"
          name="reefSafe"
          onChange={function noRefCheck() { }}
          options={[
            {
              label: 'Safe',
              value: 'safe'
            },
            {
              label: 'Not Safe',
              value: 'not safe'
            },
            {
              label: 'Not Applicable',
              value: 'not applicable'
            }
          ]}
        />

        <br />
        <br />

        Aggro Level? -
        <RadioGroup
          label="Aggro Level?"
          name="agroLevel"
          onChange={function noRefCheck() { }}
          options={[
            {
              label: 'Agressive',
              value: 'agro'
            },
            {
              label: 'Anti-Agressive',
              value: 'antiAgro'
            },
            {
              label: 'Peaceful',
              value: 'peaceful'
            }
          ]}
        />

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