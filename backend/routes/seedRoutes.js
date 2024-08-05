import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  try {
    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});

    // Insert new data
    const createdProducts = await Product.insertMany(data.products);
    const createdUsers = await User.insertMany(data.users);

    // Send response
    res.status(201).send({ createdProducts, createdUsers });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send({ message: 'Error in seeding data' });
  }
});

export default seedRouter;
