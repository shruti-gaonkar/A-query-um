import React from 'react';
import { Modal, Button, Icon } from 'react-materialize';
import { useForm } from 'react-hook-form';
import LoginForm from './LoginForm';
import API from "../utils/API";


function Login(props) {
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

            <LoginForm updateUser={props.updateUser} />
        </Modal>
    );
}

export default Login;