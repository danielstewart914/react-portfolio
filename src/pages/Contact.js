import ContactForm from '../components/ContactForm';
import styles from './Pages.module.css';

const Contact = () => {
    return (
        <div className={styles.PageCol}>
            <h3  className={styles.Header}>Contact</h3>
            <ContactForm />
        </div>
    )
}

export default Contact;