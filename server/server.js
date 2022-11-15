const app = require("./app");
const sequelize = require("./db");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Error.");
  });

sequelize
  .sync({ force: false })
  .then((res) => {
    app.listen(5000, () => {
      console.log(`server is listening on port ${5000}........... `);
    });
  })
  .catch((err) => {
    console.log(err);
  });
