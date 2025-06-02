"use client"
import style from './style.module.css';
import {Table,Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

type Cliente = {
    id: number;
    nome: string;
    cidade: string;
    telefone: string;
    celular: string;
    bairro: string;
};

function Cliente() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/clients');
                setClientes(response.data);
            } catch (error) {
                console.error('Erro ao carregar clientes:', error);
            }
        };

        fetchClientes();
    }, []);

    return (
        <>
            <div style={{marginLeft: '0.85rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p className={style.title}>Clientes</p> 
                    <Link href="/dashboard/cliente/cadastro" passHref legacyBehavior>
                    <Button size="lg" variant="success" title="Cadastrar novo usuário">Cadastrar</Button>
                    </Link>
                </div>
                <hr />
                <div>
                    <Table striped responsive="md">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Cidade/Bairro</th>
                                <th>Telefone/Celular (whatsapp)</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((person) => (
                                <tr key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.nome}</td>
                                    <td>{person.bairro} / {person.cidade}</td>
                                    <td>{person.telefone} / {person.celular}</td>
                                    <td>
                                        <Button variant="primary" title='Editar'><FontAwesomeIcon icon={faPenToSquare} /></Button> &nbsp;
                                        <Button variant="danger" title='Excluir'><FontAwesomeIcon icon={faTrash} /></Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default Cliente;