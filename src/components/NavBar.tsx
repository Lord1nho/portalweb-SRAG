import { Link } from 'react-router-dom';
import { GREEN_FOR_ITENS } from '../assets/colors';
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <header className={styles.NavBarContainer}>
            <Link className={styles.NavBarTittle}
            to='/PaginaInicial'>
            Portal SRAG Brasil
            </Link>
            <div className={styles.NavBarButtonContainer}>
                <Link
                className={styles.NavBarButton}
                to="/PaginaInicial"
                style={{color: GREEN_FOR_ITENS ,textDecoration: 'none'}}
                >
                Página Inicial
                </Link>
                <Link
                className={styles.NavBarButton}
                to="/Perguntas"
                style={{color: GREEN_FOR_ITENS ,textDecoration: 'none'}}
                >
                Perguntas
                </Link>
            </div>
        </header>
    )
}