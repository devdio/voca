import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <h1>
        <Link to='/'>토익 영단어(고급)</Link>
      </h1>
      <div className="header">
        <a className="link" href="#x">단어 추가</a> <a className="link" href="#x">날짜 추가</a>
      </div>
    </div>
  )
}

export default Header
