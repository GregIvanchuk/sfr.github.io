import styles from './ForUs.module.css';
import React, { useContext } from 'react';
import LanguageContext from "../../../LanguageContext";
function ForUs() {
  const { language, setLanguage, t } = useContext(LanguageContext);
  return (
      <>
     <main>
        <div className={styles.homeContent}>
           <div className={styles.homeInfo}>
            <div className={styles.head} >
          <h1>{t("aboutTitle")}</h1>
          {/* <img height={300} width={800} src="/images/forus.jpg" /> */}
          </div>
          <div className={styles.line}></div>
          <h3>{t("abouth3")}<br/>{t("abouth3")}</h3>
          
          <div className={styles.line}></div>
          <div className={styles.paragraphs}>
          <div className={styles.paragraph}>
            <h3>{t("aboutParagraf1")}</h3>
            <p>{t("aboutText1")}</p>
            </div>
           < div className={styles.paragraph}>
            <h3>{t("aboutParagraf2")}</h3>
            <p>{t("aboutText2")}</p>
          </div>
          </div>

        </div>
        </div>
         </main>
      </>
  );
}

export default ForUs;