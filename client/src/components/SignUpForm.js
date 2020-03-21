import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Icon } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";

function SignUpForm() {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        const { fullname, username, email_address, password } = data;
        API.signup({
            username: username,
            password: password,
            email: email_address,
            firstName: fullname
        }).then(function (data) {
            if (data.error) {
                console.log(data.error.errors[0].message);
            } else {
                //$("form[name='signupfrm']").trigger("reset");
                window.location.replace("/");
            }
        });
        /*.then(response => {
            console.log(response)
            if (!response.data.errmsg) {
                console.log('successful signup')
                window.location.href('/')
            } else {
                console.log('username already taken')
            }
        }).catch(error => {
            console.log('signup error: ')
            console.log(error)

        })*/
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