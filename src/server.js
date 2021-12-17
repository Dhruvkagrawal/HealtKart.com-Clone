const connect = require("./configs/db");
const app = require(".");

const PORT = 3000;




const start = (PORT) => {
  app.listen(PORT, async () => {
    await connect();
    console.log(`Current Server is Running On PORT ${PORT}`);
  });
};

start(PORT);
