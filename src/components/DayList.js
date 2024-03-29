import React from 'react'
import dummy from '../db/data.json'
import {Link} from 'react-router-dom'

function DayList() {

  return (
    <ul className="list_day">
      {dummy.days.map( day => (
        <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
      
      <li></li>
    </ul>
  )
}

export default DayList
