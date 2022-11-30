import styles from './Navigation.module.css';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className={styles.Nav}>
      {console.log(location.pathname, process.env.PUBLIC_URL)}
      <Link 
        className={ 
          location.pathname === process.env.PUBLIC_URL ? styles.Selected : styles.Button } to={process.env.PUBLIC_URL}>
        About Me
      </Link>
      <Link
        className={ location.pathname === process.env.PUBLIC_URL + '/portfolio' ? styles.Selected : styles.Button } 
        to={process.env.PUBLIC_URL + '/portfolio'}
      >
        Portfolio
      </Link>
      <Link 
        className={ location.pathname === process.env.PUBLIC_URL + '/contact' ? styles.Selected : styles.Button } 
        to={process.env.PUBLIC_URL + '/contact'}
      >
        Contact Me
      </Link>
      <Link 
        className={ location.pathname === process.env.PUBLIC_URL + '/resume' ? styles.Selected : styles.Button } 
        to={process.env.PUBLIC_URL + '/resume'}
      >
        Resumé
      </Link>
    </nav>
  )
}

export default Navbar;