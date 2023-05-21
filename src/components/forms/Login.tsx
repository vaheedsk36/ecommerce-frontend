// @ts-nocheck
import React from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-number-input';
import bcrypt from 'bcryptjs';
import { ReactComponent as GoogleIcon } from "../../assets/images/google.svg";
import { getGoogleUrl } from "../../ts/utility";
import { useLocation } from 'react-router-dom';


const Login = () => {

  const location = useLocation();
  const from = ((location.state as any)?.from?.pathname as string) || '/';

  const loginHandler = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const username = document.getElementById("formUsername").value;
    const email = document.getElementById("formEmail").value;
    const password = document.getElementById("formPassword").value;
    const hashedPassword = await bcrypt.hash(password, 10);
    const phoneNumber = document.getElementById("formNumber").value;

    var body = JSON.stringify({
      "username": `${username}`,
      "email": `${email}`,
      "password": `${hashedPassword}`,
      "phone": `${phoneNumber}`
    });

    var requestOptions: any = {
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
        <div className="login--header text-center mt-4">
          <h1>Login</h1>
          <label className="mt-3">Don't have a account? <a href="#">Create a new account</a></label>
        </div>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Email or Phone No</Form.Label>
            <Form.Control type={"email" | "tel"} placeholder="Enter Email or Phone No" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Button variant="warning" className='login--btn fs-4' type="button" onClick={loginHandler}>
            Login
          </Button>

          <div className='fs-5 text-center my-0'>Or</div>

          <Button variant="light" className='login--btn fs-4 my-3' type="button">
            {/* <a href={getGoogleUrl(from)} className="d-flex justify-content-center align-items-center"> */}
            <a href={`${import.meta.env.VITE_SERVICES}/login/auth/google`} className="d-flex justify-content-center align-items-center">
              <GoogleIcon width="25px" height="25px" /> <span className='mx-2'>Sign in with Google</span>
            </a>
          </Button>
        </Form>
      </div>

    </div>
  )
}

export default Login;