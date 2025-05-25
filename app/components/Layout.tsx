'use client';

import style from '../styles/layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  const today = new Date();

  return (
    <div className={style.layout_container}>
      <aside className={style.aside_menu}>
        <nav className={style.nav_menu}>
          <img src="/image/logo-la.png" alt="Logo" width={100} style={{ margin: '0 auto' }} />
          <ul>
            <li><Link href="/dashboard/agenda">Agenda</Link></li>
            <li><Link href="/dashboard/financeiro">Financeiro</Link></li>
            <li><Link href="/dashboard/cliente">Clientes</Link></li>
            <li><Link href="/dashboard/colaboradores">Colaboradores</Link></li>
            <li><Link href="/dashboard/fornecedores">Fornecedores</Link></li>
            <li><Link href="/dashboard/estoque">Estoque</Link></li>
            <li><Link href="/dashboard/usuario">Usuários</Link></li>
          </ul>
        </nav>
        <div className={style.btn_logout}>
          <FontAwesomeIcon icon={faRightFromBracket} className={style.icon_logout} />
          <Link href="/logout">Sair</Link>
        </div>
      </aside>

      <div className={style.main_area}>
        <div className={style.barra_menu}>
          <p style={{ fontSize: '1.8rem' }}>Gestão Bivictrus</p>
          <p>{today.toLocaleString()}</p>
        </div>
        <div className={style.conteudo}>{children}</div>
      </div>
    </div>
  );
}
