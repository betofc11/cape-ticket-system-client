import React from "react";

export const STATUS = {
  done: {
    label: "Finished",
    color: '#084921b1',
    icon: (
      <span className="material-symbols-outlined state-icon">check_circle</span>
    ),
  },
  inProgress: {
    label: "Active",
    color: '#001e32',
    icon: (
      <span className="material-symbols-outlined state-icon rotate-icon">
        app_badging
      </span>
    ),
  },
  open: {
    label: "Pending",
    color: '#3a4908b1',
    icon: (
      <span className="material-symbols-outlined state-icon">
        pending_actions
      </span>
    ),
  },
};