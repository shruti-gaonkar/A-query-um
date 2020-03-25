import React from 'react';
import { Modal, Button, Icon } from 'react-materialize';
import { useForm } from 'react-hook-form';
import API from "../utils/API";


function Login(props) {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        API.logout().then(function (response) {
            props.updateUser({
                loggedIn: false
            });
        })
    }
    return (
        <>
            {"Welcome" + props.name}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Button className="orange" type="submit">
                    Logout
                    <Icon right>
                        send
                    </Icon>
                </Button>
            </form>
        </>
    );
}

export default Login;