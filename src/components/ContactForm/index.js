import { useState } from "react";
import styles from './ContactForm.module.css';
import { useForm } from '@formspree/react';

const ContactForm = () => {
  // state variables
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [state, handleSubmit] = useForm('xdovlenb');

  // methods for setting input
  const set = {
    name: value => setName(value),
    email: value => setEmail(value),
    message: value => setMessage(value)
  }

  // error messages
  const displayError = {
    name: 'You must enter a name!',
    email: 'Email is not valid!',
    message: 'You must enter a message!'
  }

  // test methods for input elements
  const check = {
    name: value => {
      return !!value.length;
    },
    email: value => {
      return /^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(value);
    },
    message: value => {
      return !!value.length;
    }
  }

  // check input when input loses focus
  const handleFocusOut = ( event ) => {
    const { name: inputField, value } = event.target;
    if (!check[inputField](value)) setErrorMessage( displayError[inputField]);
  }

  // set input on change
  const handleInputChange = ( event ) => {
    const { name: inputField, value } = event.target;
    setErrorMessage('');
    return set[inputField](value);
  }

  // function for form submission
  const handleFormSubmit = ( event ) => {
    event.preventDefault();
    if ( !check.name(name) ) {
      setErrorMessage(displayError['name']);  
      return;
    } 
    if ( !check.email(email) ) {
      setErrorMessage(displayError['email']);
      return;
    }
    if ( !check.message(message) ) {
      setErrorMessage(displayError['message']);
      return;
    }

    handleSubmit(event);

    // reset inputs
    setName('');
    setEmail('');
    setMessage('');
  }

  if (state.succeeded) {
      return <p className={styles.Statement}>Thanks for your Submission!</p>
  }

  return (
    <>
      <p className={styles.Statement}>Please fill out the form below to contact me, or to provide feedback.</p>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            value={name}
            name='name'
            onChange={handleInputChange}
            onBlur={handleFocusOut}
            type='text'
            placeholder='Name'
          />
        </label>
        <label>
          Email:
          <input
            value={email}
            name='email'
            onChange={handleInputChange}
            onBlur={handleFocusOut}
            type='text'
            placeholder='Email'
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            name='message'
            onChange={handleInputChange}
            onBlur={handleFocusOut}
            type='text'
            placeholder='Message'
            rows={10}
          />
        </label>
        <div className={styles.Footer}>
          <button 
            className='Button'
            type="submit"
          >
            Submit
          </button>
          <span className={styles.Message}>{errorMessage}</span>
        </div>
      </form>
    </>
  )
}

export default ContactForm;