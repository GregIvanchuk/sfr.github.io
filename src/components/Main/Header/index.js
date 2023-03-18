import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from "../../../LanguageContext"
import styles from './Header.module.css';

function Header() {
  const { language, setLanguage, t } = useContext(LanguageContext);
  let  [open,setOpen] = React.useState("true")
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  let openHandler = () => {
    setOpen(!open);
  }

  return (
    <header>
      <div className={styles.logo}>
        <h1>SUPPORT FOR REFUGEES</h1>
        <p>{t('slogan')}</p>
      </div>
      <div className={open ? styles.menu : styles.menu + " " + styles.active }>
        <div className={styles.menu_l}>
          <ul onClick={() => openHandler()}>
            <li>
              <Link to="/">{t('home')}</Link>
            </li>
            <li>
              <Link to="/about">{t('about')}</Link>
            </li>
            <li>
              <Link to="/apply">{t('apply')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('contact')}</Link>
            </li>
          </ul>
          <select value={language} onChange={handleLanguageChange}>
            <option value="ua">ua</option>
            <option value="en">en</option>
            <option value="fr">fr</option>
          </select>
        </div>
        <div className={styles.line}></div>
      </div>
      <div onClick={() => openHandler()}  className={ open ? styles.burger :  styles.burger + " " + styles.active}>
        <span></span>
      </div>
    </header>
  );
}

export default Header;