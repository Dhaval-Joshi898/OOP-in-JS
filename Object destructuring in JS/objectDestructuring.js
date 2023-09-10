//Object Destructuring 

//It is used to access the property inside the object without using OBJECT to access it ,further
//for e.g. there is a object car and it has propery name , for accessing name we have to write 'car.name ',
//but with the help of object destructuring we can write it console.log(name), how to destructure an object is as FOLLOWS:


//Binding pattern
const values={
    a:1,
    b:2,
    c:['O', 'B', 'J'],
    d:3
}

const {a,b}=values      //--> it is similar to const a = values.a

console.log(a)

const {c:c1}=values   //here i can change the name of variable and assigned values
console.log(c1)
// console.log(c)   this will give error because c is not defined and c-> is c1


//Assignment pattern
const car={
    name:'Audi',
    color:'red'
}

let color;
({color:color}=car)
console.log(color)     // assigned the color property to let color variable

// let name;
// ({color:name}=car)
// console.log(name)
