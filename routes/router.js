const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Info = require("../models/info")

    // Contact Form
    router.post("/send", (req, res) => {
      Info.find({})
      .then(result => {
        async function sendMail() {
          let transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: "ericw142portfolio@gmail.com",
                pass: result[0].password
              },
            });
      
            let info = await transporter.sendMail({
              from: 'ericw142portfolio@gmail.com',
              to: 'eric.h.warshawsky@gmail.com',
              subject: "Someone contacted you from your Portfolio Site",
              html: "<b>You have been contacted by "+req.body.email+"</b><p>First Name: "+req.body.firstName+" Last Name: "+req.body.lastName+".</p><br><p>"+req.body.message+"</p>",
            });
      }
      sendMail().catch(console.error);
      console.log("success");
      })

    })

module.exports = router;