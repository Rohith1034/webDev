import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components

import App from './App'; // Import your main App component
import FormComponent from './Form'; // Import the FormComponent

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form" element={<FormComponent />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
