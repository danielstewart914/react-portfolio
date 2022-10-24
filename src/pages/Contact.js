import ContactFrom from '../components/ContactForm';
import styles from './Pages.module.css';

const Contact = () => {
    return (
        <div className={styles.Page}>
            <h3  className={styles.Header}>Contact</h3>
            <ContactFrom />
        </div>
    )
}

export default Contact;