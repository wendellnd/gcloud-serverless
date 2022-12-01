const Koa = require("koa");
const converter = require("basic-auth");

const getAll = require("../repository/getAll");

const application = new Koa();

application.use(async (context) => {
  const { name, pass } = converter.parse(context.request.headers.authorization);

  if (process.env.USER !== name || process.env.PASS !== pass) {
    context.status = 403;
    context.body = {
      message: "Access Denied",
    };
    return;
  }

  context.status = 200;
  context.body = await getAll();
});

application.listen(3000);
console.log("listening at port 3000");
