//The function we have wriiten below is called as factory function.

//With the help of this function the code of creating an object is reduced,
//we can create the object with very few lines by passing the arguments inside the function and then storing it inside the variable and calling the function.

function movies(title,year){
    const movieObj={
        title:title,
        year:year,
        getDetails(){
            console.log(`Title: ${this.title} \nYear: ${this.year}\n`)
        },
    }
    return movieObj    //the function will return the movie object so we need to store it in varaible if we need to use it any futher.
}

//Calling the function to create the objects
const movie1=movies('The Avengers',2012);
console.log(movie1)
//And if i want to call the METHOD inside the object:
movie1.getDetails()