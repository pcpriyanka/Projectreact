import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

export default class Product2 extends Component {
  render() {
    let { cid, name, price } = this.props.product;
    let x = this.props.isSold;
    return (
      <div className="product">
        cid : {cid} <br />
        Name: {name} <br />
        price: {price}
        <br />
        isSold: {x.toString()}
        <br />
        <button class="btn btn-primary" onClick={() => this.openModal}>
          view details
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <h2>I am a Modal</h2>
          <div>I am a modal</div>
          cid : {cid} <br />
          Name: {name} <br />
          price: {price}
          <br />
          isSold: {x.toString()}
          <br />
        </Modal>
      </div>
    );
  }
}

Product2.propTypes = {
  isSold: PropTypes.bool,
  product: PropTypes.object,
};
