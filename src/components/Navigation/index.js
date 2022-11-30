import styles from './Navigation.module.css';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className={styles.Nav}>
      <Link 
        className={ location.pathname === '/' ? styles.Selected : styles.Button } 
        to='/'
      >
        About Me
      </Link>
      <Link
        className={ location.pathname === 'portfolio' ? styles.Selected : styles.Button } 
        to='/portfolio'
      >
        Portfolio
      </Link>
      <Link 
        className={ location.pathname === 'contact' ? styles.Selected : styles.Button } 
        to='/contact'
      >
        Contact Me
      </Link>
      <Link 
        className={ location.pathname === 'resume' ? styles.Selected : styles.Button } 
        to='/resume'
      >
        Resumé
      </Link>
    </nav>
  )
}

export default Navbar;