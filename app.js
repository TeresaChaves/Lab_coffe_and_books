require("dotenv").config();

require("./db");

const express = require("express");
const hbs = require("hbs");

const app = express();

require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "Lab";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const coffeRoutes = require("./routes/coffe.routes");
app.use("/", coffeRoutes);

require("./error-handling")(app);

module.exports = app;
