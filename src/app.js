require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const connectDB = require('./config/db');
const swaggerSpec = require('./swagger');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health check endpoint
app.get('/health', (req, res) => res.send('Book Service is running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Book Service running on port ${PORT}`));