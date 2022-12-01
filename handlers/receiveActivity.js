const pubsub = require("../helpers/pubsub");

module.exports = async function receiveActivity(request, response) {
  const activity = request.body;

  const activityTypes = ["create-question", "response-question"];
  if (activityTypes.indexOf(activity.type === -1)) {
    response.send("Invalid or missing field: type");
    return;
  }

  if (!activity.hasOwnProperty("created_at")) {
    response.send("Missing field: created_at");
    return;
  }

  if (!activity.hasOwnProperty("course_name")) {
    response.send("Missing field: course_name");
    return;
  }

  if (!activity.hasOwnProperty("class_name")) {
    response.send("Missing field: class_name");
    return;
  }

  if (!activity.hasOwnProperty("text")) {
    response.send("Missing field: text");
    return;
  }

  if (activity.text.length > 255) {
    response.send("text too large");
    return;
  }

  const result = await pubsub(activity, "activities");

  console.log(activity);
  response.send(JSON.stringify(result));
};
