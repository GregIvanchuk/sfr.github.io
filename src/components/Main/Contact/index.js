import styles from './Contact.module.css';
function Contact() {
  return (
    <>
     <h1 className={styles.h1}>Де нас знайти? </h1>
    <div className={styles.main}>
  <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d158.6452961929309!2d30.48038625836912!3d50.49091359729203!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1678866279717!5m2!1sru!2sua"  height={450} ></iframe>
  </div>
    </>
  );
}

export default Contact;
