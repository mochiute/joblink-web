import { ModalContainer, Overlay } from "./styles";

function Modal({ title, children, handleClose }) {
  return (
    <Overlay>
      <ModalContainer>
        <span onClick={handleClose}>&times;</span>
        {children}
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
