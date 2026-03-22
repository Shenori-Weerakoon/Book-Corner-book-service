const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Service API',
      version: '1.0.0',
      description: 'API documentation for the Book Service microservice of the Online Bookstore system'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local development server'
      }
    ],
    components: {
      schemas: {
        Book: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '661b0d6a9d12a4c3d5f12345'
            },
            title: {
              type: 'string',
              example: 'Atomic Habits'
            },
            author: {
              type: 'string',
              example: 'James Clear'
            },
            price: {
              type: 'number',
              example: 14.99
            },
            category: {
              type: 'string',
              example: 'Self-Help'
            },
            description: {
              type: 'string',
              example: 'A practical guide to building good habits and breaking bad ones.'
            },
            imageUrl: {
              type: 'string',
              example: 'https://example.com/atomic-habits.jpg'
            },
            stock: {
              type: 'number',
              example: 8
            }
          }
        },
        AddBookInput: {
          type: 'object',
          required: ['title', 'author', 'price', 'category', 'stock'],
          properties: {
            title: {
              type: 'string',
              example: 'Atomic Habits'
            },
            author: {
              type: 'string',
              example: 'James Clear'
            },
            price: {
              type: 'number',
              example: 14.99
            },
            category: {
              type: 'string',
              example: 'Self-Help'
            },
            description: {
              type: 'string',
              example: 'A practical guide to building good habits and breaking bad ones.'
            },
            imageUrl: {
              type: 'string',
              example: 'https://example.com/atomic-habits.jpg'
            },
            stock: {
              type: 'number',
              example: 8
            }
          }
        },
        UpdateBookInput: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              example: 'Atomic Habits'
            },
            author: {
              type: 'string',
              example: 'James Clear'
            },
            price: {
              type: 'number',
              example: 14.99
            },
            category: {
              type: 'string',
              example: 'Self-Help'
            },
            description: {
              type: 'string',
              example: 'A practical guide to building good habits and breaking bad ones.'
            },
            imageUrl: {
              type: 'string',
              example: 'https://example.com/atomic-habits.jpg'
            },
            stock: {
              type: 'number',
              example: 8
            }
          }
        },
        DecreaseStockInput: {
          type: 'object',
          required: ['quantity'],
          properties: {
            quantity: {
              type: 'number',
              example: 2
            }
          }
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Book not found'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;