const express = require("express");

const { backcountryMiddleware } = require("./targets/backcountry");

const app = express();
const PORT = 3000;

app.use("/backcountry", backcountryMiddleware);

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
