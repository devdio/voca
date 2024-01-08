import React from 'react'
import World from './World'
import styles from './Hello.module.css'

function Hello() {
    console.log(styles)

  return (
    <div>
      <p className={styles.hello_world}>Hello!</p>
      <World />
    </div>
  )
}

export default Hello
