import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');
const OptionModal = ({ selectedOption, handleClearSelectedOption }) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleClearSelectedOption}
    contentLabel='Selected Option'
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title'>Selected Option</h3>
    {selectedOption && <p className='modal__body'>{selectedOption}</p>}
    <button class='button' onClick={handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);
export default OptionModal;
