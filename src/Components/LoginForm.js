import React, {useState} from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function LoginForm() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    
    return (
        <div>
            <>
            <Container>
                <Form>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder='Enter Email Address' 
                    value={email} onChange={e=>setEmail(e.target.value)}></Form.Control>

                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='Enter Password' 
                    value={password} onChange={e=>setPassword(e.target.value)}></Form.Control>

                    <Button variant='danger' type='submit'>Sign In</Button>
                </Form>
            </Container>
            </>
        </div>
    )
}

export default LoginForm
