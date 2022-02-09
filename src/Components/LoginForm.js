import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Row, Col, Modal } from 'react-bootstrap'
// import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { GrLocation } from 'react-icons/gr'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { RiFileList3Line } from 'react-icons/ri'
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
    const [entry, setEntry] = useState({email: '', password: ''})
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [cart, setCart] = useState([])
    const [errMsg2, setErrMsg2] = useState('')
    const [emailErr,setEmailErr]= useState('')
    const [passErr,setPassErr]= useState('')

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
    console.log("Individualuser1:", individualuser[0]);

    individualuser.length ? dispatch(isAuthenticated(true, individualuser[0])) : dispatch(isAuthenticated(false, {}))

    console.log(212,entry);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(email.length===0 || (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))){
            setEmailErr('**Enter a valid Email');
            // setEntry({ ...entry,email: '' });
            entry.email= '';
            console.log(2121,"ok1");
        }
        else {
            setEmailErr('');
            
            // setEntry({ ...entry,email: email });
            entry.email=email
            console.log(2121,"ok2");
        }
        if (password.length < 6) {
            // alert(`Password should contain 6 characters.your password is only ${password.length} character long`)
            setPassErr(`**Password should contain 6 characters`);
            // setEntry({ ...entry,password: '' })
            entry.password=''
        } 
        else {
            setPassErr('');
            // setEntry({ ...entry,password: password })
            entry.password=password
        }
    }

    // console.log(passErr);

    return (
        <div className='loginbackcontainer'>
            <Row>
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
            <div >
                <Container>
                    <div className='logformcontainer'>
                        <Row>

                            <Col sm={5}>
                                <Row>
                                    <Col sm={2}><GrLocation className='logformicon1' size={50} /></Col>
                                    <Col sm>
                                        <h6>MANAGE YOUR ORDERS</h6>
                                        <p>
                                            Track orders, manage cancellations & returns.
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={2}><RiFileList3Line className='logformicon2' size={50} /></Col>
                                    <Col sm>
                                        <h6>SHORTLIST ITEMS YOU LOVE</h6>
                                        <p>
                                            Keep items you love on a watchlist.
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={2}><IoIosNotificationsOutline className='logformicon3' size={50} /></Col>
                                    <Col sm>
                                        <h6>AWESOME OFFERS UPDATES FOR YOU</h6>
                                        <p>
                                            Be first to know about great offers and save.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm>
                                <div className='loginform'>
                                    <h4>Login On Snapdeal</h4>
                                    {/* <Form onSubmit={handleSubmitForm} > */}
                                    <Form onSubmit={handleSubmitForm}>
                                        <Form.Label className='mb-2'>Email Address</Form.Label>
                                        <Form.Control className='mb-1' type="email" placeholder='Enter Email Address'
                                            value={email} onChange={e => setEmail(e.target.value.toLowerCase())}></Form.Control>
                                        <div className='frminputerr'>{emailErr}</div>

                                        <Form.Label className='mb-2'>Password</Form.Label>
                                        <Form.Control className='mb-1' type="password" placeholder='Enter Password'
                                            value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
                                        <div className='frminputerr'>{passErr}</div>
                                        <div className="d-grid gap-2">
                                            <Button className='mb-3 mt-2' variant='danger' type='submit' >Sign In</Button>
                                        </div>

                                    </Form>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>
            </Row>
            <div>
                <Container>
                    {/* <Demo />  */}
                    {
                        // userData && userData.users &&
                        // userData.users.filter(user=>((user.email === email)&&(user.password === password)))
                        individualuser.length ?
                            (individualuser.map(user =>
                                navigate(`/user/${user.id}/carts`, { replace: true }))
                            ) : (<h1>Enter right credentials</h1>)
                    }

                </Container>
            </div>

        </div>
    )
}

export default (LoginForm)
