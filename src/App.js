
import React from 'react'
// import {useState} from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

function App() {
  const [city, setCity] = React.useState('Seoul');
  const [age, setAge] = React.useState(10);

  function handleChangeCity(city) {
    setCity(city);
  }

  return (
    <div className="App">
      <Hello age={10} city={city} handleChangeCity={handleChangeCity} />
      <Hello age={20} city={city} handleChangeCity={handleChangeCity} />
      <Hello age={20} city={city} handleChangeCity={handleChangeCity} />
    </div>
  );
}

export default App;
