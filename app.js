var express = require("express"),
    requestIp = require("request-ip"),
    os = require("os"),
    lang = require("locale");

var app = express();

app.use(requestIp.mw());


app.get("/", function(req, res) {
    res.header("Content-Type", "text/plain")
    var clientIp = req.clientIp,
        browserOS = os.platform(),
        language = req.headers["accept-language"].substring(0, req.headers["accept-language"].indexOf(","));

    res.json({ ip: clientIp, language: language, os: browserOS });
    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("SERVER STARTED!");
});