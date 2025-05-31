'use client';
import React, { useEffect, useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';
import style from '../style.module.css';
import { buscaCep } from '../../../api/buscaCep'
import { useForm, SubmitHandler } from "react-hook-form"
import { NavigationMenu } from '@/app/components/NavigationMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type InputsForm = {
    nome: string,
    cpf_cnpj: string,
    email: string,
    telefone: string,
    celular: string,
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    estado_civil: string,
    observacoes: string,
}

const icone = <FontAwesomeIcon icon={faChevronRight} /> ;

export default function CadastroCliente() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState({
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: '',
    });
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<InputsForm>()
    
    const onSubmit: SubmitHandler<InputsForm> = async (data) => {
        try {
          const response = await fetch('/api/registerClients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
      
          if (!response.ok) throw new Error("Erro ao salvar");
      
          alert("Cliente cadastrado com sucesso!");
        } catch (error) {
          console.error(error);
          alert("Erro ao cadastrar cliente.");
        }
    };

    const watchCep = watch("cep");
    useEffect(() => {
        const novoCep = watchCep?.replace(/\D/g, '');
        if (novoCep?.length === 8) {
            buscaCep(novoCep).then((data) => {
                if (data) {
                    setValue("logradouro", data.logradouro);
                    setValue("bairro", data.bairro);
                    setValue("cidade", data.localidade);
                    setValue("uf", data.uf);
                }
            });
        }
    }, [watchCep]);

    return (
        <div>
            <NavigationMenu sub1='Cliente' sub2='Cadastro' sub3='Novo' icon={icone}></NavigationMenu>
            <hr />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col>
                        <Form.Group className="mb-2">
                            <Form.Label>Nome completo <span style={{color: "red", fontWeight: 'bold'}}>*</span></Form.Label>
                            <Form.Control type="text" id='nome' placeholder="" {...register("nome")}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>CPF/CNPJ <span style={{color: "red", fontWeight: 'bold'}}>*</span></Form.Label>
                            <Form.Control type="text" id='cpf_cnpj' placeholder="xxx.xxx.xxx-xx ou xxx.xxx.xxx/xxxx-xx" {...register("cpf_cnpj")} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" id='telefone' placeholder="(xx) x xxxx-xxxx" {...register("telefone")}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Celular <span style={{color: "red", fontWeight: 'bold'}}>*</span></Form.Label>
                            <Form.Control type="text" id='celular' placeholder="(xx) x xxxx-xxxx" {...register("celular")}/>
                            <Form.Text className="text-muted"> Se possível whatsapp </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="text" id='email' placeholder="email@exemplo.com" {...register("email")}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>CEP <span style={{color: "red", fontWeight: 'bold'}}>*</span></Form.Label>
                            <Form.Control type="text" id='cep' value={cep} placeholder="xxxxx-xx" {...register("cep")}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Logradouro <span style={{color: "red", fontWeight: 'bold'}}>*</span></Form.Label>
                            <Form.Control type="text" id='logradouro' placeholder="Av/Rua" value={endereco.logradouro} {...register("logradouro")}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Número <span style={{color: "red", fontWeight: 'bold'}}>*</span></Form.Label>
                            <Form.Control type="text" id='numero' placeholder="" {...register("numero")}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control type="text" id='complemento' placeholder="" {...register("complemento")}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Bairro <span style={{color: "red", fontWeight: 'bold'}}>*</span></Form.Label>
                            <Form.Control type="text" id='bairro' value={endereco.bairro} placeholder="" {...register("bairro")}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Cidade <span style={{color: "red", fontWeight: 'bold'}}>*</span></Form.Label>
                            <Form.Control type="text" id='cidade' value={endereco.localidade} placeholder="" {...register("cidade")}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>UF <span style={{color: "red", fontWeight: 'bold'}}>*</span></Form.Label>
                            <Form.Control type="text" id='uf' value={endereco.uf} placeholder="" {...register("uf")}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Estado civil</Form.Label>
                            <Form.Select aria-label="Default select example" {...register("estado_civil")}>
                            <option>Selecione</option>
                            <option value="solteiro">Solteiro(a)</option>
                            <option value="casado">Casado(a)</option>
                            <option value="divorciado">Divorciado(a)</option>
                            <option value="separado">Separado(a)</option>
                            <option value="viuvo">Viúvo(a)</option>
                            <option value="uniao_estavel">União Estável</option>
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
                            {...register("observacoes")}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <br />
                <span className='font-weight-bold'>* Campos obrigatórios</span>
                <hr />
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
