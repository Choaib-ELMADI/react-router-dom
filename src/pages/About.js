import { useState } from 'react';
import { Navigate } from 'react-router-dom';



const About = () => {
  const [user, setUser] = useState('Choaib');

  if (!user) {
    return <Navigate to='/' replace={ true } />
  }

  return (
    <div className='app__about'>
        <h2>About Us</h2>
        <p>
            Aliquip aliqua ad occaecat laborum proident eiusmod 
            velit amet irure irure incididunt incididunt incididunt. 
            Cillum nulla nostrud commodo amet in. Ad eiusmod laboris 
            exercitation nisi ea et qui deserunt.
        </p>
        <p>
           Aliquip aliqua ad occaecat laborum proident eiusmod 
           velit amet irure irure incididunt incididunt incididunt. 
           Cillum nulla nostrud commodo amet in. Ad eiusmod laboris 
           exercitation nisi ea et qui deserunt.
        </p>
        <p>
           Aliquip aliqua ad occaecat laborum proident eiusmod 
           velit amet irure irure incididunt incididunt incididunt. 
           Cillum nulla nostrud commodo amet in. Ad eiusmod laboris 
           exercitation nisi ea et qui deserunt.
        </p>
        <button 
          style={{
            padding: '4px 8px',
            borderRadius: '6px',
            background: 'orangered',
            color: '#e4e4e4',
            fontSize: '16px',
            border: '1px solid orangered',
            outline: 'none',
            cursor: 'pointer'
          }}
          onClick={ () => setUser(null) }
        >Logout</button>
    </div>
  );
};

export default About;