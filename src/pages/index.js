import { Fragment, useState } from "react";

import Modal from "../components/modal/Modal";

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <Fragment>
      {/* Toggle Button */}
      <button onClick={() => setToggleModal((prev) => !prev)}>
        Toggle Modal
      </button>

      {/* Modal */}
      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        <Modal.Header>👋 I am a header</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos
          mollitia nam nobis, illum eius magnam qui eveniet asperiores quo, vero
          velit quidem, distinctio deserunt ex modi et. Amet sequi veritatis
          unde mollitia dolorem tempore, hic soluta minus ea cum. Totam ipsa
          perferendis a minima rerum voluptatibus error molestias nulla.
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
