import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Icon } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";

function SignUpForm() {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        API.signup();
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Name" name="fullname" inputRef={register({
                    required: true
                })} />
                {errors.fullname && <span className="error-msg">This field is required</span>}

                <Input label="Username" name="username" inputRef={register({
                    required: true
                })} />
                {errors.username && <span className="error-msg">This field is required</span>}

                <Input label="Email Address" name="email_address" inputRef={register({
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address"
                    }
                })} />
                {(errors.email_address && errors.email_address.message)
                    ?
                    <span className="error-msg">
                        {errors.email_address.message}
                    </span>
                    :
                    (errors.email_address) ?
                        <span className="error-msg">This field is required</span>
                        : ""
                }
                <Input label="Password" name="password" type="password" inputRef={register({ required: true })} />
                {errors.password && <span className="error-msg">This field is required</span>}
                <br />
                <Button className="orange" type="submit">
                    Submit
                    <Icon right>
                        send
                    </Icon>
                </Button>
            </form>
        </>
    );
}

export default SignUpForm;