import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Icon, Textarea, Checkbox, RadioGroup } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";

function FishAddFormContainer() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    //API.login();
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Scientific Name" name="scientificName" inputRef={register({
          required: true
        })} />
        {errors.scientificName && <span className="error-msg">This field is required</span>}

        <Input label="Aliases" name="aliases" inputRef={register({
          required: true
        })} />
        {errors.aliases && <span className="error-msg">This field is required</span>}

        <Input label="Images" name="images" inputRef={register({
          required: true
        })} />
        {errors.images && <span className="error-msg">This field is required</span>}

        <Input label="Description" name="description" inputRef={register({
          required: true
        })} />
        {errors.description && <span className="error-msg">This field is required</span>}

        <Input label="Fish Type" name="fishType" inputRef={register({
          required: true
        })} />
        {errors.fishType && <span className="error-msg">This field is required</span>}

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

        <Checkbox
          id="checkbox_1"
          label="Community Fish?"
          value="safe"
          name="communityFish"
        />
        {errors.communityFish && <span className="error-msg">This field is required</span>}

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
              value: 'xl'
            },
            {
              label: 'Not Safe',
              value: 'xl'
            },
            {
              label: 'Not Applicable',
              value: 'l'
            }
          ]}
        />
        {errors.reefSafe && <span className="error-msg">This field is required</span>}

        <br />
        <Textarea />
        <Button className="teal" type="submit">
          Submit
                    <Icon right>
            send
                    </Icon>
        </Button>
      </form>
    </>
  );
}

export default FishAddFormContainer;