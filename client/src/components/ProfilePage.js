
import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Dropdown, Icon, Divider } from 'react-materialize';
import { useForm } from 'react-hook-form';
import Input from './Input'
import API from "../utils/API";



function ProfilePage(props) {
    const { register, handleSubmit, watch, errors } = useForm()
    useEffect(() => {
        getUser();

    })
    const getUser = () => {
        API.isAuthenticated().then(function (response) {
            setUser(response.data.user.username);
            setName(response.data.user.firstName);
        })
    }
    const [user, setUser] = useState(user);
    const [name, setName] = useState(name);
    const [img, setImg] = useState("https://picsum.photos/id/446/90/90")
    const onSubmit = (data) => {
        console.log(data);
        console.log(user);
        API.updateUser({
            olduser: user,
            username: data.username

        }).then(function (response) {
            console.log(response);
        })


    }
    const getimg = (e) => {
        setImg(e)
    }
    const aquariumPage = (e) => {
        e.preventDefault();
        window.location.href='/aqueryum/create'
    }
    return (
        <>
            <div className='container'>

                <h2 className='center blue-text'> Welcome to your Profile Page, {user}!</h2>
                <div class="chip">
                    <img src={img} alt="Contact Person" />
                    {name}
                </div>
                <div className="row">
                    <div className="col s6 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">User Profile</span>

                                <p>Choose a picture</p>
                                <Dropdown
                                    options={{
                                        alignment: 'left',
                                        autoTrigger: true,
                                        closeOnClick: true,
                                        constrainWidth: true,
                                        container: null,
                                        coverTrigger: true,
                                        hover: false,
                                        inDuration: 150,
                                        onCloseEnd: null,
                                        onCloseStart: null,
                                        onOpenEnd: null,
                                        onOpenStart: null,
                                        outDuration: 250
                                    }}
                                    trigger={<Button node="button">Pick here!</Button>}
                                >
                                    
                                   
                                    <img onClick={() => getimg("https://picsum.photos/id/446/90/90")} className='responsive-img' src="https://picsum.photos/id/446/90/90" alt="Contact Person"></img>
                                    
                                   
                                    <Divider />
                                    <img onClick={() => getimg("https://picsum.photos/id/581/90/90")} className='responsive-img' src="https://picsum.photos/id/581/90/90" alt="Contact Person"></img>
                                    <Divider />
                                    <img onClick={() => getimg("https://picsum.photos/id/541/90/90")} className='responsive-img' src="https://picsum.photos/id/541/90/90" alt="Contact Person"></img>
                                    <Divider />
                                    <img onClick={() => getimg("https://picsum.photos/id/690/90/90")} className='responsive-img' src="https://picsum.photos/id/690/90/90" alt="Contact Person"></img>
                                    <Divider />
                                    <img onClick={() => getimg("https://picsum.photos/id/500/90/90")} className='responsive-img' src="https://picsum.photos/id/500/90/90" alt="Contact Person"></img>

                                </Dropdown>
                                <br>
                                </br>
                                <br>
                                </br>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <p>Current username: {user} </p>
                                    <Input type='text' name='username' inputRef={register({
                                        required: true
                                    })} > </Input>
                                    <Button className="orange" type="submit">
                                        Change your username
                                    </Button>
                                </form>


                            </div>

                        </div>

                    </div>

                    <div className="col s6 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Your Aquarium</span>
                               
                                <br>
                                </br>
                                <br>
                                </br>
                                
                                    
                                    <Button className="orange" type="submit" onClick={(e) => aquariumPage(e)}>
                                      Visit your aquarium! 
                                    </Button>
                                


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProfilePage;