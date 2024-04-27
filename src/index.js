import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/redux';

//components
import App from './App';
import Register from './components/credentialspages/Register';
import Login from './components/credentialspages/Login';
import Signout from './components/credentialspages/Signout';
import Home from './components/welcomepages/Home';
import About from "./components/welcomepages/About";
import Vision from "./components/welcomepages/Vision";
import Chats from "./components/welcomepages/Chats";

import Errorpage from './components/Errorpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Errorpage />

  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Errorpage />

  },
  {
    path: "/signout",
    element: <Signout />,
    errorElement: <Errorpage />

  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Errorpage />

  },
  {
    path: "/chats",
    element: <Chats />,
    errorElement: <Errorpage />

  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Errorpage />

  },
  {
    path: "/vision",
    element: <Vision />,
    errorElement: <Errorpage />

  },
]);

//handling path errors
if(router.path !== "/" || "/login" || "/register" || "/signout" || "/about" || "/chats" || "/vision" || "/home") {
  <Errorpage />
}

root.render(
    <Provider store={store}>
      <React.Fragment>
        <RouterProvider router={router} />
      </React.Fragment>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
