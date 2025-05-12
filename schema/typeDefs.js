const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    username: String!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: Author
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    createAuthor(name: String!): Author
    createBook(title: String!, authorId: ID!): Book
  }
`;