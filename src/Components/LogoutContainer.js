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
        navigate("/", { replace: true })
    }
    
    return <div>
        {status?( 
            <>
            
            <Button variant="secondary" onClick={handleLogout} className='px-5'>
            LOGOUT
          </Button>
            
            </>       
        ):navigate("/login")
        }           
    </div>;
}

export default LogoutContainer;
