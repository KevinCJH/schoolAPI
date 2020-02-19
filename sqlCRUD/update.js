const query = require("../helpers/query");

/**
 * @param  {} conn MySQL Connection reference
 * @param  {String} table Table to update the values
 * @param  {[String]} setVal Value of Set for the Update
 * @param  {[String]} whereVal Value of Where for the Update
 */
module.exports = async (conn, table, setVal, whereVal) => {
  const result = await query(
    conn,
    `UPDATE IGNORE ${table} SET ${setVal} WHERE ${whereVal};`
  );
  return result;
};
