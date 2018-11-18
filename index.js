// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyPrependDriver(givenName){
  drivers.unshift(givenName)
}
function destructivelyAppendDriver(givenName){
  drivers.push(givenName)
}
function destructivelyRemoveLastDriver(){
  drivers.pop()
}
function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriver(givenName){
 let driverArray = [...drivers.slice(),givenName]
 return driverArray
}
function prependDriver(givenName){
  let driverArray = [givenName, ...drivers]
  return driverArray
}
function removeLastDriver(){
  return drivers.slice(0,2)

}
function removeFirstDriver(){
  return drivers.slice(1)
}
