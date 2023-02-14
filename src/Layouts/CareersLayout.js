import React from 'react';
import { Outlet } from 'react-router-dom';



const CareersLayout = () => {
  return (
    <div className='app__careers-layout'>
        <h1>Careers</h1>
        <p>
            Amet ut commodo ea nostrud laboris officia. Nisi aliqua 
            tempor id fugiat. Voluptate commodo nisi cupidatat ullamco 
            nulla sunt amet sit.
        </p>

        <Outlet />
    </div>
  );
};

export default CareersLayout;