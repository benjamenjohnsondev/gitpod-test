import React, { Component } from 'react';
import styles from '../../css/Console.module.css';
import ConsoleLog from './ConsoleLog';

class Console extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        'hey', 'world'
      ],
      currText: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.consoleLog = React.createRef();
  }
  componentDidMount(){
    this.nameInput.focus();
  }
  handleChange(event) {
    this.setState({
      currText: event.target.value}
    );
  }
  onSubmit(event) {
    event.preventDefault();
    let joined = this.state.data.concat(this.state.currText)
    if (joined !== this.state.data) {
      this.setState({
        data: joined,
        currText: ""
      })
    }
    window.scrollTo(0,document.body.scrollHeight);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} onClick={()=>{this.nameInput.focus()}} className={styles.Console}>
        <ConsoleLog data={this.state.data}/>
        <input ref={(input) => { this.nameInput = input; }} className={styles.input} value={this.state.currText} onChange={this.handleChange} type="text"/>
      </form>
    );
  }
}

export default Console;
