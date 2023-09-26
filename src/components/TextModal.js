import Modal from 'react-modal';

const TextModal = ({ isOpen, closeModal, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Text Modal"
    >
      <pre>{content}</pre>
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
};

export default TextModal;
