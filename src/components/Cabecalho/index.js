import CabecalhoLink from "components/CabecalhoLink";
import styles from "./Cabecalho.module.css"
const { Link } = require("react-router-dom");

function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <Link to={"./"}>
                <img src="/images/logo.png" alt="Logo cinetag"/>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho