import React from 'react';
import { useForm } from 'react-hook-form'
import { Button, Icon } from 'react-materialize';
import Input from "./Input";

function LoginForm() {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email Address" name="email_address" inputRef={register({ required: true })} />
                {errors.email_address && <span className="error-msg">This field is required</span>}
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

export default LoginForm;