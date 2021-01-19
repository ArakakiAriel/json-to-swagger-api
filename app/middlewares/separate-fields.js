const constants = require('../constants/constants');
const messages = require('../constants/messages');
const utils = require('../utils/utils');
const setResponseWithError = require('../utils/common-response').setResponseWithError;

module.exports.separateFields = async (req, res, next) => {
    let data = res.object;
    let fieldNameArray = [];
    let fieldValueArray = [];

    //agarro el nombre del campo
    const regex = /\".*?\"\:/; //Devuelve todos los elementos que esten entre \"%%%%\":

    let firstPosition = data.search(regex);
    let lastPosition = utils.findLastCharacter(data, '\": ');

    while(firstPosition !== -1){
        let fieldName = data.substr(firstPosition + 1, lastPosition - 4 - firstPosition);
        fieldNameArray.push(fieldName);
    
        //slice la data para hacer la cadena más pequeña
        data = data.substr(lastPosition);
    
        //verificar si es objeto, array u otra cosa;
        let field = utils.getValue(data);
        fieldValueArray.push(field.value);
        
        data = data.substr(field.pos);
            
        firstPosition = data.search(regex);
        lastPosition = utils.findLastCharacter(data, '\": ');

            
        console.log(fieldNameArray);
        console.log(fieldValueArray);
    }
    




    //console.log(data)

    console.log(fieldNameArray);
    console.log(fieldValueArray);

    res.fieldNameArray = fieldNameArray;
    res.fieldValueArray = fieldValueArray;
    
    return next();
};
