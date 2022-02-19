const sequelize = require('../config/connection');
const { User, Product } = require('../models');

const userdata = [
  {
    id: 2,
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    
  },
  {
    id: 1,
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123',
    
  },
  {
  id: 3,
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123',   
  },
  {
  id: 4,
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123',
  },
  {
    id: 5,
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123',
  },
  {
    id: 6,
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123',
  },
  {
    id: 7,
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123',
  },
  {
    id: 8,
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123',
  },
  {
    id: 9,
    username: 'msaasdfins8',
    email: 'lmonasdfin8@google.ru',
    password: 'password1fsdaf23',
  },
  {
    id: 11,
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123',
  },
  {
    id: 10,
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123',
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;