import ContactForm from '../components/ContactForm';
import styles from './Pages.module.css';

const Contact = () => {
    return (
        <div className={styles.Page}>
            <h3  className={styles.Header}>Contact</h3>
            <p className={ styles.Note } style={{ color: 'red', fontWeight: 600, margin: '1rem' }}>Warning: This form is just a placeholder and does not yet function. If you would like to contact me please use one of the links in the footer.</p>
            <ContactForm />
        </div>
    )
}

export default Contact;