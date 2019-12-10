import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClose} // this prop takes a function. It handles 'ESC' key and clicking on the background and can be wired to our handleClose prop
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button onClick={props.handleClose} className="button">close</button>
    </Modal>
)

export default OptionModal;