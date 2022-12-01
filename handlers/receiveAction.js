module.exports = function receiveAction(request, response) {
  console.log(request.body);
  response.send(JSON.stringify(request.body));
};
