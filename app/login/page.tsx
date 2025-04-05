
"use client";

import {Container, Row, Col, Form, Button, Image, InputGroup} from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.css';
import { useState } from 'react';
import ModalForgetPassword from './modal';
import { useRouter, useParams } from 'next/navigation';

export default function Login () {
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>
            <Row>
                <Col>
                    <div className={style.sideleft_login}>
                        <div>
                            <Image src="/image/logo-la.png" width={400} />
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={style.sideright}>
                        <p className={style.sideright_p}>
                            Seja bem-vindo(a) ao <br></br>Sistema de Gestão <strong>Bivictrus</strong> <br></br>
                        </p>
                        <Form className={style.sideright_login}>
                            <Col sm="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" id="email" placeholder="exemplo@email.com" />
                                    <Form.Text className="text-muted"> Nunca compartilharemos seu e-mail com mais ninguém. </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col sm="6">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control aria-label="password" id="password" type={showPassword ? 'text' : 'password'} aria-describedby="basic-addon2" />
                                        <InputGroup.Text id="basic-addon2" style={{ cursor: 'pointer' }} onClick={togglePasswordVisibility}>
                                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <a className="mb-6 cursor-pointer text-blue-600 hover:underline" onClick={() => setShowModal(true)}>Esqueci minha senha</a>
                            <Button variant="primary" type="submit" style={{ width: '50%'}}> Entrar </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
            {showModal && (
                <ModalForgetPassword show={showModal} onClose={() => setShowModal(false)} />
            )}
        </>
    );
}