
"use client";

import {Container, Row, Col, Form, Button, Image, InputGroup} from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.css';
import { useState } from 'react';


export default function Login () {
    const [showPassword, setShowPassword] = useState(false);
    
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
                            Seja bem-vindo(a) ao Sistema de Gestão <strong>Bivictrus</strong> <br></br>
                            Preencha abaixo para entrar
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
                            <Button variant="primary" type="submit" style={{ width: '50%'}}> Entrar </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
            
        </>
    );
}