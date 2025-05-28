const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse JSON request bodies

// Mock database: pretend this is your DB with some sample orders
const ordersDB = {
  "12345": {
    orderNumber: "12345",
    product: "Cool T-shirt",
    variant: "Blue, Size M",
    quantity: 2,
    total: 40,
    fullName: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123 Street",
    city: "New York",
    state: "NY",
    zip: "10001"
  },
  // add more orders here if you want
};

// API endpoint to get order by ID
app.get('/api/orders/:orderId', (req, res) => {
  const orderId = req.params.orderId;
  const order = ordersDB[orderId];
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json({ order });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
