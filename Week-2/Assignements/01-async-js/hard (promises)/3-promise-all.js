/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((res) => {
    setTimeout(()=>{ res('hey')},t)
  })
}

function wait2(t) {
  return new Promise((res) => {
    setTimeout(()=>{ res('hey2')},t)
  })
}

function wait3(t) {
  return new Promise((res) => {
    setTimeout(()=>{ res('hey3')},t)
  })
}

function isDone(data){
  console.log(data)
}

function calculateTime(t1, t2, t3) {
  const starttime = performance.now()
   Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then(()=>{
    let endtime = performance.now()
  const time = endtime - starttime
    console.log('All task is completed in'+' '+time)
   });
  
}

let result =  calculateTime(2000,3000,4000);


