
import React from 'react';
import { Button } from 'react-materialize';
import { useForm } from 'react-hook-form';
import API from "../utils/API";


function Profile(props) {
    const { register, handleSubmit, watch, errors } = useForm()
    const profilePage = (e) => {
        e.preventDefault();
        window.location.href = '/profile';
    }
    return (
        <>

            <Button className="orange" onClick={(e) => profilePage(e)}>
                My Profile
                </Button>

        </>
    );
}

export default Profile;