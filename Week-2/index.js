
// Importing the express libaray
const express = require('express') 
//  Initializing the express
const app = express()
// Import Body Parser
const bodyparser = require('body-parser')
app.use(bodyparser.json())


// When some one hit ur backend server control will reach here.
// Here, get is method , '/' - Home router, and callback function with two parameter i.e request and response
app.get('/',(req,res)=>{
  // Sending the response
  res.send('I have Created my first HTTP sever')
})


function sum(n){
  let ans =0
  for(i=0;i<=wn;i++){
    ans =ans + i
  }
  return ans
}



app.get('/sum',(req,res)=>{
  const a = req.query.a
  const result = sum(a)
  console.log(result)
  res.send('ans'+' '+result)
})

app.post('/conversation',(req,res)=>{
  // In Console u will get the headers  which is sent in postman
  console.log(req.headers)
  // In Console u will get the Body which is sent in postman
  console.log(req.body)
  // In Console u will get the Query which is sent in postman
  console.log(req.query)
  res.send('Your in conversation route')
})

// Start the server and listen on the specified port
app.listen(3000)


