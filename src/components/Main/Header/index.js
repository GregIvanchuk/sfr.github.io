import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import React from 'react';
import { useState } from 'react';
function Header() {
  let  [open,setOpen] = React.useState("true")
  let openHandler = () => {
    setOpen(!open);
  }
  return (
    <header>
    <div className={styles.logo}>
      <h1>SUPPORT FOR REFUGEES</h1>
      <p>ми завжди поруч</p>
    </div>
    <div className={open ? styles.menu : styles.menu + " " + styles.active } >
      <ul  onClick={() => openHandler()}>
        <li><Link to="/">ГОЛОВНА</Link></li>
        <li><Link to="/forus">ПРО НАС</Link></li>
        <li><Link to="/plea">ЗАЯВКИ</Link></li>
        <li><Link to="/contact">КОНТАКТИ</Link></li>
      </ul>
      <div className={styles.line}></div>
    </div>
    <div onClick={() => openHandler()}  className={ open ? styles.burger :  styles.burger + " " + styles.active}>
      <span></span>
    </div>
  </header>
  );
}

export default Header;
