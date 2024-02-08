/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((res)=>{
        setTimeout(()=>{
            res('Return Promise')
        },n)
    })
}

function isDone(data){
    console.log(data)
}

let result = wait(5000).then(isDone)
