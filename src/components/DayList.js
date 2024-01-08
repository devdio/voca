import React from 'react'
import dummy from '../db/data.json'


function DayList() {
    console.log(JSON.stringify(dummy))

  return (
    <ul className="list_day">
      {dummy.days.map( day => (
        <li key={day.id}>
            Day {day.day}
        </li>
      ))}
      
      <li></li>
    </ul>
  )
}

export default DayList
