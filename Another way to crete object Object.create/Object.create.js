const car={
    getDetails(name){
            console.log(name)
    }}

const car1=Object.create(car)  //

console.log(car1)  //->{} car1 is not having any getDetails Function but if we use the below cde we can access the getDetails Function 

//It is just using the prototype,it is not copying the method in it,only the prototype has been linked to this car1 object.

//we can accesss the getDetails because it is present in the prototype
car.getDetails('Audi')

//lets check protoype of car1
console.log(car1.__proto__)  //--> will give car-getDetails function as prototype
