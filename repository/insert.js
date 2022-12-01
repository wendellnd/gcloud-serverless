const BigQuery = require("@google-cloud/bigquery").BigQuery;
const bqInstance = new BigQuery();

module.exports = async function insert(lines) {
  const dataset = bqInstance.dataset("forumAlura");
  const table = dataset.table("activities");

  return table.insert(lines);
};
