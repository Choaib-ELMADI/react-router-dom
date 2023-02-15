import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { RootLayout, HelpLayout, CareersLayout } from './Layouts/index';

import { contactAction } from './pages/help/Contact';
import CareerError from './pages/careers/CareerError';
import { careersLoader } from './pages/careers/Careers';
import { careerDetailsLoader } from './pages/careers/CareerDetails';
import { Home, About, Help, Contact, Careers, CareerDetails, NotFound } from './pages/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={ <Home /> } />
      <Route path='about' element={ <About /> } />


      <Route path='help' element={ <HelpLayout /> }>
        <Route path='faq' element={ <Help /> } />
        <Route path='contact' element={ <Contact /> } action={ contactAction } />
      </Route>


      <Route 
        path='careers' 
        element={ <CareersLayout /> } 
        errorElement={ <CareerError /> }
      >
        <Route 
          index 
          element={ <Careers /> }
          loader={ careersLoader }
        />
        <Route
          path=':id'
          element={ <CareerDetails /> } 
          loader={ careerDetailsLoader }
          
        />
      </Route>


      <Route path='*' element={ <NotFound /> } />
    </Route>
  )
)



const App = () => {
  return (
    <RouterProvider router={ router } />
  );
};

export default App;