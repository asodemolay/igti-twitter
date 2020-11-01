import React from 'react'
import css from './sidebar.module.css';


//"sidenav"
export default function Sidebar() {

  return (
    <>
      <ul className={css.sidebar}>
        <li><div className={css.user}>
          <img className={css.avatar} src="img/aso.jpg" alt="User's Avatar" />
          <span className={css.name}>Anderson Oliveira</span>
          <a href="http://twitter.com/asodm" target="_blank" rel="noreferrer"><span className={css.accountName}>@asodm</span></a>
        </div></li>
        <li className={css.title}>
          <img src="img/twitter.png" alt="twitter" />
          <h1>IGTI - Twitter</h1>
        </li>

      </ul>
    </>
  )
}
