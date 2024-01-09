import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Word from './Word';
import useFetch from '../hooks/useFetch';

function Day() {
    // day가 문자열임...
    const { day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
            <h2> Day {day} </h2>
            <table>
                <tbody>
                    {words.map((word) => (
                        <Word key={word.id} word={word} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Day;
