const stringHelper = require("../helpers/string");
/**
 * @param  {[String]} studentEmails List of students email to be registered
 * @param  {String} teacherEmail Email of the teacher who is registering the students
 */
const valuesForRegister = (studentEmails, teacherEmail) => {
  teacherEmail = stringHelper.valueSanitizer(teacherEmail);
  if (!(studentEmails instanceof Array)) {
    return `('${teacherEmail}', '${stringHelper.valueSanitizer(studentEmails)}')`;
  }
  const valuePair = studentEmails.map(studentEmail => {
    return `('${teacherEmail}', '${stringHelper.valueSanitizer(studentEmail)}')`;
  });
  return valuePair.join(", ");
};

module.exports = {
  valuesForRegister
};
