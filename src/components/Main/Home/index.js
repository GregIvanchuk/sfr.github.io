import styles from './Home.module.css';
import React, { useContext } from 'react';
import LanguageContext from "../../../LanguageContext";
function Home() {
  const { language, setLanguage, t } = useContext(LanguageContext);
  return (
      <main>
        <div className={styles.homeContent}>
        <img src="/images/earth.gif" />
        <div className={styles.homeInfo}>
          <h1>{t("homeTitle")}</h1>
          <div></div>
          <p>{t("homeContent")}</p>
        </div>
        </div>
         </main>
  );
}
export default Home;
