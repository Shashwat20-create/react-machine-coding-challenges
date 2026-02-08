import { useRef, useState } from "react";
import useClickOutside from "../hooks/use-click-outside";

const Modal = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();
  const handleClose = () => {
    setShowModal(false);
    onClose();
  };
  useClickOutside(ref, handleClose);
  return (
    <>
      <p
        onMouseDown={(e) => {
          e.stopPropagation();
          setShowModal(!showModal);
        }}
      >
        Modal
      </p>
      {(isOpen || showModal) && (
        <div ref={ref} className="modal-component">
          <h1>Modal</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            repellat quas debitis voluptatum quia nisi nulla et neque maiores ut
            modi, vero veritatis corporis explicabo quasi sit animi nihil
            consequatur quis nemo libero quam excepturi sunt. Aperiam laboriosam
            a id numquam eius sunt esse distinctio ipsum, dolorem sequi magni
            tenetur!
          </p>
          <button onMouseDown={handleClose}>Close</button>
        </div>
      )}
    </>
  );
};
export default Modal;
