/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve('hey1')
    },t)
  })
  }
  
  function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve('hey2')
    },t)
  })
  }
  
  function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve('hey3')
    },t)
  })
  }
  
  function calculateTime(t1, t2, t3) {
  const start = performance.now()
  wait1(t1).then((data1)=>{
    console.log(data1)
    return wait2(t2)
  })
  .then((data2)=>{
    console.log(data2)
    return wait3(t3)
  })
  .then((data3)=>{
    console.log(data3)
    const end = performance.now()
  const count = end - start
  console.log('The total time consumed during this operation is'+' ' + count)
  })
  
  }
  
  calculateTime(3000,2000,1000);