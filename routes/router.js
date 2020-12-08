const path = require("path");

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    app.get("/portfolio", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    })

    app.get("/about", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    })

    app.get("/contact", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    })

    // Contact Form
    app.post("/sendcontactform", (req, res) => {
        console.log(req.body);
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}