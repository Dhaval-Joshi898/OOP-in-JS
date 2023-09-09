const Movie=function(title){
    this.title=title;
    this.getDetails=function(){
        console.log(`Title of movie is: ${this.title}`)
    }
}
let movieOne=new Movie('The Avengers Infinity War')   //Creating object
console.log(movieOne)
movieOne.getDetails()

let movieTwo=new Movie('The Avatar')   //Creating object
console.log(movieTwo)
