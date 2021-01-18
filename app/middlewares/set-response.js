const constants = require('../constants/constants');


module.exports.setResponse = async (req, res, next) => {
    let body = req.body;
    let response = {
        data: body.data,
        info: "prueba"
    }
    res.data = response;
    return next();
};
