import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <Button variant="warning">
        <Link to="/account">Account Details</Link>
    </Button>
    </>
  )
}

export default HomePage