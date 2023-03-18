import styles from './App.module.css';
import Footer from './components/Footer';
import Main from './components/Main';
import React from "react";
import LanguageContext from './LanguageContext';
import locales from './locales'; // імпортуємо locales
function App() {
  const [language, setLanguage] = React.useState("en");
  const value = {
    language,
    setLanguage,
    t: (key) => locales[language][key],
  };

  return (
    <LanguageContext.Provider value={value}>
    <div className={styles.container}>
    <Main/>
    <Footer/>
    </div>
    </LanguageContext.Provider>
  );
}

export default App;
