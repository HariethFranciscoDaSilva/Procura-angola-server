const path = require('path');
const multer = require('multer');

exports.type = (type) => {
    
    const storage = multer.diskStorage({
        destination: function name(req, file, callback) {
            callback(null, 'public/uploads/' + type)
        },
        filename: function name(req, file, callback) {
            callback(null, Date.now() + file.originalname)
        }
    })

    return multer({
        storage
    });
}

exports.information = (type, key) => {
    
    const storage = multer.diskStorage({
        destination: function name(req, file, callback) {
            callback(null, 'public/uploads/' + type)
        },
        filename: function name(req, file, callback) {

            const name = Date.now() + file.originalname

            callback(null, name)
        }
    })

    return multer({
        storage
    });
}
