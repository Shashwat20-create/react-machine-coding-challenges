import { useState } from "react";
import Modal from "./components/Modal";
import "./styles.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
