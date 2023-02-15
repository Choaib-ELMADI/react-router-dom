import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CareerDetails = () => {
    const { id } = useParams();
    const career = useLoaderData();

    return (
        <div 
            style={{ 
                marginTop: '1.5rem',
                background: '#3e3e4a',
                padding: '.75rem .5rem',
                borderRadius: '8px'
            }} 
            className='app__career-details'
        >
            <h2>Career details for { career.title }</h2>
            <p>Starting salary : { career.salary }$</p>
            <p>Location : { career.location }</p>
            <div className='details'>
                Aute laborum sit ullamco ipsum veniam. Quis cillum 
                ullamco irure et voluptate aliquip laborum.
            </div>
        </div>
    );
};

export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:4000/careers/' + id);

    if (!res.ok) {
        throw Error('Could not found this career');
    }

    return res.json();
}