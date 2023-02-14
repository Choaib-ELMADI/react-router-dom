import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { RootLayout, HelpLayout } from './Layouts/index';
import { Home, About } from './pages/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={ <Home /> } />
      <Route path='about' element={ <About /> } />
      <Route path='help' element={ <HelpLayout /> }>
        <Route path='faq' />
        <Route path='contact' />
      </Route>
    </Route>
  )
)



const App = () => {
  return (
    <RouterProvider router={ router } />
  );
};

export default App;