const pubsub = require("../helpers/pubsub");

module.exports = async function receiveAction(request, response) {
  const result = await pubsub(request.body, "action");

  console.log(request.body);
  response.send(JSON.stringify(result));
};
