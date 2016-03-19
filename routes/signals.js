var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.json({test: "hello", request: req.body});
  console.log("Received", req.body);
});

router.get('/', function(req, res, next) {
  res.json({result: "ok", method: "get"});
});

module.exports = router;
