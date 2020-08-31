import React from 'react';
import './App.css';
import MainPage from './components/mainPage'
import Location from './components/location'
import Accommodation from './components/accommodation'

function App() {
  return (
    <div className="App">
      <MainPage class="page"/>
      <Location class="page"/>
      <Accommodation class="page"/>
    </div>
  );
}

export default App;
