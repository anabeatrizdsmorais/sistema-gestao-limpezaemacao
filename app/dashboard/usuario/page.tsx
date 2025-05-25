"use client"
import style from './style.module.css';
import {Table,Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'

type Usuario = {
    id: number;
    nome: string;
    email: string;
};

function Usuario() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                setUsuarios(response.data);
            } catch (error) {
                console.error('Erro ao carregar usuarios:', error);
            }
        };

        fetchUsuarios();
    }, []);

    return (
        <>
            <div style={{marginLeft: '0.85rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><p className={style.title}>Usuarios</p> <Button size='lg' variant="success" title='Cadastrar novo usuário'>Cadastrar</Button> </div>
                <hr />
                <div>
                    <Table striped responsive="md">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.nome}</td>
                                    <td>{u.email}</td>
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

export default Usuario;