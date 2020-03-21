import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Icon } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";

function LoginForm(props) {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        const { email, password } = data;
        API.login({
            email: email,
            password: password
        }).then(function (response) {
            console.log(response);
            props.updateUser({
                loggedIn: true,
                username: response.data.firstname
            })
            //window.location.href = '/';
            // If there's an error, log the error
        })
            .catch(function (err) {
                console.log(err.responseText);
            });
        /*.then(response => {
            console.log('login response: ')
            console.log(response)
            if (response.status === 200) {
                // Pass down Prop function from App.js;
                props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                })
                // Redirect to home page if Log-in is successful
                window.location.href = '/';

            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);

        })*/

        //console.log(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
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

export default LoginForm;