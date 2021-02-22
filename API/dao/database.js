var mysql = require('mysql')
var pool = mysql.createPool({
    connectionLimit: global.gConfig.connectionLimit,
    host: global.gConfig.dbHost,
    user: global.gConfig.dbUser,
    password: global.gConfig.dbPassword,
    database: global.gConfig.dbName,
    port: global.gConfig.dbPort
})
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})
module.exports = pool