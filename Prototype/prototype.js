const Movies=function(title){
    this.title=title;
}

let movie1=new Movies('The Avengers')
// console.log(movie1)

//now if i want to add new property(key) i can  add
movie1.year=2012
console.log(movie1)
console.log(movie1.__proto__.__proto__.__proto__)
// this will give first prototype i.e the function Movies then the main Object then null

//creating a new object
let movie2=new Movies('Avatar')
//the below code will not give 
console.log(movie2)


