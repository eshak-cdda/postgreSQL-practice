const Pool = require("pg").Pool;
require("dotenv").config();
const pool = new Pool({
  user: process.env.BD_USERS,
  host: process.env.DB_HOST,
  database: "postgres",
  password: process.env.DB_PASSWORD,
  port: 5432,
});
module.exports = pool;
