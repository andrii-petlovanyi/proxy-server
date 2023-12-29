const express = require("express");

const { backcountryMiddleware } = require("./targets/backcountry");

const app = express();
const PORT = 3000;

const customMiddleware = (req, res, next) => {
  console.log(console.log(req.url));
  next();
};

app.use("/backcountry", customMiddleware, backcountryMiddleware);

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
