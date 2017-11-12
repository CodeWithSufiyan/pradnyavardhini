let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodeParser = bodyParser.urlencoded({ extended: false });

// require controller modules
let authorController = require('../controllers/authorController');
let bookController = require('../controllers/bookController');
let genreController = require('../controllers/genreController');

router.post('/user/authenticate', (req, res) => {
    if (req.body.email && req.body.username && req.body.password && req.bodyConfirm) {
        res.send("success")
    }
});

/// BOOK ROUTES ///

/* GET home page */
router.get('/', bookController.index);

/* GET book by id */
router.get('/book/:id', bookController.retrieve_book_get);

/* POST create a book */
router.post('/book/create', urlencodeParser, bookController.create_book_post);

/* DELETE delete a book */
router.delete('/book/delete/:id', urlencodeParser, bookController.remove_book_delete);

/* PUT update a book */
router.put('/book/update/:id', urlencodeParser, bookController.update_book_put);

/* GET author list */
router.get('/author/list', authorController.display_list);

/* POST create author */
router.post('/author/create', urlencodeParser, authorController.create_author_post);

/* PUT update author */
router.put('/author/update/:id', authorController.update_author_put);

module.exports = router;

