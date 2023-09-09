//Below is the object literal
const car={
    carName:'BMW'
}
console.log(car.__proto__)  //this will give the main object (top of the heirarchy)
//All the functions or the properties which are htere in the main object can be accesible BY THIS OBJECT LITERAL CAR

// TO check Prototype of any object we can use:
Object.getPrototypeOf(car) //run this in console  {you will get the top object in hierrarchy}