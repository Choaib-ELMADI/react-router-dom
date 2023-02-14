import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { RootLayout, HelpLayout, CareersLayout } from './Layouts/index';
import { careerDetailsLoader } from './pages/careers/CareerDetails';
import { careersLoader } from './pages/careers/Careers';
import { Home, About, Help, Contact, Careers, CareerDetails, NotFound } from './pages/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={ <Home /> } />
      <Route path='about' element={ <About /> } />

      <Route path='help' element={ <HelpLayout /> }>
        <Route path='faq' element={ <Help /> } />
        <Route path='contact' element={ <Contact /> } />
      </Route>

      <Route path='careers' element={ <CareersLayout /> }>
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