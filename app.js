const express = require("express");
const app = express();

let PORT = 10000;

const sendMail = require("./controllers/sendMail");
app.get("/", sendMail);

// app.get("/", (req, res) => {
//   res.send("I am a server");

// });

// app.get("/mail", sendMail);

const start = async () => {
  try {
    app.listen(PORT,"0.0.0.0", () => {
      console.log(`I am live in port no.  ${PORT}`);
     
    });
  } catch (error) {}
};

start();
