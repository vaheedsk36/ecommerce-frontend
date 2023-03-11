// @ts-nocheck
import React, { useState } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-number-input';
import bcrypt from 'bcryptjs';  
 
const Login = () => {

  const [phoneNumber, setPhoneNumber] = useState();

  const loginHandler = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const username = document.getElementById("formUsername").value;
  const password = document.getElementById("formPassword").value;
  const hashedPassword = await bcrypt.hash(password,10);
  const phoneNumber = document.getElementById("formNumber").value;

  var body = JSON.stringify({
    "username" : `${username}`,
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
        <div className="login--container-div">
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Control type="username" placeholder="Username" />          
            </Form.Group>

            {/* <Form.Group controlId="formNumber">
              <PhoneInput
                  id = "formNumber"
                  placeholder="Enter phone number"
                  value= {phoneNumber}
                  onChange={setPhoneNumber}
              />         
            </Form.Group> */}

            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formNumber">
              <Form.Control type="tel" placeholder="Phone Number" />
            </Form.Group>
            <Button variant="primary" className='login--btn' type="button" onClick={loginHandler}>
              Login
            </Button>
          </Form>
        </div>
    </div>
    
  )
}

export default Login;