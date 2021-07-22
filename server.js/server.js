
const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// GET test route 
app.get('/', (req, res) => {
    res.json({
        message: 'Hello world!'
    });
});

// Connect to database
const db = mysql.createConnection(
    {
        host = 'localhost',
        // Your MYSQL username,
        user: 'root',
        // Your MYSQL password
        password: 'yonaguni',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log('Server running on port $(PORT)');
});


