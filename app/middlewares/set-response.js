module.exports.setResponse = async (req, res, next) => {
    let body = req.body;

    console.log(typeof body.data);
    let response = {
        data: res.object,
        fieldNames: res.fieldNameArray,
        fieldValues: res.fieldValueArray
    }
    res.data = response;
    return next();
};
