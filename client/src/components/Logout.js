import React from 'react';
import { Modal, Button, Icon } from 'react-materialize';
import { useForm } from 'react-hook-form';
import API from "../utils/API";


function Login(props) {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        API.logout().then(function (response) {
            //console.log(response);
            props.updateUser({
                loggedIn: false
            });
            //window.location.href = '/';
            // If there's an error, log the error
        })
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
                {"Welcome " + props.name} &nbsp;
                <Button className="orange" type="submit">
                    Logout
                </Button>
            </form>
        </>
    );
}

export default Login;