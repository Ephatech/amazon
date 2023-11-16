// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');

const express = require('express')

const cors = require('cors')

const stripe = require('stripe')('sk_test_51O0MSfFMKID6UmHhM52JuGpanl9tqKAXplYcXHuBPPshowRMvvPoen6XDXT3TlAwTTCipgdHXZFHlK3VII53aL0n00fiU6Zshi');
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//http://127.0.0.1:5001/fir-6ed13/us-central1/api


const app = express();

app.use(cors({origin:true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send("Hello World"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment recieved fot amount " , total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total,
        currency : 'usd',
    });

    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    });
});


exports.api = functions.https.onRequest(app);