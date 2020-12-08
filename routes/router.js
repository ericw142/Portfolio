const path = require("path");
const nodemailer = require("nodemailer");

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
        async function sendMail() {
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "procourse48@gmail.com",
                  pass: "jH^Vx660nZcI"
                },
              });
        
              let info = await transporter.sendMail({
                from: 'procourse48@gmail.com',
                to: 'eric.h.warshawsky@gmail.com',
                subject: "Someone contacted you from your Portfolio Site",
                html: "<b>You have been contacted by "+req.body.email+"</b><p>First Name: "+req.body.firstName+" Last Name: "+req.body.lastName+".</p><br><p>"+req.body.message+"</p>",
              });
        }
        sendMail().catch(console.error);
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}