import { Fragment } from "react";

import Accordian from "../components/accordian/Accordian";

const ACCORDIAN_DATA = [
  {
    summary: "Item 1",
    detail: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos reiciendis
    rerum veniam accusantium repudiandae? Quos minima a amet assumenda
    laborum?`,
  },
  {
    summary: "Item 2",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut sit
    reprehenderit ab praesentium voluptas sunt nulla optio nisi.`,
  },
  {
    summary: "Item 3",
    detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio omnis
    quos molestias aspernatur numquam expedita unde quod amet!`,
  },
  {
    summary: "Item 4",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo
    esse officia doloremque magni beatae iure, quisquam cum qui ut sed?`,
  },
];

const _Accordian = () => {
  return (
    <Fragment>
      <h1 className="text-3xl font-bold text-center mb-4">
        This is an accordian
      </h1>

      {/* Accordian */}
      <Accordian>
        {ACCORDIAN_DATA.map(({ summary, detail }, idx) => (
          <Accordian.Item key={`${idx}-${summary}`}>
            {/* Collapsed */}
            <Accordian.Collapsed>{summary}</Accordian.Collapsed>

            {/* Expanded */}
            <Accordian.Expended>{detail}</Accordian.Expended>
          </Accordian.Item>
        ))}
      </Accordian>
    </Fragment>
  );
};

export default _Accordian;
