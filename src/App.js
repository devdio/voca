
import React from 'react'
// import {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import DayList from './components/DayList'
import Day from './components/Day'
import EmptyPage from './components/EmptyPage';
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* 스위치 내부는 URL에 따라 다른 페이지를 보여준다. */}
        <Routes>
          <Route path='/' Component={ DayList } exact />
          <Route path='/day/:day'  Component={ Day } />
          <Route path="*" Component={ EmptyPage } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
