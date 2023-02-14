import React from 'react';

import './Contact.css';



const Contact = () => {
  return (
    <div className='app__help-contact'>
        <h1>Drop Us a Line</h1>
        <form onSubmit={ (e) => {
          e.preventDefault()
        } }>
          <input type='email' placeholder='example@gmail.com' required />
          <input type='text'  placeholder='Chaoib ELMADI' required />
          <input type='text'  placeholder='0621200000' required />
          <button type='submit'>Submit</button>
        </form>
    </div>
  );
};

export default Contact;