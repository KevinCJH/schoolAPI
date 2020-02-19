const query = require("../helpers/query");

/**
 * @param  {} conn MySQL Connection reference
 * @param  {String} table Table to insert the values
 * @param  {[String]} columns Array of column names
 * @param  {[String]} insertVal Array of values for those column names, can be multidimentional
 */
module.exports = async (conn, table, columns, insertVal) => {
  const result = await query(
    conn,
    `INSERT IGNORE INTO ${table}(${columns.join(", ")}) VALUES ${insertVal};`
  );
  return result;
};
