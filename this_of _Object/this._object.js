//The below code is wriiten with using object name to acces its properties
const movies={
    title:'The Avengers',
    year:2012,
    genre:'Action,Sci-Fi ,Thriller',
    cast:'Robert Downey Jr,Chris Evans',
    //The below code is one way of writing function inside the Object
    getDetails:function(){
        console.log(`Title:${movies.title}\nYear:${movies.year}\nGenre:${movies.genre}\nCast:${movies.cast}`)
    },
    //The another way of writing the function inside object is
    giveDetails(){
        console.log(`Title:${movies.title}\nYear:${movies.year}\nGenre:${movies.genre}\nCast:${movies.cast}`)
    }
};

// movies.getDetails()
movies.giveDetails()