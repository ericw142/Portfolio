const express = require("express");
const router = require("./routes/router");
const path = require("path");
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3001;

const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Router
app.use("/api", router);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio",
 { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
  });

// Initializing App
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
  
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});