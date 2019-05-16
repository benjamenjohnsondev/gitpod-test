import React, { Component } from "react";
import styles from "../../css/Console.module.css";
import ConsoleLog from "./ConsoleLog";
import Prompt from "../Console/Prompt";

class Console extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["hey", "world"],
      currText: "",
      history: 0,
      initialText: "Try `help`",
      tempText: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.consoleLog = React.createRef();
  }
  componentDidMount() {
    this.nameInput.focus();
    setTimeout(() => {
      this.showText(this.state.tempText, 0, 100);
    }, 200);
  }
  componentWillMount() {
    let temp = this.state.initialText;
    temp = temp.split("");
    this.setState({
      tempText: temp
    });
  }
  showText(message, index, interval) {
    if (index < message.length) {
      // console.log(message[index]);
      this.setState(state => ({
        currText: state.currText + message[index++]
      }));
      setTimeout(() => {
        this.showText(message, index, interval);
      }, interval);
    }
  }
  incrementHistory(modifier) {
    this.setState(
      {
        history: this.state.history + modifier
      },
      () => {
        console.log(this.state.history);
        let newText = this.state.data[
          this.state.data.length - this.state.history
        ];
        this.setState({
          currText: newText
        });
      }
    );
  }
  onKeyUp(event) {
    if (event.keyCode === 38) {
      event.preventDefault();
      if (this.state.history + 1 <= this.state.data.length) {
        this.incrementHistory(+1);
      } else {
        this.setState({
          currText: "",
          history: 0
        });
      }
    }
  }
  onKeyDown(event) {
    if (event.keyCode === 40) {
      event.preventDefault();
      if (this.state.history + 1 > this.state.data.length) {
        this.incrementHistory(-1);
      } else {
        this.setState({
          currText: "",
          history: 0
        });
      }
    }
  }
  handleChange(event) {
    this.setState({
      currText: event.target.value
    });
  }
  onSubmit(event) {
    event.preventDefault();
    let joined = this.state.data.concat(this.state.currText);
    if (joined !== this.state.data) {
      this.setState({
        data: joined,
        currText: ""
      });
    }
    window.scrollTo(0, document.body.scrollHeight);
  }
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        onClick={() => {
          this.nameInput.focus();
        }}
        className={styles.Console}
      >
        <ConsoleLog data={this.state.data} />
        <div className={styles.promptInput}>
          <Prompt />
          <input
            ref={input => {
              this.nameInput = input;
            }}
            className={styles.input}
            value={this.state.currText}
            onChange={this.handleChange}
            onKeyUp={this.onKeyUp}
            onKeyDown={this.onKeyDown}
            type="text"
          />
        </div>
      </form>
    );
  }
}

export default Console;
