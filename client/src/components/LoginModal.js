import React from 'react';
import { Modal, Button } from 'react-materialize';
import { useForm } from 'react-hook-form';
import { Button, Icon } from 'react-materialize';
import Input from "./Input";
import API from "../utils/API";


function Login(props) {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        const { username, password } = data;
        API.login( {
               username: username,
               password: password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // Pass down Prop function from App.js;
                    props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // Redirect to home page if Log-in is successful
                     window.location.href='/';
                   
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
        
        console.log(data)
    }
    return (
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Login"
            id="modal-0"
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={<Button className="teal" node="button">Login</Button>}
        >
            
            {/* Login Form */}

            <form onSubmit={handleSubmit(onSubmit)}>
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
        </Modal>
    );
}

export default Login;