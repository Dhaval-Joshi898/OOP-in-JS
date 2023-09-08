//The below code is wriiten with using object name to acces its properties
// const movies={
//     title:'The Avengers',
//     year:2012,
//     genre:'Action,Sci-Fi ,Thriller',
//     cast:'Robert Downey Jr,Chris Evans',
//     //The below code is one way of writing function inside the Object
//     getDetails:function(){
//         console.log(`Title:${movies.title}\nYear:${movies.year}\nGenre:${movies.genre}\nCast:${movies.cast}`)
//     },
//     //The another way of writing the function inside object is
//     giveDetails(){
//         console.log(`Title:${movies.title}\nYear:${movies.year}\nGenre:${movies.genre}\nCast:${movies.cast}`)
//     }
// };

// movies.getDetails()
// movies.giveDetails()


//Now writing the code using 'this.' instead using object name inside (OBJECT function).

const movies1={
    title:'The Avengers',
    year:2012,
    genre:'Action,Sci-Fi ,Thriller',
    cast:'Robert Downey Jr,Chris Evans',
    //The another way of writing the function inside object is
    giveDetails(){
        console.log(`Title:${this.title}\nYear:${this.year}\nGenre:${this.genre}\nCast:${this.cast}`)
        //the this refers to the object movies its like this object ka title give,genre give
    }
};

movies1.giveDetails()

const movies2={
    title:'Movies 2',
    year:2010,
    genre:'Action,Sci-Fi ,Thriller',
    cast:'Robert Downey Jr,Chris Evans',
    //The another way of writing the function inside object is
    giveDetails(){
        console.log(`Title:${this.title}\nYear:${this.year}\nGenre:${this.genre}\nCast:${this.cast}`)
        //the this refers to the object movies its like this object ka title give,genre give
    }
};

movies2.giveDetails()