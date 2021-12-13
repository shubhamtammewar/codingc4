const multer=require('multer');
const path=require('path');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path+"../../uploads")
    },
    filename: function (req, file, callback) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, uniqueSuffix+'-'+file.fieldname)
    }
  })

  module.exports = storage;