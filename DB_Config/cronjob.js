const cron = require('node-cron');

const db=require('../model/index').sequelize;

const Otp=require('../model').otp;

// Task to delete expired OTPs every minute
cron.schedule('* * * * *', async () => {
    try {
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
        
        await Otp.destroy({
            where: {
                createdAt: { [db.Sequelize.Op.lt]: fiveMinutesAgo } // Sequelize's less-than operator
            }
        });
        
        console.log('Old OTPs deleted successfully!');
    } catch (error) {
        console.error('Error deleting OTPs:', error);
    }
});

module.exports = cron;

