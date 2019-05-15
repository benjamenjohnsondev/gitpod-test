import React, { Component } from 'react';
import styles from '../css/Console.module.css';
import ConsoleLog from './ConsoleLog';

class Console extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        'hey', 'world'
      ],
      formData: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.consoleLog = React.createRef();
  }
  handleChange(event) {
    this.setState({formData: event.target.value});
  }
  onSubmit(event) {
    event.preventDefault();
    let joined = this.state.data.concat(this.state.formData)
    this.setState({
      data: joined
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} className={styles.Console}>
        <ConsoleLog data={this.state.data}/>
        <input className={styles.input} value={this.state.currText} onChange={this.handleChange} type="text"/>
      </form>
    );
  }
}

export default Console;