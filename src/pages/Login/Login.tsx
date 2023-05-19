// @ts-nocheck
import React, { useState } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-number-input';
import bcrypt from 'bcryptjs';  
 
const Login = () => {

  const loginHandler = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const username = document.getElementById("formUsername").value;
  const email = document.getElementById("formEmail").value;
  const password = document.getElementById("formPassword").value;
  const hashedPassword = await bcrypt.hash(password,10);
  const phoneNumber = document.getElementById("formNumber").value;

  var body = JSON.stringify({
    "username" : `${username}`,
    "email" :  `${email}`,
    "password" : `${hashedPassword}`,
    "phone" : `${phoneNumber}`
  });

  var requestOptions : any = {
    method: 'POST',
    headers: myHeaders,
    body,
    redirect: 'follow'
  };

  fetch("http://localhost:35000/api/v1/account/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  return (
        <div className="login--container">
          <div className="login--header">
            <h1>Login</h1>
            <label>Don't have a account? <a href="#">Create a new account</a></label>
          </div>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Control type={"email"|"tel"} placeholder="Enter Email or Phone No" />          
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>

            <Button variant="primary" className='login--btn' type="button" onClick={loginHandler}>
              Login
            </Button>
          </Form>
        </div>
  )
}

export default Login;