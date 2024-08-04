export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};

export const calcMinutesLeft = (date: string) => {
  const d1 = new Date().getTime();
  const d2 = new Date(date).getTime();
  return Math.round((d2 - d1) / 60000);
};
