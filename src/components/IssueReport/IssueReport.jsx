import React from "react";
import SpareParts from "../SpareParts/SpareParts";

const IssueReport = ({ data }) => {
  return (
    data && (
      <div className="w-full drop-shadow-xl bg-zinc-800/90 flex flex-col p-16 rounded-lg mt-10">
        <h3 className="font-extrabold text-3xl mb-8">Report:</h3>
        <div className="grid gap-y-10 gap-x-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div>
            <p className="font-extrabold mb-2">Assigned Technician: </p>
            <p>{data?.technician?.name || "-"}</p>
          </div>
          <div>
            <p className="font-extrabold mb-2">Spare Parts: </p>{" "}
            <SpareParts list={data?.spareParts || []} />
          </div>
        </div>
        <div>
          <p className="font-extrabold mb-2">Details: </p>{" "}
          <p className="break-all">{data?.details || "-"}</p>
        </div>
      </div>
    )
  );
};

export default IssueReport;
