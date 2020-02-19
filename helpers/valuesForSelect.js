const stringHelper = require("../helpers/string");
const arrayHelper = require("../helpers/array");
/**
 * @param  {[String]} teacherEmails List of teachers email
 */
const valuesForCommonStud = teacherEmails => {
  if (!(teacherEmails instanceof Array)) {
    return `'${stringHelper.valueSanitizer(teacherEmails)}'`;
  }
  const value = teacherEmails.map(teacherEmail => {
    return `'${stringHelper.valueSanitizer(teacherEmail)}'`;
  });
  return value.join(", ");
};

/**
 * @param  {[String]} teacherEmails Email of teacher sending the notification
 */
const valuesForNotification = teacherEmail => {
  return `teacherEmail = '${stringHelper.valueSanitizer(teacherEmail)}'`;
};

/**
 * @param  {[String]} studentEmails List of students email mentioned
 */
const valuesForMention = studentEmails => {

  if (arrayHelper.countArray(studentEmails) < 2) {
    return `email = '${studentEmails.substring(1)}' AND isSuspended = 0`
  }

  studentEmails = studentEmails.map(email => {
    return `email = '${email.substring(1)}'`;
  });

  return `(${studentEmails.join(" OR ")}) AND isSuspended = 0`
};

module.exports = {
  valuesForCommonStud,
  valuesForNotification,
  valuesForMention
};
