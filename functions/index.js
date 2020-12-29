const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I0laqARXzKvrwSUW0UAW7sP9JfEgPKbaf1pd2L9JTXWy5Bln3lGUZuTVJiP3zVjjo5z9YXPgXMc0cFyhb1VX3Wh00RjI4SLuJ')

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async(request, response) => {
   const total = request.query.total;

   console.log('Payment Request Received BOOM!! for this amount >>>>', total)
   const paymentIntent = await stripe.paymentIntent.create({
      amount: total, // subunits of the currency
      currency: "usd",
   });
   response.status(201).send({
      clientSecret: paymentIntent.client_secret,
   })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-2a475/us-central1/api