import { createPortal } from "react-dom";
import { Fragment } from "react";

// Compound Component: <Modal/> <Modal.Header/> <Modal.Body/> ...

// Modal
const Modal = ({ children, toggle, setToggle, className, ...restProps }) => {
  return typeof window !== "undefined" && toggle
    ? createPortal(
        <Fragment>
          <div
            onClick={setToggle.bind(this, false)}
            className="fixed left-0 top-0 bottom-0 right-0 bg-backdrop"
          />
          <div
            {...restProps}
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-xl bg-blue-100 w-10/12 max-w-md ${className}`}
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
          </div>
        </Fragment>,
        document.querySelector("#modal-portal")
      )
    : null;
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
