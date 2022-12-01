const PubSub = require("@google-cloud/pubsub");

const psInstance = new PubSub();

module.exports = function pubsub(data, topic) {
  if (typeof data !== "string") {
    data = JSON.stringify(data);
  }

  data = Buffer.from(data);

  return psInstance.topic(topic).publish(data);
};
