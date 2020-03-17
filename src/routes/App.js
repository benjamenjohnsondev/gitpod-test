import React, { PureComponent } from "react";
import logo from '../media/logo-edited.svg';
import componentStyles from '../css/App.module.css';
import buttonStyles from "../css/ButtonStyles.module.css";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import classNames from "classnames/bind";
let cx = classNames.bind(componentStyles);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      actionStyles: "restore"
    };
  }

  consoleAction(action) {
    if (
      (action === "fullscreen" && this.state.actionStyles === "minimise") ||
      (action === "fullscreen" && this.state.actionStyles === "fullscreen")
    ) {
      this.consoleAction("restore");
      return;
    }
    this.setState({
      actionStyles: action
    });
    return;
  }

  componentDidMount() {
    this.consoleAction("restore");
  }

  buttonStyles = {
    closeButton: cx({
      [buttonStyles.Button]: true,
      [buttonStyles.Close]: true
    }),
    minimiseButton: cx({
      [buttonStyles.Button]: true,
      [buttonStyles.Minimise]: true
    }),
    fullscreenButton: cx({
      [buttonStyles.Button]: true,
      [buttonStyles.Fullscreen]: true
    })
  };

  render() {
    return (
      <div
        className={[
          componentStyles.AppWrap +
            " " +
            componentStyles[this.state.actionStyles]
        ]}
      >
        <Helmet>
          <meta charSet="utf-8" />
        </Helmet>
        <header className={componentStyles.AppHeader}>
          <div className={componentStyles.ConsoleHeader}>
            <button
              className={this.buttonStyles.closeButton}
              onClick={() => this.consoleAction("close")}
            />
            <button
              className={this.buttonStyles.minimiseButton}
              onClick={() => this.consoleAction("minimise")}
            />
            <button
              className={this.buttonStyles.fullscreenButton}
              onClick={() => this.consoleAction("fullscreen")}
            />
          </div>
          <div className={componentStyles.Console}>
            <h1>
              <img
                src={logo}
                className={componentStyles.AppLogo}
                width="700"
                height="176"
                alt="Ben Hogben - Full Stack Web Developer"
              />
              <span className={componentStyles.HideMe}>
                Ben Hogben - Full Stack Web Developer
              </span>
            </h1>
            <p>
              check out the <Link to="/console">console</Link>
            </p>
            <p>
              > full website coming soon
              <span className={componentStyles.flashing}>_</span>
            </p>
            {/*<p>
              <Link to="/console">> Console</Link>
            </p>*/}
          </div>
        </header>
        <footer className={componentStyles.AppFooter}>
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
}

export default App;
