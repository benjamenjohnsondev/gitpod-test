import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import styles from './css/App.module.css';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import ConsoleRouter from './routes/ConsoleRoute';

function Router() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Route exact path="/" component={App}/>
        <Route path="/console" component={ConsoleRouter}/>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
