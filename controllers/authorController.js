var Author = require('../models/Author');

// display author list
exports.display_list = (req, res) => {
    Author.find((err, authors) => {
        res.json(authors);
    });
}

// create an author
exports.create_author_post = (req, res) => {
    Author.create(req.body).then((err, author) => {
        if (err) throw err;
        res.json(author);
    });
}

// update the author PUT
exports.update_author_put = (req, res) => {
    Author.findById(req.params.id, (err, author) => {
        author.name = "stan-lee";
        Author.findByIdAndUpdate(req.params.id, author, (err, updatedAuthor) => {
            if (err) throw err;
            res.json(updatedAuthor); // doesnt returns updated value
        });
    });
}