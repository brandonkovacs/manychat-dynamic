'use strict';
var express = require('express');           // Express
var bodyParser = require("body-parser");    // Parse request body
var fs = require('fs');                     // Filestream
var https = require('https');               // SSL Support

// Application Port (Default = 8080)
const PORT = process.env.PORT || 8080;

// SSL Certificate Options
const SSL_KEY= process.env.SSL_KEY || '';
const SSL_CERT= process.env.SSL_CERT || '';

var sslOptions = {
    key: fs.readFileSync(SSL_KEY),
    cert: fs.readFileSync(SSL_CERT)
};

// Initialize express with body parser middleware
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Method to handle a request on /
app.get('/', function (req, res) {
    res.send('Nothing to see here.');
});

// Method to handle a post request from Manychat
app.post('/manychat', function (req, res) {

    // Get subscriber data from request body
    var manychat = req.body;
    console.log(manychat);

    /*
     * MANYCHAT FIELDS:
     *
     * id
     * key
     * page_id
     * status
     * first_name
     * last_name
     * name
     * gender
     * profile_pic
     * locale
     * language
     * timezone
     */

    // Provide a JSON response back to Manychat
    res.json({
        version: "v2",
        content: {
            messages:[
                { type: "text", text: "Nice profile pic!"},
                { type: "image", url: manychat.profile_pic }
            ]}
    });
});

// Listen on an SSL enabled port
var server = https.createServer(sslOptions, app).listen(PORT, function(){
    console.log("Application listening on port " + PORT + " [SSL ENABLED].");
});