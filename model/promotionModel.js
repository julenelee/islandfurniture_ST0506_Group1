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

const getPromotionById = (id) => {
    return new Promise((resolve, reject) => {
        var conn = db.getConnection();
        const query = 'SELECT i.ID AS ItemID, i.NAME AS ItemName, i.DESCRIPTION AS ItemDescription, i.CATEGORY AS ItemCategory, i.TYPE AS ItemType, i.HEIGHT AS ItemHeight, i.WIDTH AS ItemWidth, i._LENGTH AS ItemLength, i.VOLUME AS ItemVolume, ic.RETAILPRICE AS RetailPrice, ' +
                        'p.DESCRIPTION AS PromotionDescription, p.DISCOUNTRATE AS DiscountRate, p.STARTDATE AS PromotionStartDate, p.ENDDATE AS PromotionEndDate, p.IMAGEURL AS PromotionImageURL, i.SKU AS sku FROM itementity i' +
                        ' JOIN item_countryentity ic ON i.ID = ic.ITEM_ID JOIN promotionentity p ON i.ID = p.ITEM_ID AND ic.COUNTRY_ID = p.COUNTRY_ID WHERE p.ID = ?';

        conn.query(query, [id], (err, results) => {
            if (err) reject(err);
            else resolve(results[0]);
        });
    });
};


module.exports = {
    getAllPromotions,
    getPromotionById
};