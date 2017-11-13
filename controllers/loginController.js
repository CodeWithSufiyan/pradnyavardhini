var User = require('../models/User');
var Bits = require('../utilities/bits');

/* Show login page */
exports.view_loginPage_get = (req, res) => {
    if (!req.session.user_id) {
        res.render('login.ejs');
    }
    else {
        res.redirect('/index');
    }
}

/* User registration POST */
exports.user_registerANDlogin_post = (req, res) => {

    // validate form body
    if (req.body.password !== req.body.passwordConfirm) {
        res.json({
            err: req.body
        });
    }

    else if (req.body.email && req.body.username && req.body.password && req.body.passwordConfirm) {
        req.body.jUserType = Bits.ENTITY_TYPE.OTHERS;
        req.body.jStatusBits = Bits.STATUS_BITS.ACTIVE;
        User.create(req.body, (err, user)=>{
            if (err || !user) throw user;
            else {
                res.redirect('/index');
            }
        });
    }

    else if (req.body.logemail && req.body.logpassword) {
        User.findOne({ email: req.body.logemail }, (err, user) => {
            if (err || !user) throw user;
            else {
                req.session.user_id = user._id;
                res.redirect('/index');
            }
        })
    }
    else {
        res.json(req.body);
    }
}

exports.view_indexPage_get = (req, res) => {
    console.log(req.session.user_id)
    if (!req.session.user_id) {
        res.send('simon go back');
        return;
    } else {
        res.render('index.ejs');
    }
}

exports.logout_get = (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            res.redirect('/');
        });
    }
};