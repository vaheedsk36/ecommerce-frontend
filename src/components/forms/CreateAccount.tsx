// @ts-nocheck
import React, { useState } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-number-input';
import bcrypt from 'bcryptjs';  
 
const CreateAccount = () => {

  return (
        <div className="login--container">
          <div className="login--container-div">
          <div className="login--header text-center mb-2">
            <h1>Create New Account</h1>
            </div>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Email or Phone No</Form.Label>
              <Form.Control type={"email"|"tel"} placeholder="Enter Email or Phone No" />          
            </Form.Group>

            <Button variant="warning" className='login--btn mt-4 fs-4' type="button">
              Submit
            </Button>
          </Form>
          </div>

        </div>
  )
}

export default CreateAccount;