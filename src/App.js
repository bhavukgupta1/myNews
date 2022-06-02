// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './comps/Navbar';
import News from './comps/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>

        <div class="p-3 mb-2 bg-dark text-white">
          <Router>
            <Navbar />
            <hr /><hr />
            <Routes>
              <Route exact path='/' element={<News size={6} country='in'  key="general" category="general" />} />
              <Route exact path='/general' element={<News size={6} country='in'  key="general" category="general" />} />
              <Route exact path='/business' element={<News size={6}  key="business"country='in' category="business" />} />
              <Route exact path='/science' element={<News size={6} key="science" country='in' category="science" />} />
              <Route exact path='/sports' element={<News size={6} key="sports" country='in' category="sports" />} />
              <Route exact path='/technology' element={<News size={6} key="" country='in' category="technology" />} />
              <Route exact path='/technology' element={<News size={6} key="" country='in' category="technology" />} />

            </Routes>

          </Router>

        </div>









      </>
    )
  }
}
