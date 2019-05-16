import React, { Component } from "react";
import PreTerm from "./Prompt";
import styles from "../../css/Console.module.css";

class ConsoleLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  handleRender(item, key) {
    return (
      <div className={styles.command} key={key}>
        <PreTerm /><span className={styles.log}>{item}</span>
      </div>
    );
  }
  render() {
    const commands = this.props.data.map((item, key) => {
      return this.handleRender(item, key);
    });
    return <div>{commands}</div>;
  }
}

export default ConsoleLog;
