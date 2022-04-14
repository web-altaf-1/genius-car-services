import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-primary my-2'>Please Register</h2>
            <Form className='shadow-lg p-5 rounded-lg'>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control  type="text" placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control  type="email" placeholder="Enter Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your Password" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to Terms and condition" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="signup">
                    <Form.Label>Already Have an Account ?? </Form.Label>
                    <Link style={{ marginLeft: '5px' }} to='/login'>Please Login</Link>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;