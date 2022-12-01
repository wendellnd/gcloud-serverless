const BigQuery = require("@google-cloud/bigquery").BigQuery;
const bqInstance = new BigQuery();

module.exports = async function search() {
  const options = {
    query:
      "SELECT created_at, type, course_name, class_name, text, main_activity_id FROM activities",
  };

  const table = bqInstance.dataset("forumAlura").table("activities");
  const [work] = await table.createQueryJob(options);

  const [results] = await work.getQueryResults();

  return results;
};
