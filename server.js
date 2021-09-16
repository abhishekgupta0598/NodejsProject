const express = require("express");
const bodyParser = require("body-parser");
const employeeRouter = require("./routes");
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/employees", employeeRouter);

app.listen(port, () => console.log("Listening port number" + port));
