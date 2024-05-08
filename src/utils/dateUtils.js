const STATUS_ORDER = {
  done: 1,
  inProgress: 2,
  open: 3,
};

const sortByDate = (data, order = "descending") => {
  return data.sort((a, b) => {
    if (a.status !== b.status) {
      return STATUS_ORDER[b.status] - STATUS_ORDER[a.status];
    }
    const dateA = new Date(a.reportDate);
    const dateB = new Date(b.reportDate);

    if (order === "descending") return dateB - dateA;
    return dateA - dateB;
  });
};

const formatDate = (date) => date.toISOString().split("T")[0]

export { sortByDate, formatDate };
