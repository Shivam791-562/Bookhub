BookHub API
BookHub is a GraphQL API built with Node.js, Express, Sequelize, and PostgreSQL. It lets you manage users, authors, and books using a modular, clean backend setup.

Features

- User model with hashed passwords (bcryptjs)
- Author-Book one-to-many relationship
- GraphQL API with Apollo Server
- PostgreSQL database using Sequelize ORM
- Easy environment configuration

Setup Instructions

```bash
git clone https://github.com/Shivam791-562/bookhub.git
cd bookhub
npm install
```
Configure Environment Variables
Copy .env.example to .env and fill in your details:
```env
PORT=4000
DATABASE_URL=postgres://yourusername:yourpassword@localhost:5432/bookhub_db
```
Make sure PostgreSQL is running and the database bookhub_db exists.
Start the Server
```bash
npm start
```
open http://localhost:4000/graphql

Example Queries
Get all authors with their books
```bash
{
  authors {
    id
    name
    books {
      id
      title
    }
  }
}
```
Create a new author
```bash
mutation {
  createAuthor(name: "J.K. Rowling") {
    id
    name
  }
}
```
Create a new book
```bash
mutation {
  createBook(title: "Harry Potter and the Sorcerer's Stone", authorId: 1) {
    id
    title
  }
}
```

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
