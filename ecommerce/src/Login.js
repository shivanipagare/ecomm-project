
import React, { useState } from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import './login.css'

function LogIn(){
    const [user, setUserId] = useState('')
    const [password, setPassword] = useState()

    

      return (
        <div className='main'>
          <Container style={{width:"30%",backgroundColor:"rgb(0,0,55)", marginTop:"10%",padding:"20px" , borderRadius:"20px"}}>
              <h1 style={{color:"white"}}>User Registration</h1>
            <Form >
            <Form.Label style={{color:"white"}}>UserId:</Form.Label>
              <Form.Control value={user} onChange={(e) => setUserId(e.target.value)}  type="text"/><br />
              
              <Form.Label style={{color:"white"}}>Password*:</Form.Label>
              <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password"/><br />
              <Button variant="success" >Login </Button>{"    "}
              
            </Form>
            <hr/>
          </Container>
        </div>
      );
}
export default LogIn;