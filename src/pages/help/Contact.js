import { Form, redirect, useActionData } from 'react-router-dom';

import './Contact.css';



const Contact = () => {
  const data = useActionData();

  return (
    <div className='app__help-contact'>
        <h1>Drop Us a Line</h1>
        <Form method='post' action='/help/contact'>
          <input name='email'  type='email'  placeholder='example@gmail.com' required />
          <input name='name'   type='text'   placeholder='Choaib ELMADI' required />
          <input name='number' type='number' placeholder='0621200000' required />
          { data && data.error && <p style={{ color: 'red' }}>{ data.error }</p> }
          <button type='submit'>Submit</button>
        </Form>
    </div>
  );
};

export default Contact;

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email : data.get('email'),
    name  : data.get('name'),
    number: data.get('number'),
  };

  console.log(submission);
  if (submission.number.length !== 10) {
    return {error: 'Invalid phone number. Try again.'}
  }
  return redirect('/');
}