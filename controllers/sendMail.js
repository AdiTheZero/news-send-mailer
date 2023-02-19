const nodemailer = require("nodemailer");
// const fetch = require("node-fetch");
// import fetch from 'node-fetch';

// import axios from 'axios';
const axios = require('axios');










// function callfetchapi()
// {
//     let url="https://content.guardianapis.com/technology?api-key=test";
//     fetch(url).then((res)=>{
//         res.json().then((res1)=>{
//             console.log(res1);
//         })
//     })
// }

const sendMail = async (req, res) => {

  const ress=await axios.get("https://content.guardianapis.com/technology?api-key=test");
  // console.log(ress.data.response.results);
  const data=ress.data.response.results;

  const z= data.map((x)=>
  {
    return `<div><a href =${x.webUrl}> ${x.webTitle
    } </a></div>`
  })
  console.log(z.join( " "));

  const html=z.join(" ");
 





  // let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "adityakumarspn556@gmail.com",
      pass: "oicniapbbigxtbpu",
    },
  });

  let info = await transporter.sendMail({
    from: 'adityakumarspn556@gmail.com', // sender address
    to: "kartikey.zen@gmail.com", // list of receivers
    subject: "Hello Node-js", // Subject line
    text: "Hello Aditya nodejs", // plain text body
    html: html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // callfetchapi();
  res.json(info);
};

module.exports = sendMail;
