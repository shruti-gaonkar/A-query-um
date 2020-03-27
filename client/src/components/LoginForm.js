import React, { useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Icon, CardPanel } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";

function LoginForm(props) {
    const { register, handleSubmit, errors } = useForm();

    useLayoutEffect(() => {
        //document.querySelector("#login-frm").reset();
    })

    const onSubmit = data => {
        const { email, password } = data;
        API.login({
            email: email,
            password: password
        }).then(function (response) {
            props.updateUser({
                loggedIn: true,
                username: response.data.firstname
            })
            window.location.reload();
            // If there's an error, log the error
        })
            .catch(function (err) {
                props.setMessage("Email or password is incorrect");
            });
    }
    return (
        <>
            <form id="login-frm" onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email Address" name="email" inputRef={register({
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address"
                    }
                })} />
                {(errors.email && errors.email.message)
                    ?
                    <span className="error-msg">
                        {errors.email.message}
                    </span>
                    :
                    (errors.email) ?
                        <span className="error-msg">This field is required</span>
                        : ""
                }
                <Input label="Password" name="password" type="password" inputRef={register({ required: true })} />
                {errors.password && <span className="error-msg">This field is required</span>}
                <br />
                {(props.message) ?
                    <CardPanel className="teal">
                        <span className="white-text">
                            {props.message}
                        </span>
                    </CardPanel>
                    : ""
                }
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