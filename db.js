const knex = require("knex");
const config = require("./knexfile").development;
const database = knex(config);

//database function here

module.exports ={

}