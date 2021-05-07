import React from 'react';

class Reply extends React.Component {
  render() {
    return (
      <>
        {this.props.replyList.map(e => (
          <li>{e.comment}</li>
        ))}
      </>
    );
  }
}

export default Reply;
