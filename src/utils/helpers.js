export const formatPrice = (price) => {
  const newNumber = Intl.NumberFormat("en", {
    currency: "INR",
    style: "currency",
  }).format(price);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
