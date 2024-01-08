
import Hello from './components/Hello'
import Welcome from './components/Welcome'

function App() {
  
  function showName() {
    console.log('이름 보기')
  }

  function showText(val) {
    console.log(val)
  }

  return (
    <div className="App">
      <button onClick={showName}>이름 보기</button>
      <button onClick={ () => {
        console.log('나이 : ', 30)
      } }>나이 보기</button>
      
      <input type='text' onChange={
        (e) => {
          showText(e.target.value)
        }
      } />
    </div>
  );
}

export default App;
