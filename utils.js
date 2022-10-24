const isArray = (value) => {
  return Array.isArray(value);
}

const isObject = (value) => {
  return typeof value === "object" && value !== null;
}

module.exports = {
  isArray,
  isObject
}
