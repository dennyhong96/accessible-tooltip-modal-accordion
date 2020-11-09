import { useState, useEffect } from "react";

const Accordian = ({ children }) => {
  // const [openIdx, setOpenIdx] = useState(0);

  return <div className="max-w-2xl">{children}</div>;
};
// Item wrapper
Accordian.Item = ({ children }) => children;

// Collapsed summary
Accordian.Collapsed = ({ children }) => {
  return <div className="px-5 py-3 text-blue-400 bg-gray-100">{children}</div>;
};

// Expanded deetail
Accordian.Expended = ({ children }) => {
  return <div className="px-5 py-3">{children}</div>;
};

export default Accordian;
