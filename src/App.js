
function App() {
  const name = "FLYAI"
  const user = {
    name:'FLYAI',
    points: 75
  }
  return (
    <div className="App">
      <h1 style={{color:'green'}}>Hello {user.name}, your point is {user.points}</h1>
      <a href="http://www.naver.com">Naver</a>
    </div>
  );
}

export default App;
