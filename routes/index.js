let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('route socket');
    res.render('index', {title: 'Chat'});
    // let err = new Error('Forbidden');
    // err.status = 403;
    // next(err);
});

module.exports = router;
