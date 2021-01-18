
//===============
//    PORT
//===============
process.env.PORT = process.env.PORT || 3000;


//=====================
//    ENVIRONMENT
//=====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



module.exports = {
    
    timeouts: {
        timer_default: process.env.TIMEOUT_TIMER_DEFAULT || 3000,
        timer_query: process.env.TIMEOUT_TIMER_QUERY || 150000,
        timer_post_mongo: process.env.TIMER_POST_MONGO || 5000,

    },
};
  