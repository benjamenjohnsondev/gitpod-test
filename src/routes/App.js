import React from 'react';
import logo from '../media/logo-edited.svg';
// import reactLogo from '../media/logo.svg';
import styles from '../css/App.module.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className={styles.AppWrap}>
      <header className={styles.AppHeader}>
        <div className={styles.Console}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <p>
            check out the <Link to="/console">console</Link>
          </p>
          <p>
            > full website coming soon
            <span className={styles.flashing}>_</span>
          </p>
          {/*<p>
            <Link to="/console">> Console</Link>
          </p>*/}
        </div>
      </header>
      <footer className={styles.AppFooter}>
        {/* <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          aria="react"
        /> */}
      </footer>
    </div>
  );
}

export default App;
