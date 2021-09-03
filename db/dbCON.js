const { Pool } = require('pg')

let pool
if (!process.env.NODE_ENV) {
    pool = new Pool({
        user: 'root',
        host: 'localhost',
        port: 5433,
        password: 'password',
        database: 'comment'
    })
} else {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        host: 'https://evening-oasis-51166.herokuapp.com/',
        ssl: {
            rejectUnauthorized: false
        }
    })
}

module.exports = pool;