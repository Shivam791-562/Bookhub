const db = require('../models');

module.exports = {
  Query: {
    books: () => db.Book.findAll({ include: db.Author }),
    authors: () => db.Author.findAll({ include: db.Book }),
  },
  Mutation: {
    createAuthor: (_, { name }) => db.Author.create({ name }),
    createBook: (_, { title, authorId }) => db.Book.create({ title, AuthorId: authorId }),
  },
  Author: {
    books: (parent) => db.Book.findAll({ where: { AuthorId: parent.id } })
  },
  Book: {
    author: (parent) => db.Author.findByPk(parent.AuthorId)
  }
};
