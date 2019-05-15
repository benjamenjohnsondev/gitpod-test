import React, { Component } from 'react';

class ConsoleLog extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  handleRender(item, key){
    return (
      <li key={key}>{item}</li>
    );
  }
  render() {
    const commands = this.props.data.map((item, key) => {
      return this.handleRender(item, key);
    })
    return (
      <div>
        {commands}
      </div>
    );
  }
}

export default ConsoleLog;