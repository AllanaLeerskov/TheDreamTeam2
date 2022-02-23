const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers');
const path = require('path');
const sequelize = require('./config/connection');
const db = require('./models/index');
const router = require('./controllers/api/user-routes');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));



const PORT = 3000;



//handlebar setting
app.set("view engine", "handlebars");

app.engine('handlebars', hbs.engine);

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  });
