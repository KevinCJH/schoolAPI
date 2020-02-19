const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./middlewares/api");
const error = require("./helpers/error");

const app = express();
const port = process.env.DB_HOST || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/*+json" }));

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  error.handleError(err, res);
});

app.listen(port, () => console.log(`Server listening at port ${port}`));
