import React, { Component } from 'react';
import styles from '../css/Console.module.css';
import {Link} from 'react-router-dom';

class Console extends Component
{
  render() {
    return (
      <div className={styles.Console}>
        <p>
          > Full website coming soon <span className={styles.flashing}>_</span>
        </p>
        <p>
          <Link to="/console">> Console</Link>
        </p>
      </div>
    );
  }
}

export default Console;