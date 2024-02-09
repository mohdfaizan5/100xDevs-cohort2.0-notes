const express = require('express')
const app = express()
const bodyparser = require('body-parser')


app.use(bodyparser.json())
// app.use(express.json())

// In memory data

let user = [{
  name:'Arun',
  kidneys:[{
    health:true
  }]
}]


// user can check how many kidneys they have and their health
// get -- query parameter
app.get('/',(req,res)=>{
  let userkidney = user[0].kidneys
  let noOfKidney = userkidney.length
  console.log(userkidney.length)
  let noOfhealthykidney = 0 ;
  for(let i=0;i<userkidney.length;i++){
    if(userkidney[i].health){
      noOfhealthykidney = noOfhealthykidney + 1
    }
  }
  let unhealthy = noOfKidney - noOfhealthykidney
  res.json({
    noOfKidney,
    noOfhealthykidney,
    unhealthy
  })
})

// user can add new kidney
// post --> body
app.post('/',(req,res)=>{
const ishealth = req.body.ishealth;
user[0].kidneys.push({
  health:ishealth
})
res.json({
  msg:'done'
})
})

// user can replace the kidney,make it healthy
app.put('/',(req,res)=>{
  for(let i=0;i<user[0].kidneys.length ;i++){
    user[0].kidneys[i].health = true
  }
  res.json({
    msg:'replaced'
  })
})


function istherekid(){
  let atleastoneunhealthy =false
  for(let i =0;i<user[0].kidneys.length;i++){
    if(user[0].kidneys[i].health == false){
      atleastoneunhealthy = true
    }
   return atleastoneunhealthy
  }
}


//  user can remove the kidney
app.delete('/',(req,res)=>{
  if(istherekid){
    const newkid =[]
 
    for(let i =0;i<user[0].kidneys.length;i++){
      if(user[0].kidneys[i].health){
        newkid.push({
          health:true
        })
      }
    }
    user[0].kidneys = newkid
    res.json({
      msg:'deleted'
    })
  }
  else{
    res.status(411).json({
      msg:'no unhealthy kidney'
    })
  }
 
})

app.listen(3001)