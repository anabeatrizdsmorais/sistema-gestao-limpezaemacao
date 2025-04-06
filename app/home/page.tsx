import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Cliente from '../cliente/page';


function Home() {
    const today = new Date();
    return (
        <>
    <div className={style.layout_container}>
        {/* MENU LATERAL */}
        <aside className={style.aside_menu}>
            <nav className={style.nav_menu}>
                <img src="/image/logo-la.png" alt="Logo" width={150} style={{margin: '0 auto'}}/>
                <ul>
                    <li><a href="agenda">Agenda</a></li>
                    <li><a href="financeiro">Financeiro</a></li>
                    <li><a href="cliente">Clientes</a></li>
                    <li><a href="colaboradores">Colaboradores</a></li>
                    <li><a href="fornecedores">Fornecedores</a></li>
                    <li><a href="estoque">Estoque</a></li>                        
                </ul>
            </nav>
            <div className={style.btn_logout}>
                <FontAwesomeIcon icon={faRightFromBracket} className={style.icon_logout}/>
                <a href="logout"> Sair </a>
            </div>
        </aside>

        {/* ÁREA PRINCIPAL */}
        <div className={style.main_area}>
            <div className={style.barra_menu}>
                <p style={{fontSize: '1.8rem'}}>Gestão Bivictrus</p>
                <p>{ today.toLocaleString() }</p>
            </div>
            <div className={style.conteudo}>
                {/* Aqui vai seu conteúdo branco */}
                <Cliente />
            </div>
        </div>
    </div>
</>

    );
}

export default Home;