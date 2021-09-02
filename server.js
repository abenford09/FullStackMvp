const express = require('express')
const app = express()
const { Pool } = require('pg')
const cors = require('cors')
const pool = require('./db/dbCON');
// const dot = require('dotenv').config()

const PORT = process.env.PORT || 4040;

// middlewares
app.use(cors({ origin: true }))
app.use(cors())
app.use(express.json())


// const pool = new Pool({
//     user: 'root',
//     password: 'password',
//     host: 'localhost',
//     port: 5433,
//     database: 'comment'
// })


// get one from route
app.get('/api/comments/:id', async(req, res) => {
    try {
        const { id } = req.params
        let {rows} = await pool.query('SELECT * FROM comments WHERE comments_id = $1', [id])
        res.status(200).json(rows);
    } catch (error) {
        // console.log(error)
        res.status(500).json(error)
        console.log('get doesnt works')
    }
})

// get all from route
app.get('/api/comments', async(req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM comments")
        res.status(200).json(rows);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        console.log('get works')
    }
})

// post route post one comment
app.post('/api/comments', async(req, res) => {
    try {
            const { comments } = req.body
            let { rows } = await pool.query('INSERT INTO comments(comments) VALUES ($1) RETURNING *', [comments])
            res.status(200).json(rows)
            console.log('working')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// Delete route
app.delete('/api/comments/:id', async(req, res) => {
    try {
        const { id } = req.params
        console.log(req.params)
        let { rows } = await pool.query('DELETE FROM comments WHERE comments_id = $1 RETURNING *', [id]);
        res.status(200).json(rows)
    } catch (error) {
        console.log('Server Error')
        res.status(500).json(error)
    }
})

app.patch('/api/comments/:id', async(req, res) => {
    try {
        const { comments } = req.body
        const { id } = req.params
        console.log(req.params)
        let { rows } = await pool.query('UPDATE comments Set comments = $1 WHERE comments_id = $2 RETURNING *', [comments,id]);
        res.status(200).json(rows)
    } catch (error) {
        console.log('Server Error')
        res.status(500).json(error)
    }
})

app.listen(PORT, () => {
    console.log(`Listening  on ${PORT}`)
})