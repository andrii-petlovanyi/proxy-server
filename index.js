const express = require("express");

const { backcountryMiddleware } = require("./targets/backcountry");
const { yooxMiddleware } = require("./targets/yoox");

const app = express();
const PORT = 3000;

app.use("/backcountry", backcountryMiddleware);
app.use("/yoox", yooxMiddleware);

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
