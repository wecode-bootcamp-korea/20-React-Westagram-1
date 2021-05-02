import React, { Component } from 'react';

class IconButton extends Component {
  render() {
    const { className, info, children } = this.props;

    return (
      <button type="button" className={className}>
        <img alt={info.name} src={`/images/Yeseul/${info.fileName}`} />
        {children}
      </button>
    );
  }
}

export default IconButton;
