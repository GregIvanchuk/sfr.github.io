import styles from './App.module.css';
import Footer from './components/Footer';
import Main from './components/Main';
function App() {
  return (
     <div className={styles.container}>
    <Main/>
  <Footer/>
   </div>
  );
}

export default App;
