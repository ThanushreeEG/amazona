import express from 'express';
import data from './data.js';

const app = express();
//used nodemon for automatic changes to server than using node everytime
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
}); /* by calling this server starts and will be ready for responsing for frontend */
