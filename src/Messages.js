import React, { Component } from 'react'

export class Messages extends Component {
    render() {
        const {messages} = this.props;
        return (
          <ul className="Messages-list">
            {messages.map(m => this.renderMessage(m))}
          </ul>
        );
      }
}

export default Messages
