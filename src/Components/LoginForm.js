import React, {useEffect,useState} from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchUsers} from "../redux/Products/userActions"

function LoginForm({userData, fetchUsers}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [entry,setEntry]=useState({})

    useEffect(() => {
        fetchUsers()
    }, [])
    const individualuser = userData && userData.users && userData.users.filter(user=>((user.email === entry.email)&&(user.password === entry.password)))
    // console.log("Individualuser:",individualuser);
    
    const submitForm=(e)=>{
        e.preventDefault();
        setEntry({email:email,password: password})
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
                    individualuser.length?individualuser.map(user=>
                        // (user.email === email)?
                        <div key={user.id}>
                        <h1> Welcome {user.name.firstname} {user.name.lastname}-{user.id}</h1>
                        <Link to={`/carts/user/${user.id}`} className='deco'>
                        <Button variant='danger'>Show Cart</Button></Link>
                         {/* :<p>Enter right credentials {user.email}</p> */}
                        </div>
                        ):(<h1>Enter right credentials</h1>)
                }
            </div>
            <>
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
            </>
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
