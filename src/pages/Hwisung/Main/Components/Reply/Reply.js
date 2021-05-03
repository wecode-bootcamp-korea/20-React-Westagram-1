import React from 'react';

class Reply extends React.Component {
  render() {
    return (
      <>
        {this.props.ReplyList.map(e => (
          <li>{e.Content}</li>
        ))}
      </>
    );
  }
}

export default Reply;
