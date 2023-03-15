import styles from './Footer.module.css';
function Footer() {
  return (
     <footer>
        <div className={styles.info}> 
        <div className={styles.location}>
        <div className={styles.locationInfo}>
          <h3>Location</h3>
          <p>500 Terry Francois Street</p>
          <p>San Francisco, CA 94158</p>
        </div>
        </div>
        <div className={styles.location}>
        <div className={styles.locationInfo}>
          <h3>Call</h3>
          <p>T: 123-456-7890</p>
          <p>F: 123-456-7890</p>
        </div>
        </div>
        <div className={styles.location}>
        <div className={styles.locationInfo}>
          <h3>Contact</h3>
          <p>info@mysite.com</p>
        </div>
        </div>
        </div>
        <div className={styles.autor}>
          <p>© 2035 by Business Solutions. Powered and secured by Gregoriy Ivanchuk</p>
        </div>
     </footer>
  );
}

export default Footer;