import React from 'react';

class IconButton extends React.Component {
  render() {
    return (
      <button type="button" className={this.props.className}>
        <img
          alt={this.props.info.name}
          src={`/images/Yeseul/${this.props.info.fileName}`}
        />
        {this.props.children}
      </button>
    );
  }
}

export default IconButton;
