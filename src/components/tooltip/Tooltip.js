import { useState, useEffect, useRef, Fragment, cloneElement } from "react";
import { createPortal } from "react-dom";

const Tooltip = ({ label, children }) => {
  const [show, setShow] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({});
  const parentRef = useRef(null);

  useEffect(() => {
    function repositionTooltip() {
      // getBoundingClientRect() method returns a DOMRect object providing information
      // about the size of an element and its position relative to the viewport
      const domRect = parentRef.current.getBoundingClientRect();
      setTooltipPosition({
        left: domRect.left,
        top: domRect.top + domRect.height + 4,
      });
    }

    // Set initial position on load
    repositionTooltip();

    // Reposition tooltip on window resize
    window.addEventListener("resize", repositionTooltip);

    // Clean up
    return () => {
      window.removeEventListener("resize", repositionTooltip);
    };
  }, []);

  return (
    <Fragment>
      {/* Tooltip */}
      {show &&
        createPortal(
          <div
            tabIndex={0}
            className="absolute px-5 py-3 bg-gray-700 text-gray-200 text-sm rounded left-0 top-0"
            style={{
              left: tooltipPosition.left, // Calculated from parent position
              top: tooltipPosition.top, // Calculated from parent position
            }}
          >
            {label}
          </div>,
          document.querySelector("#tooltip-portal")
        )}

      {/* Content */}
      {cloneElement(children, {
        ref: parentRef, // Attach ref of DOM node
        onMouseOver: () => setShow(true),
        onMouseOut: () => setShow(false),
        onFocus: () => undefined, // For accessbility
        onBlur: () => undefined, // For accessbility
      })}
    </Fragment>
  );
};

export default Tooltip;
