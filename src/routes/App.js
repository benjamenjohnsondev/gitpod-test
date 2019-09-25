import React from 'react';
import logo from '../media/logo-edited.svg';
import styles from '../css/App.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className={styles.AppWrap}>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <header className={styles.AppHeader}>
        {/* <div className={styles.ConsoleHeader} /> */}
        <div className={styles.Console}>
          <h1>
            <img
              src={logo}
              className={styles.AppLogo}
              alt="Ben Hogben - Full Stack Web Developer"
            />
            <span className={styles.HideMe}>
              Ben Hogben - Full Stack Web Developer
            </span>
          </h1>
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
