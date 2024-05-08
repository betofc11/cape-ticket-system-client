import React from "react";
import "./IssueCard.scss";
import { Link } from "react-router-dom";
import { STATUS } from "../../utils/status";

const IssueCard = ({ option, className }) => {
  return (
    <li className="flex">
      <Link to={`issue/${option.id}`} className="flex flex-1">
        <div
          className={`card-container flex flex-1  flex-col ${
            className ? className : ""
          } issue ${option.status}`}
        >
          <div
            className={`flex-1 card ${className ? className : ""} issue ${
              option.status
            }`}
          >
            <p className="flex mb-4">
              <span className="font-extrabold text-xl mr-2">
                {STATUS[option.status].label}
              </span>
              {STATUS[option.status].icon}
            </p>
            <p className="flex flex-col mb-3">
              <span className="font-bold">Issue:</span> {option.issueTitle}
            </p>
            <p className="flex flex-col mb-3">
              <span className="font-bold">Equipment:</span>
              {` ${option.medicalEquipmentName}`}
            </p>
            <p className="flex flex-col mb-3">
              <span className="font-bold">Owner:</span> {option?.owner?.name}
            </p>
            <p className="flex flex-col mb-3">
              <span className="font-bold">Date:</span> {option.reportDate}
            </p>
          </div>
          <div className="state-section">
            <p className="flex">
              <span className="font-extrabold text-xl mr-2 text-white">
                ID: {option.id}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default IssueCard;
