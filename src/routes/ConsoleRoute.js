import React, { Component } from 'react';
import styles from '../css/Console.module.css';
import Console from '../component/Console/Console';
import {Helmet} from 'react-helmet';

class ConsoleRoute extends Component
{
  render() {
    return (
      <div className={styles.consoleRoute}>
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Console />
      </div>
    );
  }
}

export default ConsoleRoute;
