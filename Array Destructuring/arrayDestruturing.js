const fruits=['Apple','Mango','Kiwi','Banana','Guava']

const [a,b]=fruits

console.log(a)  //without using fruits[0]
console.log(b)  //without using fruits[1]



let car=['Audi','BMW','Ferrari','Mercedes']


// i want value audi bmw Mercedes and not Ferrari

let[au,bm,,me]=car  //the empty vlaues before ',' is for ferrari 
console.log(au,bm,me)
