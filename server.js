const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server. Force is set to false to not overwrite, decide as group if we want to change overwrite
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
