import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import LoginForm from './LoginForm';

function ModalLog() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Sign In
                
            </Button>
            
            <LoginForm
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default ModalLog;
