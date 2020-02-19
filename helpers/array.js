/**
 * @param  {[any]} object Can be an array or a single item
 */
const countArray = object => {
  if (!(object instanceof Array)) {
    return 1;
  }

  return object.length;
};

/**
 * @param  {[String]} mentionEmail The list of notification emails from database
 * @param  {[String]} dbEmail The list of registered emails from database
 */
const mergeRecipient = (mentionEmail, dbEmail) => {
  dbEmail = dbEmail.map(
    rowDataPacket => Object.assign({}, rowDataPacket).email
  );

  mentionEmail = mentionEmail.map(
    rowDataPacket => Object.assign({}, rowDataPacket).email
  );

  return dbEmail.concat(mentionEmail);
};

module.exports = {
  countArray,
  mergeRecipient
};
