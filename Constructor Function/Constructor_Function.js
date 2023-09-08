//Constructor Function
//Constructor Function name should Start with capital letter

function Movies(title,year){
    this.title=title;       // this is 
    this.year=year;         //          used to create object
// we are using 'this'keyword so that the object when created will refer to this  e.g object name is movie1 then movie1.title:'the avengers' 
    //to create function 

    this.getDetails=function(){
        console.log(`The Details of the movie are-\nTitle: ${this.title}\nYear: ${this.year}`)
    }
}

//Creating Object using 'new' Keyword,without new keyword the object cannot be created of Constructor Function.

let movie1=new Movies('The Avenger',2012)
console.log(movie1)
//Now Accesing the Function inside the object with the object name

movie1.getDetails()