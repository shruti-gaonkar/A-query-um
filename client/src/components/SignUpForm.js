import React, { useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Icon, CardPanel } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";

function SignUpForm(props) {
    const { register, handleSubmit, errors } = useForm();

    useLayoutEffect(() => {
        //document.querySelector("#sign-up-frm").reset();
    })

    const onSubmit = data => {
        const { fullname, username, email_address, password } = data;
        API.signup({
            username: username,
            password: password,
            email: email_address,
            userpic: "/images/user01.jpg",
            firstName: fullname
        }).then(function (data) {
            if (data.data.error && data.data.error.errmsg) {
                props.setMessage("Email address already exists");
            } else {
                props.updateUser({
                    loggedIn: true,
                    username: data.data.firstname
                })
            }
        }).catch(function (err) {
            //console.log(err);
            props.setMessage("Sign Up Error");
        });
    }

    return (
        <>
            <form id="sign-up-frm" onSubmit={handleSubmit(onSubmit)}>
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
                {(props.message) ?
                    <CardPanel className="teal">
                        <span className="white-text">
                            {props.message}
                        </span>
                    </CardPanel>
                    : ""
                }
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

export default SignUpForm;