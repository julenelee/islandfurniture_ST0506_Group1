const db = require('./databaseConfig'); // Adjust path if necessary

db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
        console.error('Database test failed:', err);
    } else {
        console.log('Database test successful:', results[0].solution);
    }
});