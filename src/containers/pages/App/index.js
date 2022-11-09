// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from '../../../config/redux'
import { Provider } from 'react-redux';

// Element
import Dashboard from './../Dashboard'
import Tambah_barang from './../Tambah_barang'
import NavbarComponent from './../../../components/molecule/navbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tambah_barang" element={<Tambah_barang />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
