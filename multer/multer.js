// const multer = require('multer')

// module.exports = multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.match(/jpe|jpeg|png|gif$i/)) {
//       cb(new Error('File is not supported'), false)
//       return
//     }

//     cb(null, true)
//   }
// })

//--------------------------------------------//

var multer = require('multer');

var customConfig = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, './public' )
    },
    filename: function (req, file, next) {
        next(null, Math.random() + '-' + file.originalname)
    }
})

var upload = multer({ storage: customConfig })

module.exports = upload