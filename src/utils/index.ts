import dayjs from "dayjs";

export const BASE_URL = "http://127.0.0.1:8000/storage/";

export const rupiahFormat = (value: number) => {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
};

export const generateUniqueCode = () => {
  return Math.floor(100 + Math.random() * 900); //random 3 digit
};

export const dateFormat = (
  date: Date | string,
  format = "DD MMM YYYY HH:mm"
) => {
  if (!date) return "";

  const dateformat = dayjs(date).format(format);

  return dateformat;
};
