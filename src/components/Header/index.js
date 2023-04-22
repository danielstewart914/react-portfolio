import styles from './Header.module.css';

const Header = () => {
  return (
  <header className={styles.Header}>
    {/* <Logo /> */}
    <img className={styles.Logo} src={process.env.PUBLIC_URL + '/images/icons/danielstewart.svg'}  alt='Daniel Stewart Logo' />
    <div className={styles.Title}>
      <h1>Daniel Stewart</h1>
    </div>
  </header>
  )
}

export default Header;