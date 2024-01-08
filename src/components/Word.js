import React from 'react'

function Word({word}) {
    const [isShow, setIsShow] = React.useState(false);
    const [isDone, setIsDone] = React.useState(word.isdone);

    function toggleIsShow() {
        setIsShow(!isShow);
    }

    function toggleIsDone() {
        setIsDone(!isDone);
    }

  return (
    <tr className={isDone? 'off': ''}>
        <td>
            <input type='checkbox' checked={isDone} onChange={toggleIsDone} />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.ko}</td>
        <td>
            <button onClick={ toggleIsShow }>뜻 {isShow?'숨기기':'보기'}</button>
            <button className="btn_del">삭제</button>
        </td>
    </tr>
  )
}

export default Word
