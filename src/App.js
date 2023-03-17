import styles from './App.module.css';
import Footer from './components/Footer';
import Main from './components/Main';
function App() {
  console.log(process.env);
  return (
     <div className={styles.container}>
    <Main/>
  <Footer/>
   </div>
  );
}

export default App;
