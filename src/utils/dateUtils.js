import { format, parseISO } from "date-fns";

export const getFormatBy = (type, date) => {
  if (type === "day") {
    return format(parseISO(date), "dd-MM-yyyy");
  }

  return format(parseISO(date), "HH:mm");
};
