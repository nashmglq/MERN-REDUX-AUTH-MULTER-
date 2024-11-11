const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req,file,cb) =>{
    cb(null, 'uploads/') // so after upload do this, cb or callback do that thing
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-", file.originalname) 
})



// its like saying use this rule
const upload = multer({storage})

module.exports = upload