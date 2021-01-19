const constants = require('../constants/constants');
const messages = require('../constants/messages');
const setResponseWithError = require('../utils/common-response').setResponseWithError;

module.exports.verifyObjectFormat = async (req, res, next) => {
    let data = req.body.data;

    if(data){
        data = data.trim();
        if(!(data.charAt(0) == ('{') && data.charAt(data.length - 1) ==('}'))){
            return setResponseWithError(res, constants.BAD_REQUEST_ERROR, messages.DATA_IS_NOT_OBJECT);
        }
    }else{
        return setResponseWithError(res, constants.BAD_REQUEST_ERROR, messages.DATA_NOT_FOUND);
    }
    
            
    data = data.slice(1, data.length - 1);
    const regexTab = new RegExp("\t","g");
    data = data.replace(regexTab, "");
    //data = data.replace(/\n/g,""); //Hacer esto una vez separado los campos
    data = data.trim();
    console.log(data)
    res.object = data;
    return next();
};
