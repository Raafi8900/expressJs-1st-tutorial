var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send("Hello Express js"); // Send the response directly
});

app.listen(8000, function () {
    console.log("Server running successfully on port 8000");
});
