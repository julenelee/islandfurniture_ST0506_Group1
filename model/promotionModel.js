var db = require('./databaseConfig.js');

const getAllPromotions = () => {
    return new Promise((resolve, reject) => {
        var conn = db.getConnection();
        const query = 'SELECT * FROM promotionentity';
        
        conn.query(query, (err, results) => {
            if (err) {
                console.error("Error executing query:", err);
                reject(err); // Reject the promise if an error occurs
            } else {
                resolve(results); // Resolve the promise with query results
            }
        });
    });
};

module.exports = {
    getAllPromotions
};