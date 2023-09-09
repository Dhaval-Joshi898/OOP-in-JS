const Movie=function(title){
    this.title=title;
    // this.getDetails=function(){
    //     console.log(`Title of movie is: ${this.title}`)
    // }
}

//Suppose it there are 100 of objects and each objects has the copy of thr getDetails FUnction,
//this will affect the performance of the function.

// To solve this function perofrmance issue we can create this function in the prototype of its object
//So that the main object at top will have this function and THIS function will be accesible to all the child object or prototype

//To create it: here the property (key is created ) getDetails Property

Object.prototype.getDetails = function(){
    console.log(`Title of movie is: ${this.title}`)
}
// this will inherit the method from the prototype and not make a copy in all objects
//Now check the developer tool chrome to see this getDetails method is present isnide the prototype


let movieOne=new Movie('The Avengers Infinity War')   //Creating object
console.log(movieOne)
movieOne.getDetails()

let movieTwo=new Movie('The Avatar')   //Creating object
console.log(movieTwo)
