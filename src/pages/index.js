import { useState } from "react";

import Modal from "../components/modal/Modal";

export default function Home() {
  const [toggleModal, setToggleModal] = useState(true);

  return (
    <div className="">
      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        <Modal.Header>I am a header</Modal.Header>
        <Modal.Body>I am a body</Modal.Body>
      </Modal>
    </div>
  );
}
