import React from 'react'
import dummy from '../db/data.json'
import {useParams} from 'react-router-dom'
import Word from './Word'

function Day() {

    // day가 문자열임...
    const { day } = useParams();
    const wordList = dummy.words.filter(word => word.day === Number(day));

    
    // console.log(useParams());

    return (
    <>
    <h2> Day {day} </h2>
    <table>
        <tbody>
            {
                wordList.map( word => (
                    <Word key={word.id} word={word} />
                ))
            }           
        </tbody>
    </table>
    </>
  )
}

export default Day
