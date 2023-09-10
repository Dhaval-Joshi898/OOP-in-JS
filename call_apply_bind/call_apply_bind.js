//call appy bind is only to reuse some function within an object we can point or link that function to another object.
const car={
    name:'car',
    color:'black',
    getDetails(brand,seats){
      
        console.log(`This is ${this.color} ${this.name} of ${brand} company.It has ${seats} seats`)

    }
}
//calling function inside the object
car.getDetails('Audi',5)
//Output is:This is black car of Audi company.It has 5 seats

const  bus={
    name:'bus',
    color:'blue'
};
//Now i want to use getDetails() inisde the bus ,we can do simply copy it in bus then we will repeating the code
//To use function of one object inside another object we can make use of call/apply/bind


// call(this,arg1,arg2) here 'this' is the object in which you have to call getDetails {arg1 and arg2 is wriiten if in function there are parameters}
//in our example the 'this' is bus object

car.getDetails.call(bus,'Mercedes',40)  //call is the keyoword which will bind 'this' of getDetails to whatever object you want 
//Output is:This is blue bus of Mercedes company.It has 40 seats.


//The apply method will work in the same manner BUT it will take arguments as an arrays of arguments.apply(this,[arg1,arg2])

car.getDetails.apply(bus,['BMW',50])

//The bind method

//bind we can  make reusable

const vehicle1=car.getDetails.bind(bus)
//now i can use vehicle1 to call the method anytime i want
vehicle1('Ferrari',45)
//again i can call this with different arguments
vehicle1('Gold',40)