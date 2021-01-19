
//Tal vez se puede tirar error si position < 0 (TODO)
const findLastCharacter = (element, character) =>{
    console.log("FIND LAST CHARACTER -----------------")
    console.log("element: ", element);
    console.log("character: ", character);
    let x = character.length;
    console.log(x)
    console.log(element.search(character)); // encuentra la primer posicion de la cadena buscada
    let position = element.search(character)
    if(position >= 0){
        return (position + x);
    }
    return position;
};

//Verificar si con otro tag pasa lo mismo y agregarlo
const normalizeTag = (tag) => {
    if(tag == "["){
        return "\\[";
    }
    return tag;
}


const findPositionCloseTag = (element, openTag, closeTag) =>{
    let auxElem;
    openTag = normalizeTag(openTag);
    const regexOT = new RegExp(openTag,"g");
    const regexCT = new RegExp(closeTag,"g");

    let flag = true;
    console.log(element)
    let lastPosition = element.search(closeTag) + 1;
    while(flag){
        auxElem = element.substr(0,lastPosition)
        let openAmount = auxElem.match(regexOT).length;
        let closeAmount = auxElem.match(regexCT).length;
        console.log(openAmount, "=", closeAmount,"?");
        if(openAmount != closeAmount){
            console.log("1-----")
            console.log(element.substr(0,lastPosition));
            console.log("---------")
            
            //busco el siguiente elemento a matchear
            let rightString = element.substr(lastPosition);
            lastPosition += rightString.search(closeTag) + 1;
            console.log("newLastPosition", lastPosition);
            
        }else{
            flag = false;
        }
    }

    return lastPosition;
}

const getValue = (data) => {
    console.log("-----------------GETVALUE--------------------------")
    let char = data.charAt(0);
    let pos;
    let value;
    console.log(char)

    if(char == '{'){
        pos = findPositionCloseTag(data,'{', '}');
    }else if(char == '['){
        pos = findPositionCloseTag(data,'[', ']');
    }else{
        pos = findLastCharacter(data, ',\n'); // TODO: Corregir esto cuando es el último elemento del objeto 
        if(pos == -1){
            pos = data.length;
        }else{
            pos -= 3;
        }
    }

    value = data.substr(0,pos);
    
    let response = {
        value,
        pos
    }

    return response;
}

//string:  //subString: the word that you are trying to find, 
function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}

module.exports = {
    findLastCharacter,
    getValue,

}