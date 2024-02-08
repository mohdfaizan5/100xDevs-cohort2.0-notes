// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function currenttime(){
  
  let date = new Date()
  
  let hours = date.getHours().toString().padStart(2,'0')
  let Minutes = date.getMinutes().toString().padStart(2,'0')
  let Seconds = date.getSeconds().toString().padStart(2,'0')
  
  setInterval(()=>{
    Seconds ++
    if(Seconds == 60){
      Minutes ++
      Seconds = 0
      Seconds ++
      if(Minutes == 43 ){
        hours ++
        Minutes = 0
        Seconds = 0
        Seconds ++
       
      }
    }
    console.log(`${hours}:${Minutes}:${Seconds}`)
  },1000)
  
  
  }
  
  currenttime()