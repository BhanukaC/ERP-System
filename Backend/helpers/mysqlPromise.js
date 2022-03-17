const util = require('util');
const db = require("./db");

const query = util.promisify(db.query).bind(db);

module.exports = query;