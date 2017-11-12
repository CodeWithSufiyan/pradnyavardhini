
var router = require('express').Router();
var loginController = require('../controllers/loginController');

/* GET login page */
router.get('/', loginController.view_loginPage_get);

/* POST user registration */
router.post('/', loginController.user_registerANDlogin_post);

/* GET view index page*/
router.get('/index', loginController.view_indexPage_get);

/* GET log-out */
router.get('/logout', loginController.logout_get);

module.exports = router;