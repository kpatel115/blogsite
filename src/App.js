import React from 'react';
import { Navigation } from './components/Navigation';
import {BrowserRouter as Router, Swtich, Routes, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation/>
      <h1>Blog</h1>
    </Router>
  );
}

export default App;
