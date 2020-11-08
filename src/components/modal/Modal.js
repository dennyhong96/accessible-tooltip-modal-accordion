import { createPortal } from "react-dom";

// Compound Component: <Modal/> <Modal.Header/> <Modal.Body/> ...

// Modal
const Modal = ({ children, toggle, setToggle, className, ...restProps }) => {
  return typeof window !== "undefined" && toggle
    ? createPortal(
        <div
          {...restProps}
          className={`flex flex-col p-4 rounded-xl bg-blue-100 ${className}`}
        >
          {/* Close button */}
          <button
            onClick={setToggle.bind(this, false)}
            className="self-end flex px-2 text-red-300 rounded-full border border-red-300 mb-4"
          >
            &times;
          </button>

          {/* Content */}
          {children}
        </div>,
        document.querySelector("#modal-portal")
      )
    : null;
};

// Modal header
Modal.Header = ({ children, ...restProps }) => {
  return <header {...restProps}>{children}</header>;
};

// Modal body
Modal.Body = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

export default Modal;
