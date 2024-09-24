const admin = require('firebase-admin');
const serviceAccount = require('./fireBase.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'datacode-87922.appspot.com',  // Use bucket name without 'gs://'
});

const bucket = admin.storage().bucket();  // This will reference your bucket

module.exports = bucket;

