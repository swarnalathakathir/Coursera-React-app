import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import { fetchAPI, submitAPI } from './LiitleLemonResBookingAPI';

function App() {

  const initialState = { availableTimes: fetchAPI(new Date()) }
  const [state, dispatch] = React.useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) }
  }
  function submitForm(formData) {
    if (submitAPI(formData)) {
    }
  }

  const router = createBrowserRouter([{
    path: '',
    element: <RootLayout />,
    children: [{
      path: '',
      element: <Home />
    },
    {
      path: 'booking',
      element: <Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>
    },
    {
      path: 'confirmation',
      element: <Confirmation />
    }
    ]
  }])
  return (
    <RouterProvider router={router} />

  );
}

export default App;