

const item  = {
    id: 13,
    light_level: 1406,
    items: {thing1:"bruh", thing2:"bruh2"}
  }

const item2 = {
    thing1: {name: "jeff",age: 22},
    thing2: {name: "alan",age: 32},
    thing3: {name: "zeke",age: 42}
}

  /*
  Object.keys(item).forEach(key => {
    if(typeof item[key] === "object"){
        console.log(Object.keys(item[key]))
    }else{
        console.log(key + " " + item[key]) 
    }
   
  })
  */
 let ageSum = 0;
 Object.keys(item2).forEach(key => {
   ageSum += item2[key]["age"] 

 })

 console.log(ageSum)


