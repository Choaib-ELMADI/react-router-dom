import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { RootLayout, HelpLayout } from './Layouts/index';
import { Home, About, Help, Contact, NotFound } from './pages/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={ <Home /> } />
      <Route path='about' element={ <About /> } />
      <Route path='help' element={ <HelpLayout /> }>
        <Route path='faq' element={ <Help /> } />
        <Route path='contact' element={ <Contact /> } />
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