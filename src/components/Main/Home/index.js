import styles from './Home.module.css';
function Home() {
  return (
      <main>
        <div className={styles.homeContent}>
        <img src="/images/earth.gif" />
        <div className={styles.homeInfo}>
          <h1>Допомога біженцям по всьому cвіту</h1>
          <div></div>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.
             I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        </div>
         </main>
  );
}
export default Home;
