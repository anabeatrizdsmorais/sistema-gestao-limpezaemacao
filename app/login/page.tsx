
"use client";

import {Container, Row, Col, Form, Button, Image, InputGroup} from 'react-bootstrap';
import { faEnvelope, faEye, faEyeSlash, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.css';
import { useState } from 'react';
import ModalForgetPassword from './modal';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';

export default function Login () {
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const currentYear = new Date().getFullYear();
    
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password
            });

            if (response.data.token) {
                // Salvar o token no localStorage, cookie, etc.
                localStorage.setItemdate('token', response.data.token);
                alert('Login realizado com sucesso!');
                // Redirecionar para dashboard, por exemplo
            }
        } catch (err: any) {
            alert('Erro ao fazer login: ' + err.response?.data?.message || 'Erro desconhecido');
        }
    };


    return (
        <>
            <Row>
                <Col sm="4">
                    <div className={style.sideleft_login}> 
                        <div> <Image src="/image/logo-la.png" width={300} /> </div> 
                        <p style={{'color': '#fff', 'fontSize': '0.8rem', 'textAlign': 'center'}}>Ipatinga/MG 
                            <br></br> <a style={{'color': '#fff', 'textDecoration': 'none'}} href='https://wa.me/553172131818'> (31)9 7213-1818 <FontAwesomeIcon icon={faPhone} /></a>
                            <br></br> adm.limpezaemacao@gmail.com <FontAwesomeIcon icon={faEnvelope} />
                            <br></br> <small> {currentYear}</small>
                        </p>
                    </div>
                </Col>
                <Col sm="8">
                    <div className={style.sideright}>
                        <div className={style.borderLogin}>
                            <p className={style.sideright_p}>
                                Seja bem-vindo(a) ao <br></br>Sistema de Gestão <strong>Bivictrus</strong> <br></br>
                            </p>
                            <Form className={style.sideright_login} onSubmit={handleLogin}>
                                <Col sm="10">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" id="email" placeholder="exemplo@email.com" onChange={(e) => setEmail(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                                <Col sm="10">
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Senha</Form.Label>
                                        <InputGroup className="mb-3">
                                            <Form.Control aria-label="password" id="password" type={showPassword ? 'text' : 'password'} aria-describedby="basic-addon2" onChange={(e) => setPassword(e.target.value)}/>
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
                    </div>
                </Col>
            </Row>
            {showModal && (
                <ModalForgetPassword show={showModal} onClose={() => setShowModal(false)} />
            )}
        </>
    );
}