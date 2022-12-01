const Koa = require("koa");
const getAll = require("../repository/getAll");

const application = new Koa();

application.use(async (context) => {
  context.status = 200;
  context.body = await getAll();
});

application.listen(3000);
console.log("listening at port 3000");
