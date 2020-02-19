/**
 * @param  {String} content The string used for extraction
 */
const extractMention = content => {
  return content.match(/@([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
};

/**
 * @param  {String} content String to be sanitized for SQL query
 */
const valueSanitizer = content => {
  return content.replace(/[`()?<>']/gi, "");
};

module.exports = {
  valueSanitizer,
  extractMention,
};
