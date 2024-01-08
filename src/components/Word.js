import { useEffect, useState } from 'react';

function Word({word : w}) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isdone);

    function toggleIsShow() {
        setIsShow(!isShow);
    }

    function toggleIsDone() {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...word,
                isdone: !isDone,
            }),
            }).then(res => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function deleteWord() {
        if (window.confirm("삭제 하시겠습니까?")) {
          fetch(`http://localhost:3001/words/${word.id}`, {
            method: "DELETE",
          }).then(res => {
            if (res.ok) {
              setWord({
                ...word,
                id: 0,
              });
            }
          });
        }
      }
    
      if (word.id === 0) {
        return null;
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
            <button className="btn_del" onClick={deleteWord}>삭제</button>
        </td>
    </tr>
  )
}

export default Word
