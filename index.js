const express = require("express");

const { backcountryMiddleware } = require("./targets/backcountry");
const { yooxMiddleware } = require("./targets/yoox");
const { macysMiddleware } = require("./targets/macys");
const { benettonMiddleware } = require("./targets/benetton");

const app = express();
const PORT = 3000;

app.use("/backcountry", backcountryMiddleware);
app.use("/benetton", benettonMiddleware);
app.use("/yoox", yooxMiddleware);
app.use("/macys", macysMiddleware);

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
