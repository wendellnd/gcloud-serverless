const Koa = require("koa");

const application = new Koa();

application.use((context) => {
  context.status = 200;
  context.body = {
    message: "API is working!",
  };
});

application.listen(3000);
console.log("listening at port 3000");
