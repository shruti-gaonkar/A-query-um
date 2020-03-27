import React, { useState } from 'react';
import { Modal, Button } from 'react-materialize';
import LoginForm from './LoginForm';

function Login(props) {
    const [message, setMessage] = useState();

    const handleOpen = () => {
        setMessage();
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
                onOpenStart: handleOpen,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={<Button className="teal" node="button">Login</Button>}
        >
            <LoginForm updateUser={props.updateUser} message={message} setMessage={setMessage} />

        </Modal>
    );
}

export default Login;