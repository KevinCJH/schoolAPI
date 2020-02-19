const query = require("../helpers/query");

/**
 * @param  {} conn MySQL Connection reference
 * @param  {String} table Table to select the values
 * @param  {[String]} selectVal The columns to be retrieved from SQL
 * @param  {[String]} whereVal Value of Where for the select
 */
module.exports = async (conn, table, selectVal, whereVal) => {
  const result = await query(
    conn,
    `SELECT DISTINCT ${selectVal} FROM ${table} WHERE ${whereVal};`
  );
  return result;
};
