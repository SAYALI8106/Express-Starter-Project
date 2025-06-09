const express = require('express');
const ServerConfig = require('./config/serverConfig.js');
const { connectDB } = require('./config/dbConfig.js');
const PORT = ServerConfig.PORT; 
const app = express();
// const bodyParser = require('body-parser');
// console.log("Environment variables :", process.env);


// app.use(bodyParser.json())
// app.use(bodyParser.text());
// app.use(bodyParser.urlencoded());

app.use(express.json())
app.use(express.text());
app.use(express.urlencoded({extended: true}));

// app.post('/ping', (req,res)=>{
//   console.log("Request body",req.body);
//   return res.json({
//     message: "pong",
//     data: req.body.data
//   })
// })
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
