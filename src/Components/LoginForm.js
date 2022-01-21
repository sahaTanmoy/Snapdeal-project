import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUsers } from "../redux/Products/userActions"

function LoginForm(props1) {
    // {userData, fetchUsers}=props1
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [entry, setEntry] = useState({})

    useEffect(() => {
        props1.fetchUsers()
    }, [])
    const individualuser = props1.userData && props1.userData.users && props1.userData.users.filter(user => ((user.email === entry.email) && (user.password === entry.password)))
    // console.log("Individualuser:",individualuser);

    const submitForm = (e) => {
        e.preventDefault();
        setEntry({ email: email, password: password })
        // console.log("Submit entry",entry.email);
    }

    return (
        <div>
            {/* <>
            <Container>
                <Form className='logincls' onSubmit={submitForm}>
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

            <div>
                {
                    // userData && userData.users &&
                    // userData.users.filter(user=>((user.email === email)&&(user.password === password)))
                    individualuser.length ? individualuser.map(user =>
                        // (user.email === email)?
                        <div key={user.id}>
                            <h1> Welcome {user.name.firstname} {user.name.lastname}-{user.id}</h1>
                            <Link to={`/carts/user/${user.id}`} className='deco'>
                                <Button variant='danger'>Show Cart</Button></Link>
                            {/* :<p>Enter right credentials {user.email}</p> */}
                        </div>
                    ) : (<h1>Enter right credentials</h1>)
                }
            </div>

            {/* <>
                <Container>
                    <Form className='logincls' onSubmit={submitForm}>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder='Enter Email Address'
                            value={email} onChange={e => setEmail(e.target.value.toLowerCase())}></Form.Control>

                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder='Enter Password'
                            value={password} onChange={e => setPassword(e.target.value)}></Form.Control>

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
                        <Form onSubmit={submitForm}>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder='Enter Email Address'
                                value={email} onChange={e => setEmail(e.target.value.toLowerCase())}></Form.Control>

                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder='Enter Password'
                                value={password} onChange={e => setPassword(e.target.value)}></Form.Control>

                            <Button variant='danger' type='submit' onClick={props1.onHide}>Sign In</Button>

                        </Form>
                    </Modal.Body>

                </Modal>
            </>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
