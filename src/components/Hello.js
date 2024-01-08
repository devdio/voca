import React from 'react'
import World from './World'
import UserInfo from './UserInfo'
import styles from './Hello.module.css'

function Hello(props) {
    // 배열을 반환 (구조 분해 문법)
    const [name, setName] = React.useState('John');
    const [age, setAge] = React.useState(props.age);

    console.log(props);

    function showText(val) {
    }

    function changeName() {
        const newName = name == 'John' ? "Mike" : "John";
        console.log(newName);
        setName(newName);
    }

    return (
        <div className="App">
        <UserInfo name={name} age={age} city={props.city}/>

        <input type='text' onChange={
            (e) => {
            showText(e.target.value)
            }
        } />
        <button onClick={ changeName }>이름 바꾸기</button>
        <button onClick={ () => { setAge(age + 1) } }>나이 증가</button>
        <button onClick={ () => { props.handleChangeCity(props.city == 'Busan'?'Seoul':'Busan') } }>도시변경</button>

        </div>
    );
}

export default Hello
