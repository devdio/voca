import React from 'react'
import dummy from '../db/data.json'


function Day() {

    const day = 1;
    const wordList = dummy.words.filter(word => word.day === day);
    console.log(wordList);

  return (
    <table>
        <tbody>
            {
                wordList.map( word => (
                    <tr key={word.id}>
                        <td>{word.day}</td>
                        <td>{word.eng}</td>
                        <td>{word.ko}</td>
                    </tr>
                ))
            }

           
        </tbody>
    </table>
  )
}

export default Day
