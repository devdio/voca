import React from 'react'

function UserInfo(props) {
  return (
    <div>
       <div>이름 : {props.name}</div>
       <div>나이 : {props.age}</div>
       <div>도시 : {props.city}</div>
    </div>
  )
}

export default UserInfo
