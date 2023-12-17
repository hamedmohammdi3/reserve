import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const SignUpFormModal = ({ show, handleShow, onSubmit, onUsernameChange, onPasswordChange, login }) => {

    const handleClose = () => {
        handleShow(false);
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ثبت نام</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>نام</Form.Label>
                            <Form.Control type="text" placeholder="نام خود را وارد کنید" onChange={onUsernameChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>نام خانوادگی</Form.Label>
                            <Form.Control type="text" placeholder="نام خانوادگی خود را وارد کنید" onChange={onUsernameChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>نام کاربری</Form.Label>
                            <Form.Control type="email" placeholder="ایمیل را وارد کنید" onChange={onUsernameChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>شناسه کاربری</Form.Label>
                            <Form.Control type="password" placeholder="رمز ورود را وارد کنید" onChange={onPasswordChange} />
                        </Form.Group>
                        <div  className="container px-2 text-center">
                            <Button onClick={onSubmit} variant="primary" type="submit">
                                ثبت نام
                            </Button>
                            <Button onClick={login}  variant="primary">
                                ورود
                            </Button>
                        </div>
                        <div className="container text-center">

                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>
    );
};

export default SignUpFormModal;
