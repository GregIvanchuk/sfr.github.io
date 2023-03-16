import Contact from './Contact';
import ForUs from './ForUs';
import Home from './Home';
import styles from './Main.module.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plea from './ContactForm';
import Header from './Header';
function Main() {
  return (
      <main>
      <Router>
        <Header/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/forus" element={<ForUs/>}/>
        <Route exact path="/plea" element={<Plea/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        {/* <Route exact path="/framed" element={<FramedCart/>}/> */}
      </Routes>
</Router>
</main>
  );
}

export default Main;