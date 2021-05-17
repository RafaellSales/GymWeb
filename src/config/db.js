const { Pool} = require("pg")

module.exports= new Pool({
    user: 'postgres',
    password:"123qwe",
    host: "localhost",
    port: 5432,
    database: "gymmanager"

})