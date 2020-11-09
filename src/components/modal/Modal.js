import { createPortal } from "react-dom";
import { Fragment, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Compound Component: <Modal/> <Modal.Header/> <Modal.Body/> ...

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: "calc(-50% - 50px)", x: "-50%" },
  visible: {
    opacity: 1,
    y: "-50%",
    x: "-50%",
    transition: { duration: 0.15 },
  },
  exit: {
    opacity: 0,
    y: "calc(-50% - 50px)",
    x: "-50%",
    transition: { duration: 0.15 },
  },
};

// Modal
const Modal = ({ children, toggle, setToggle, className, ...restProps }) => {
  const modalRef = useRef();

  useEffect(() => {
    console.log(modalRef.current);
    // Auto focus on modal close button
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, [modalRef.current]);

  return (
    typeof window !== "undefined" &&
    createPortal(
      <AnimatePresence>
        {toggle && (
          <Fragment>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={setToggle.bind(this, false)}
              className="fixed left-0 top-0 bottom-0 right-0 bg-backdrop"
            />

            {/* Modal */}
            <ModalContent className={className} setToggle={setToggle}>
              {children}
            </ModalContent>
          </Fragment>
        )}
      </AnimatePresence>,
      document.querySelector("#modal-portal")
    )
  );
};

// Break up ModalContent from nested JSX to properly use React.useRef
const ModalContent = ({ children, className, setToggle, ...restProps }) => {
  const modalRef = useRef();

  // Focus on modal upon open
  useEffect(() => {
    modalRef.current.focus();
  }, []);

  return (
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      ref={modalRef}
      tabIndex={0}
      {...restProps}
      className={`fixed top-1/2 left-1/2 flex flex-col rounded-xl bg-blue-100 w-10/12 max-w-md ${className}`}
    >
      {/* Close button */}
      <button
        onClick={setToggle.bind(this, false)}
        className="self-end flex px-2 text-red-300 rounded-full border border-red-300 mr-4 mt-4 hover:border-red-500 hover:text-red-500"
      >
        &times;
      </button>

      {/* Content */}
      {children}
    </motion.div>
  );
};

// Modal header
Modal.Header = ({ children, className, ...restProps }) => {
  return (
    <header
      className={`text-lg font-bold p-4 border-b border-gray-300 ${className}`}
      {...restProps}
    >
      {children}
    </header>
  );
};

// Modal body
Modal.Body = ({ children, className, ...restProps }) => {
  return (
    <div className={`p-4 ${className}`} {...restProps}>
      {children}
    </div>
  );
};

export default Modal;
