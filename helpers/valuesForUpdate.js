const stringHelper = require("../helpers/string");
/**
 * @param  {String} studentEmail Email of student who will be suspended
 */
const valuesForSuspend = studentEmail => {
  return `email = '${stringHelper.valueSanitizer(studentEmail)}'`;
};

module.exports = {
  valuesForSuspend
};
