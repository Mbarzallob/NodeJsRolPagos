const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database:"RolDePagos",
    password:"jcrs16012023",
    port:"5432"
})

module.exports = pool;