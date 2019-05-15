import React from 'react';
import logo from '../media/logo-edited.svg';
import reactLogo from '../media/logo.svg';
import Console from '../component/Console';
import styles from '../css/App.module.css';

function App() {
  return (
    <div className={styles.AppWrap}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <Console/>
      </header>
      <footer className={styles.AppFooter}>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={reactLogo} alt="react-logo"/>
        </a>
      </footer>
    </div>
  );
}

export default App;
