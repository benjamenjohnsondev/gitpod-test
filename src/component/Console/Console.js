import React, { Component } from "react";
import styles from "../../css/Console.module.css";
import ConsoleLog from "./ConsoleLog";
import Prompt from "../Console/Prompt";

class Console extends Component {
  constructor(props) {
    super(props);
    let temp = "Just a demo, no commands yet. Try navigating!";
    temp = temp.split("");
    this.state = {
      data: ["hey", "world"],
      currText: "",
      history: 0,
      initialText: "Just a demo, no commands yet. Try navigating!",
      tempText: temp,
      commands: {
        'easteregg' : this.easterEgg
      },
      modifier: "",
      timeout: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.consoleLog = React.createRef();
    this.onKeyInput = this.onKeyInput.bind(this);
    this.clearModifier = this.clearModifier.bind(this);
  }
  easterEgg() {
    console.log(
      "%c/****************\n * You found me! \n****************/",
      "background: #26cdab; color: #fff; padding: 10px 10px;"
    );
  }
  componentDidMount() {
    this.nameInput.focus();
    this.setState({timeout: setTimeout(() => {
      this.showText(this.state.tempText, 0, 100);
    }, 200)});
  }
  showText(message, index, interval) {
    if (index < message.length) {
      this.setState(state => ({
        currText: state.currText + message[index++]
      }));
      this.setState({ timeout: setTimeout(() => {
        this.showText(message, index, interval);
      }, interval)
        });
    }
  }
  incrementHistory(modifier) {
    this.setState(
      {
        history: this.state.history + modifier
      },
      () => {
        let newText = this.state.data[
          this.state.data.length - this.state.history
        ];
        this.setState({
          currText: newText
        });
      }
    );
  }
  onKeyInput(event) {

    switch (event.keyCode) {
      case 38:
        event.preventDefault();
        this.onKeyUp();
        break;

      case 40:
        event.preventDefault();
        this.onKeyDown();

        break;

      case 17:
        this.setState({
          modifier: "ctrl"
        })
        break;

      case 67:
        if (this.state.modifier === "ctrl") {
          this.consoleLogData();
          clearTimeout(this.state.timeout);
          clearInterval(this.state.currFunction);
        }
        break;

      default:
        break;
    }
  }
  clearModifier() {
    this.setState({
      modifier: ""
    })
  }
  onKeyUp() {
    if (this.state.history + 1 <= this.state.data.length) {
      this.incrementHistory(+1);
    }
  }
  onKeyDown() {
      if (
        this.state.history - 1 < this.state.data.length &&
        this.state.history - 1 > 0
      ) {
        this.incrementHistory(-1);
      } else {
        this.setState({
          currText: "",
          history: 0
        });
      }
  }
  handleChange(event) {
    this.setState({
      currText: event.target.value
    });
  }
  consoleLogData() {
    let joined = this.state.data.concat(this.state.currText);
    if (joined !== this.state.data) {
      this.setState({
        data: joined,
        currText: ""
      });
    }
    window.scrollTo(0, document.body.scrollHeight);
  }
  onSubmit(event) {
    event.preventDefault();
    this.consoleLogData();
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
        <ConsoleLog commands={this.state.commands} data={this.state.data} />
        <div className={styles.promptInput}>
          <Prompt />
          <input
            ref={input => {
              this.nameInput = input;
            }}
            className={styles.input}
            value={this.state.currText}
            onChange={this.handleChange}
            onKeyDown={this.onKeyInput}
            onKeyUp={this.clearModifier}
            type="text"
          />
        </div>
      </form>
    );
  }
}

export default Console;
