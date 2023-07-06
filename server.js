const express = require('express');
const createServer = express();
const port = 9000;

createServer.use(express.json())
const articleRoute = require('./routes/articleRoutes')
createServer.use('/article',articleRoute)


createServer.get('/', (req,res) => {
  res.send("get request form port 4000").status(200);
})

createServer.listen(port,()=>{
  console.log(`Server Running successfully at port: ${port}`);
})
