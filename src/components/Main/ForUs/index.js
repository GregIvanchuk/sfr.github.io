import styles from './ForUs.module.css';
function ForUs() {
  return (
      <>
     <main>
        <div className={styles.homeContent}>
           <div className={styles.homeInfo}>
            <div className={styles.head} >
          <h1>Про нас</h1>
          {/* <img height={300} width={800} src="/images/forus.jpg" /> */}
          </div>
          <div className={styles.line}></div>
          <h3>I'm a paragraph.<br/> here to add your own text and edit me.</h3>
          
          <div className={styles.line}></div>
          <div className={styles.paragraphs}>
          <div className={styles.paragraph}>
            <h3>Paragraph 1</h3>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
           < div className={styles.paragraph}>
            <h3>Paragraph 2</h3>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
          </div>

        </div>
        </div>
         </main>
      </>
  );
}

export default ForUs;