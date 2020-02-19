const query = require("../helpers/query");

/**
 * @param  {} conn MySQL Connection reference
 * @param  {String} table Table to select the values
 * @param  {String} table2 Table to be joined
 * @param  {[String]} selectVal The columns to be retrieved from SQL
 * @param  {[String]} whereVal Value of Where for the select
 * @param  {[String]} joinVal Value for the join condition
 */
module.exports = async (conn, table, table2, selectVal, joinVal, whereVal) => {
  const result = await query(
    conn,
    `SELECT DISTINCT ${selectVal} FROM ${table}
      JOIN ${table2} ON ${joinVal} WHERE ${whereVal};`
  );
  return result;
};
