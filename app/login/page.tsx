
"use client";

import { Row, Col, Form, Button, Image, InputGroup, Toast, ToastContainer } from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.css';
import { useState } from 'react';
import ModalForgetPassword from './modal';
import { useRouter } from 'next/navigation'; //pq a pasta principal é app. se fosse pages seria next/router
import axios from 'axios';

type LoginData = {
    email: string;
    password: string;
};

export default function Login () {
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [showToast, setShowToast] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const loginData: LoginData = { email, password };
        try {
            const response = await axios.post('http://localhost:5000/api/login', 
                loginData,
                { headers: { 'Content-Type': 'application/json' } }
            );
    
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                setShowToast(true);
                setTimeout(() => router.push('/dashboard/home'), 2000);
            }
        } catch (err: any) {
            alert('Erro ao fazer login: ' + (err.response?.data?.erro || 'Erro desconhecido'));
        }
    };


    return (
        <>
            <Row>
                <Col sm="4">
                    <div className={style.sideleft_login}> 
                        <div> <Image src="/image/logo-la.png" width={300} alt="Logo"/> </div> 
                        <p style={{'color': '#fff', 'fontSize': '0.8rem', 'textAlign': 'center'}}>Ipatinga/MG 
                            <br></br> <a style={{'color': '#fff', 'textDecoration': 'none'}} href='https://wa.me/553172131818'> (31)9 7213-1818 </a>
                            <br></br> adm.limpezaemacao@gmail.com
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
                                    <Form.Group className="mb-3">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            id="email"
                                            name='email'
                                            value={email}
                                            placeholder="exemplo@email.com" 
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm="10">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Senha</Form.Label>
                                        <InputGroup className="mb-3">
                                            <Form.Control 
                                                aria-label="password" 
                                                id="password" 
                                                name='password'
                                                value={password}
                                                type={showPassword ? 'text' : 'password'} 
                                                aria-describedby="basic-addon2" 
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
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

            {showToast && (
           
                <ToastContainer
                    className="p-3"
                    position='top-end'
                    style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }}
                >
                <Toast bg='success' delay={2000} autohide>
                    <Toast.Header closeButton={true}>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Sucesso</strong>
                    <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>Aguarde... Você está entrando no sistema.</Toast.Body>
                </Toast>
                </ToastContainer>
            )}
        </>
    );
}