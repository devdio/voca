import React from 'react'
import World from './World'
import styles from './Hello.module.css'

function Hello() {
    // 배열을 반환 (구조 분해 문법)
  const [name, setName] = React.useState('John');

  function showText(val) {
  }

  function changeName() {
    const newName = name == 'John' ? "Mike" : "John";
    console.log(newName);
    setName(newName);
  }

  return (
    <div className="App">
      <div>{name}</div>
      <input type='text' onChange={
        (e) => {
          showText(e.target.value)
        }
      } />
      <button onClick={ changeName }>이름 바꾸기</button>
      
      
    </div>
  );
}

export default Hello
