import React, { Component } from 'react';
import styles from '../css/Console.module.css';
import Console from '../component/Console/Console';

class ConsoleRoute extends Component
{
  render() {
    return (
      <div className={styles.consoleRoute}>
        <Console/>
      </div>
    );
  }
}

export default ConsoleRoute;
