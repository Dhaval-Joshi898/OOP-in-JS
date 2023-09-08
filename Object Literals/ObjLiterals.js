//The Below the object is created is called *OBJECT LITERALS*

const movies={
    title:'The Avengers',
    year:2012,
    genre:'Action,Sci-Fi',
    cast:'Chris Evan ,Robert Downey Jr',
    getDetails:function(){
        console.log(`Title: ${movies.title} \nYear: ${movies.year}\nGenre: ${movies.genre}\nCast: ${movies.cast}`)
    },

    getSpecific:function(details){
        console.log(movies[details])    //here we have not used '.'to access the object property(key) the reason oft this is in line below the final code
    }

};

console.log(movies.title)

movies.getDetails()   //this function is inside the object movies
const details='title'
movies.getSpecific(details)
movies.getSpecific('genre')

// a={
//     title:'Hello A',
//     getSpecific:function(details){
//         console.log(a[details])
//     }
// }
// b={
//     title:'Hello B',
//     getSpecific:function(details){
//         console.log(b.details)
//     }
// }   
// /*Using Dot Notation b.details:In the getSpecific method of object b, you're trying to access the details property of object b using dot notation (b.details). This won't work as expected because the details property is not defined within object b. Instead, you intended to access a property specified by the details parameter. 
// To do that correctly, you should use bracket notation as shown in object a. */

// a.getSpecific('title')
// b.getSpecific('title')
