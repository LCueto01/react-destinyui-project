

const item = {
  id: 13,
  light_level: 1406,
  items: { thing1: "bruh", thing2: "bruh2" }
}

const item2 = {
  thing1: { name: "jeff", age: 22 },
  thing2: { name: "alan", age: 32 },
  thing3: { name: "zeke", age: 42 }
}

const objArr = [{
  id: 13,
  light_level: 1406,
},
{
  id: 14,
  light_level: 1406,
}]

const arrCopy = {...objArr}

const copy = JSON.parse(JSON.stringify(item))
const otherCopy = { ...item }

const ref = {
  id: 13,
  light_level: 1406,
}
console.log(arrCopy)
console.log(objArr.findIndex( i => {
  return i.id == ref.id
}))


const randomArr = [1,2,3,4]
randomArr.shift()
console.log(randomArr)
console.log(randomArr.indexOf(2))
