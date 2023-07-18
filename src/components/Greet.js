import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Greet extends Component {
  render() {
    return (
      <div>
          <h1>hello {this.props.msg} {this.props.name}</h1>
          {this.props.children}
      </div>
    )
  }
}
Greet.propTypes = {
name: PropTypes.string.isRequired,
msg: PropTypes.string,
children:PropTypes.element,
};
Greet.defaultProps = {
    msg:"this is default msg"
}