import React from "react";
import Pill from "../Pill/Pill";

const SpareParts = ({ list = [] }) => {
  return list.length > 0 ? (
    <div className="flex gap-2 overflow-y-hidden rounded-xl overflow-x-auto max-w-screen-lg p-2 border-2 border-dashed border-gray-300">
      {list.map((item, index) => (
        <Pill key={`${item}-${index}`} color="#0c1951">
          {item}
        </Pill>
      ))}
    </div>
  ) : (
    <p className="text-gray-300">No spare parts added...</p>
  );
};

export default SpareParts;
