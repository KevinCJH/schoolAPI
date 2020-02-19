const query = require("../helpers/query");

/**
 * @param  {} conn MySQL Connection reference
 * @param  {String} table Table to select the values
 * @param  {[String]} selectVal The columns to be retrieved from SQL
 * @param  {[String]} whereVal Value of Where for the select
 * @param  {[String]} inVal Value of In for the where
 * @param  {int} count Value for Having Count 
 */
module.exports = async (conn, table, selectVal, whereVal, inVal, count) => {
  const result = await query(
    conn,
    `SELECT ${selectVal} FROM ${table} WHERE ${whereVal} IN (${inVal})
       GROUP BY ${selectVal} HAVING COUNT(DISTINCT ${whereVal}) = ${count};`
  );
  return result;
};
