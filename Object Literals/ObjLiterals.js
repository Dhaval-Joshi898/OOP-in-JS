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
        console.log(movies[details])
    }

};

console.log(movies.title)

movies.getDetails()   //this function is inside the object movies
const details='title'
movies.getSpecific(details)
movies.getSpecific('genre')

