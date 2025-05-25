'use client';
import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';
import style from '../style.module.css';

export default function CadastroCliente() {
  return (
    <div>
        <p className={style.title}>Cadastro &gt; Novo cadastro</p>
        <hr />

        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-2">
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>CPF/CNPJ</Form.Label>
                        <Form.Control type="text" placeholder="xxx.xxx.xxx-xx ou xxx.xxx.xxx/xxxx-xx" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" placeholder="(xx) x xxxx-xxxx" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="text" placeholder="(xx) x xxxx-xxxx" />
                        <Form.Text className="text-muted"> Se possível whatsapp </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="text" placeholder="email@exemplo.com" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="text" placeholder="xxxxx-xx" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Logradouro</Form.Label>
                        <Form.Control type="text" placeholder="Av/Rua" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Número</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Estado civil</Form.Label>
                        <Form.Select aria-label="Default select example">
                        <option>Selecione</option>
                        <option value="">Casado</option>
                        <option value="2">Solteiro</option>
                        <option value="3">Viúvo</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Observações</Form.Label>
                        <Form.Control
                        as="textarea"
                        placeholder="Digite aqui observações sobre esse cliente"
                        style={{ height: '100px' }}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className='float-end'>
                <Col>
                    <Button variant='primary' size='lg'>Voltar</Button>
                </Col>
                <Col>
                    <Button variant='danger' size='lg'>Salvar</Button>
                </Col>
            </Row>
        </Form>
    </div>
  );
}
