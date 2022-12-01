const insert = require("../repository/insert");

module.exports = async function insertActivity(event) {
  try {
    const encodedActivity = event.data;
    const json = Buffer.from(encodedActivity, "base64").toString();
    const activity = JSON.parse(json);

    const results = await insert(activity);

    console.log(results);
  } catch (err) {
    console.error(err);
    console.log(err.response);
  }
};
