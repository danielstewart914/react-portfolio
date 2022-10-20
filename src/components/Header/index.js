import styles from './Header.module.css';
import Logo from '../Logo';

const Header = () => {
    return (
        <header className={styles.Header}>
            <Logo />
            <div className={styles.Title}>
                <h1>Daniel Stewart</h1>
            </div>
        </header>
    )
}

export default Header;