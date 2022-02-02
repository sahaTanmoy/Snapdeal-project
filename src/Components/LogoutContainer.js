import React, {useState} from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../redux/Products/userAuthActions';

function LogoutContainer() {
    const status = useSelector(state => state.AuthStatus.AuthStatus)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    console.log(55, status);
    const handleLogout =()=>{
        // alert('Are you sure to logout?')
        dispatch(isAuthenticated(false,{}));
        alert('You have successfully Logged out');
        navigate("/", { replace: true })
    }
    
    return <div>
        {status?( 
            <>
            
            <Alert>
                <Alert.Heading>
                    Do you want to Sign Out?
                </Alert.Heading>
                <Button variant='danger' onClick={handleShow}>Sign Out</Button>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Out Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to Sign Out?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Sign Out
          </Button>
        </Modal.Footer>
      </Modal>
            </Alert>
            
            </>       
        ):navigate("/login", { replace: true })
        }           
    </div>;
}

export default LogoutContainer;
