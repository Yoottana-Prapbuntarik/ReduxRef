var express = require('express');
var router = express.Router();

/* GET users listing.  */
router.post('/', function(req, res, next) {
  res.json({
      fname : "yoottana",
      lname : "prapbuntarik",
      age : [5,6,7,8,9],
      baby : ["name1","name2","name3","name4","name5"],
      car : [
            {
              register : 'กก555',type : 'รถเก๋ง'
            },
            
            {
              register : 'นม6',type : 'กะบะ' , seat : 4,
              accessory :['ลำโพง','แอร์','พวงมาลัย']    
            }
          
      ]
  });
});

module.exports = router;
