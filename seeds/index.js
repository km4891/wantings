const seedItems = require('./item-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    
    await seedItems();
    console.log('--------------');
  
    process.exit(0);
};
 
seedAll();