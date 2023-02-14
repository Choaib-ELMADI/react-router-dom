import React from 'react';
import { Link } from 'react-router-dom';





const NotFound = () => {
  return (
    <div style={{textAlign: 'center', paddingTop: '3rem'}}>
        <h1 style={{ fontSize: '4rem' }}>404</h1>
        <h2 style={{ marginBottom: '3rem' }}>Page Not Found</h2>
        <p>
            Ea aliquip reprehenderit nisi nisi veniam laborum. 
            Consectetur commodo qui ipsum nisi.
        </p>
        <Link style={{ color: 'orangered', textDecoration: 'none' }} to='/'><h1 >Home</h1></Link>
    </div>
  );
};

export default NotFound;