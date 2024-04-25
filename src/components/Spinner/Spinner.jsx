import React from "react";
import './Spinner.scss';

const Spinner = ({ width, height }) => {
  return (
    <div className="spinner-container">
      <div
        className="spinner"
        style={{
          width: width ? width : '60px',
          height: height ? height : '60px',
        }}
      />
    </div>
  );
};

export default Spinner;
