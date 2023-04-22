import styles from  './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <address className={styles.Address}>
        <a href='https://www.linkedin.com/in/danielstewart914/' target='_blank' rel='noreferrer'>
          <img src={process.env.PUBLIC_URL + '/images/In-blue-logo.png'} alt='LinkedIn Icon' className={styles.Icon} />&nbsp;LinkedIn
        </a>
        <a href='https://github.com/danielstewart914'>
          <img src={process.env.PUBLIC_URL + '/images/GitHub-Mark-120px-plus.webp'} alt='GitHub Icon' className={styles.Icon} />&nbsp;GitHub 
        </a>
        <a href='mailto:danielstewart914@outlook.com'>
          <img src={process.env.PUBLIC_URL + '/images/envelope.svg'} alt='Email Icon' className={styles.Icon} />&nbsp;danielstewart914@outlook.com
        </a>
      </address>
    </footer>
  )
};

export default Footer;