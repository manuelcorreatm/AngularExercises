var express = require('express');
var router = express.Router();

router.get('*', function (req, res) {
    res.render('index');
    //res.sendFile('/public/index.html');
});

module.exports = router;
