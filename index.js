'use strict';
var express = require('express');           // Express
var bodyParser = require("body-parser");    // Parse request body

// Application Port (Default = 3000)
const PORT = process.env.PORT || 3000;

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

// Begin application
app.listen(PORT, function () {
    console.log('Application listening on port ' + PORT + '.');
});