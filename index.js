const { isArray, isObject } = require('./utils')

/*
 * Rename object's keys from specified map.
 *
 * @param {object} obj - source object
 * @param {object} map - map of keys
 * @returns {object} - remapped object
 */
const recursiveRemap = (obj, map) => {
  const keys = Object.keys(map)

  for (const key of keys) {
    if (!obj[key]) {
      return obj
    }

    if (isArray(map[key])) {
      map[key].forEach((value) => recursiveRemap(obj[key], value))
    } else if (isObject(map[key])) {
      recursiveRemap(obj[key], map[key])
    } else if (obj[key]) {
      obj[map[key]] = obj[key]
      delete obj[key]
    }
  }

  return obj
}

module.exports = recursiveRemap
