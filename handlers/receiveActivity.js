const pubsub = require("../helpers/pubsub");

module.exports = async function receiveActivity(request, response) {
  const result = await pubsub(request.body, "activities");

  console.log(request.body);
  response.send(JSON.stringify(result));
};
