
import Hello from './components/Hello'
import Welcome from './components/Welcome'

function App() {
  const name = "FLYAI"
  const user = {
    name:'FLYAI',
    points: 75
  }
  return (
    <div className="App">
      <h1 style={{color:'green'}}>Hello {user.name}, your point is {user.points}</h1>
      <Hello></Hello>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
