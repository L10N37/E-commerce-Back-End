# RESTful API

Project Name is a RESTful API for managing an e-commerce system. It provides endpoints for managing categories, products, and tags.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd project-name`
3. Install the dependencies: `npm install`
4. Set up the environment variables:
   - Create a `.env` file in the root directory
   - Define the following environment variables in the `.env` file:
     ```
     DB_NAME=<your-database-name>
     DB_USER=<your-database-username>
     DB_PW=<your-database-password>
     ```
5. Run the server: `node server`

## Usage

Once the server is running, you can access the API endpoints using a tool like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to send HTTP requests.

## API Endpoints

The following API endpoints are available:

- `GET /api/categories`: Get all categories
- `GET /api/categories/:id`: Get a single category by ID
- `POST /api/categories`: Create a new category
- `PUT /api/categories/:id`: Update a category by ID
- `DELETE /api/categories/:id`: Delete a category by ID

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a single product by ID
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product by ID
- `DELETE /api/products/:id`: Delete a product by ID

- `GET /api/tags`: Get all tags
- `GET /api/tags/:id`: Get a single tag by ID
- `POST /api/tags`: Create a new tag
- `PUT /api/tags/:id`: Update a tag by ID
- `DELETE /api/tags/:id`: Delete a tag by ID

Please refer to the API documentation for detailed information on request and response formats for each endpoint.

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL (Database)
- Other dependencies (listed in `package.json`)

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
