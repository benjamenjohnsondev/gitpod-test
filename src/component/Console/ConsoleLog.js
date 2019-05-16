import React, { Component } from "react";
import PreTerm from "./Prompt";
import styles from "../../css/Console.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Ascii() {
  let raw =
    "095 095 095 095 095 095 095 095 032 032 095 095 095 095 095 095 095 095 095 095 095 095 095 095 095 032 032 032 095 095 095 095 013 010 092 095 095 095 095 095 095 032 092 032 092 095 032 032 032 095 095 095 095 095 047 092 032 032 032 092 032 047 032 032 032 047 013 010 032 124 032 032 032 032 124 032 032 092 032 124 032 032 032 032 095 095 041 095 032 032 092 032 032 032 089 032 032 032 047 032 013 010 032 124 032 032 032 032 096 032 032 032 092 124 032 032 032 032 032 032 032 032 092 032 032 092 032 032 032 032 032 047 032 032 013 010 047 095 095 095 095 095 095 095 032 032 047 095 095 095 095 095 095 095 032 032 047 032 032 032 092 095 095 095 047 032 032 032 013 010 032 032 032 032 032 032 032 032 092 047 032 032 032 032 032 032 032 032 092 047 032 032 032 032 032 032 032 032 032 032 032 032";
  let characters = raw.split(" ");
  let ascii = [];
  characters.forEach(char => {
    ascii.push(String.fromCharCode(char));
  });
  let output = ascii.join("");
  return (
    <div>
      <div className={styles.ascii}>{output}</div>
    </div>
  );
}

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
        <PreTerm />
        {this.props.commands[item] ? (
          ""
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
        <span className={styles.log}>{item}</span>
      </div>
    );
  }
  render() {
    const commands = this.props.data.map((item, key) => {
      return this.handleRender(item, key);
    });
    return (
      <div>
        <Ascii/>
        {commands}
      </div>
    );
  }
}

export default ConsoleLog;
