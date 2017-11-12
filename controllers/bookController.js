
let Book = require('../models/Book');
let Author = require('../models/Author');

/* create index page on GET*/
exports.index = (req, res) => {
    console.log(Book.find({}, (err, data) => {
        res.render('index.ejs', { data: data });
    }));
}

/* Handle book create on POST */
exports.create_book_post = (req, res) => {
    Book.create(req.body).then((data) => {
        res.send(data);
    });
}

/* get book by id on GET */
exports.retrieve_book_get = (req, res) => {
    // Book.findById(req.params.id).then((book, err) => {
    //     res.json(book);
    //     Author.findById(book.author).then((err, author) => {
    //         if (err) throw err;
    //         console.log(author);
    //     });
    // });
    Book.findById(req.params.id, (err, book) => {
        //res.json(book);
        Author.findById(book.author, (err, author) => {
            res.json({
                book:book,
                author:author
            });
        });
    });
}

/* Handle book delete on DELETE */
exports.remove_book_delete = (req, res) => {
    Book.findByIdAndRemove(req.params.id).then((data) => {
        Book.find((err, data) => {
            res.send(data);
        });
    });
}

/* Handle book update on PUT */
exports.update_book_put = (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err) res.status(404).send(err);
        else {
            book.name = req.body.name;
            book.author = req.body.author;
            book.genre = req.body.genre;

            book.save((err, book) => {
                if (err) throw err;
                else {
                    res.send(book);
                }
            });
        }
    });
}