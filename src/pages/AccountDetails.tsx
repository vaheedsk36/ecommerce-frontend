import React from 'react';
import Login from '../components/forms/Login';
import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const AccountDetails = () => {
  return (
    //TODO fix routing on button click for now routes are working when we enter from browser
    <>
      <Link to="/account/create-new-account">
        <Button variant="primary">
          Create New Account
        </Button>
      </Link>
      <Link to="/account/login">
        <Button variant="warning">
          Login
        </Button>
      </Link>
      <Outlet />
    </>
  )
}

export default AccountDetails