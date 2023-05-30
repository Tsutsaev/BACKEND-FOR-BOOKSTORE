const Author = require("../models/Author.module");

module.exports.authorsController = {
  addAuthor: async (req, res) => {
    try {
      const addAuthor = await Author.create({
        authorName: req.body.authorName,
        authorAbout: req.body.authorAbout,
      });
      res.json(addAuthor);
    } catch (err) {
      return res.json(err);
    }
  },
};
