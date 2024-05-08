import React from "react";
import Pill from "../Pill/Pill";
import { STATUS } from "../../utils/status";

const IssueWidget = ({ data }) => {
  
  return (
    <div className="w-full drop-shadow-xl bg-zinc-700 flex flex-col p-16 rounded-lg">
      <div className="grid gap-y-10 gap-x-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div>
          <p className="font-extrabold mb-2">ID: </p>
          <p>{data?.id || "-"}</p>
        </div>
        <div>
          <p className="font-extrabold mb-2">Title: </p>{" "}
          <p>{data?.issueTitle || "-"}</p>
        </div>
        <div>
          <p className="font-extrabold mb-2">Device: </p>{" "}
          <p>{data?.medicalEquipmentName || "-"}</p>
        </div>
        <div>
          <p className="font-extrabold mb-2">Owner: </p>{" "}
          <p>{data?.owner?.name || "-"}</p>
        </div>
        <div>
          <p className="font-extrabold mb-2">Status: </p>{" "}
          <Pill color={STATUS[data?.status]?.color}>{STATUS[data?.status]?.label || "-"}</Pill>
        </div>
        <div>
          <p className="font-extrabold mb-2">Report Date: </p>{" "}
          <p>{data?.reportDate || "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default IssueWidget;
