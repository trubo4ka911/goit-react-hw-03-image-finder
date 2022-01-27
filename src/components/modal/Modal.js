import React, { Component } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import {
  ModalBackdrop,
  ModalContainer,
  ModalImg,
  ModalBtn,
} from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalContainer>
        <ModalBackdrop onClick={this.handleBackdropClick}></ModalBackdrop>
        <ModalImg src={this.props.data} alt={"photo"} />
      </ModalContainer>,
      modalRoot
    );
  }
}
