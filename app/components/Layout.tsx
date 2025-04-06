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
          <img src="/image/logo-la.png" alt="Logo" width={150} style={{ margin: '0 auto' }} />
          <ul>
            <li><Link href="/agenda">Agenda111</Link></li>
            <li><Link href="/financeiro">Financeiro</Link></li>
            <li><Link href="/cliente">Clientes</Link></li>
            <li><Link href="/colaboradores">Colaboradores</Link></li>
            <li><Link href="/fornecedores">Fornecedores</Link></li>
            <li><Link href="/estoque">Estoque</Link></li>
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
