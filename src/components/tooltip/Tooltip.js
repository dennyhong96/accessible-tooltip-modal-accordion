import { useState, useEffect, useRef, Fragment, cloneElement } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const tooltipVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

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
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {show && (
              <motion.div
                variants={tooltipVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                tabIndex={0}
                className="absolute px-5 py-3 bg-gray-700 text-gray-200 text-sm rounded left-0 top-0 z-50 shadow-md"
                style={{
                  left: tooltipPosition.left, // Calculated from parent position
                  top: tooltipPosition.top, // Calculated from parent position
                }}
              >
                {label}
                <div className="w-3 h-3 transform rotate-45 bg-gray-700 absolute left-4 top-0 -mt-1" />
              </motion.div>
            )}
          </AnimatePresence>,
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
