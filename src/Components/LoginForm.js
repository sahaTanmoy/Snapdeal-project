import React, {useEffect,useState} from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import {fetchUsers} from "../redux/Products/userActions"

function LoginForm({userData, fetchUsers}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    useEffect(() => {
        fetchUsers()
    }, [])
    
    return (
        <div>
            <>
            <Container>
                <Form className='logincls'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder='Enter Email Address' 
                    value={email} onChange={e=>setEmail(e.target.value.toLowerCase())}></Form.Control>

                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='Enter Password' 
                    value={password} onChange={e=>setPassword(e.target.value)}></Form.Control>

                    <Button variant='danger' type='submit'>Sign In</Button>
                </Form>
            </Container>
            </>

            <div>
                {
                    userData && userData.users &&
                    userData.users.filter(user=>((user.email === email)&&(user.password === password))).map(user=>
                        // (user.email === email)?
                        <h1> Welcome {user.name.firstname} {user.name.lastname}</h1>
                        // :<p>Enter right credentials {user.email}</p>
                        )
                }
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        userData: state.user
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        fetchUsers: ()=> dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
