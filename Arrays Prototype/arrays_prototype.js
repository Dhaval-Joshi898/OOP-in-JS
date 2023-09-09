const arr=[1,2,3,4,5]
console.log(typeof arr)  //this will print object

console.log(arr.__proto__) //this will print the Array prototype

console.log(arr.__proto__.__proto__)  //this will print the maon Object prototype

//Note array can also be create dusing Array()
/*let arr1=new Array(3,4,5)
console.log(arr1)   //--->[ 3, 4, 5 ]

The new keyword is used to create object and Array is a construcotr function and construtor function is the property of Object prototype
*/