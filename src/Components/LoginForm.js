import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
// import { fetchUsers } from "../redux/Products/userActions"
import { isAuthenticated } from '../redux/Products/userAuthActions'
// import Demo from './Demo'

function LoginForm(props1) {
    const dispatch = useDispatch()
    
    // {userData, fetchUsers}=props1
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [entry, setEntry] = useState({})
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [cart, setCart] = useState([])
    const [errMsg2, setErrMsg2] = useState('')

    useEffect(() => {
        // props1.fetchUsers()
        axios.get(`https://fakestoreapi.com/users`)
            .then(response => {
                console.log(response);
                // setLoader(false)
                setUsers(
                    response.data
                )

            }).catch(error => {
                // setLoader(false)
                console.log(error.message);
                setErrMsg(
                    error.message
                )

            })
    }, [])


    const individualuser = users.filter(user => ((user.email === entry.email) && (user.password === entry.password)))
    console.log("Individualuser1:",individualuser[0]);

    individualuser.length?dispatch(isAuthenticated(true,individualuser[0])):dispatch(isAuthenticated(false,{}))
    
    

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setEntry({ email: email, password: password })    
    }

    return (
        <div>

            {/* <>
            <Container>
                <Form className='logincls' onSubmit={handleSubmitForm}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder='Enter Email Address' 
                    value={email} onChange={e=>setEmail(e.target.value.toLowerCase())}></Form.Control>

                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='Enter Password' 
                    value={password} onChange={e=>setPassword(e.target.value)}></Form.Control>

                    <Button variant='danger' type='submit'>Sign In</Button>
                </Form>
            </Container>
            </> */}

                <>
                    <Modal
                        {...props1}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Please Sign In
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmitForm} >
                                <Form.Label className='mb-3'>Email Address</Form.Label>
                                <Form.Control className='mb-3' type="email" placeholder='Enter Email Address'
                                    value={email} onChange={e => setEmail(e.target.value.toLowerCase())}></Form.Control>

                                <Form.Label className='mb-3'>Password</Form.Label>
                                <Form.Control className='mb-3' type="password" placeholder='Enter Password'
                                    value={password} onChange={e => setPassword(e.target.value)}></Form.Control>

                                <Button className='mb-3' variant='danger' type='submit' onClick={props1.onHide}>Sign In</Button>

                            </Form>
                        </Modal.Body>

                    </Modal>
                    
                </>

            <div>
                <Container>
                {/* <Demo />  */}
                {
                    // userData && userData.users &&
                    // userData.users.filter(user=>((user.email === email)&&(user.password === password)))
                    individualuser.length ?  
                     ( individualuser.map(user=>
                         navigate(`/user/${user.id}/carts`, { replace: true }))
                    ) : (<h1>Enter right credentials</h1>)
                }
                
                </Container>
            </div>

        </div>
    )
}

export default (LoginForm)
