import { Fragment, useState } from "react";
import Link from "next/link";

import Modal from "../components/modal/Modal";
import Tooltip from "../components/tooltip/Tooltip";

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <Fragment>
      {/* Tooltip Toggle Button */}
      <Tooltip label="👋 Hi, I'm a tooltip!">
        <button className="px-5 py-3 rounded-full border border-gray-800 mr-4">
          Hover Me
        </button>
      </Tooltip>

      {/* Modal Toggle Button */}
      <button
        onClick={() => setToggleModal((prev) => !prev)}
        className="px-5 py-3 rounded-full border border-gray-800"
      >
        Toggle Modal
      </button>

      {/* Modal */}
      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        <Modal.Header>👋 Hi, I'm a modal</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos
          mollitia nam nobis, illum eius magnam qui eveniet asperiores quo, vero
          velit quidem, distinctio deserunt ex modi et. Amet sequi veritatis
          unde mollitia dolorem tempore, hic soluta minus ea cum. Totam ipsa
          perferendis a minima rerum voluptatibus error molestias nulla.
        </Modal.Body>
      </Modal>

      {/* Link to Accordian page */}
      <Link href="/accordion">
        <a className="block mt-4 text-blue-300">To Accordian &rarr;</a>
      </Link>
    </Fragment>
  );
}
