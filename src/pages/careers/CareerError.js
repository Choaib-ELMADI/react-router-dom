import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const CareerError = () => {
    const error = useRouteError();

    return (
        <div className='app__career-error'>
            <h1>Error</h1>
            <p>{ error.message }</p>
            <Link 
                style={{ 
                    color: 'orangered', 
                    textDecoration: 'none' 
                }} 
                to='/careers'
            >
                <h1>View Careers</h1>
            </Link>
        </div>
    );
};

export default CareerError;