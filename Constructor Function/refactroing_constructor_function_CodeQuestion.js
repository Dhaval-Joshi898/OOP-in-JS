// Refactoring Constructor Function

// For the given code :
// function main(){
//     //Refactor the gadget constructor function
//   const Gadget = (brand, type)=>{
//     this.brand = brand;
//     this.type = type;
  
//     // Refactor the describeGadget() method here
//     this.describeGadget = ()=> {
//       return `This gadget is a ${type} from ${brand}.`;
//     };
//   };
//     const gadget1 = new Gadget("sony","laptop");
//     console.log(gadget1.describeGadget());
//     // Do not modify the return statement
//    return Gadget; 
//   }
//   main();

// Refactor the Gadget constructor function so that it works correctly

// Fix the implementation of the describeGadget() method so that it return a string in the format "This gadget is a {type} from {brand}."

/*Note:Arrow functions do not have their own “this” context, and they lexically bind this to the enclosing scope. 
As a result, when an arrow function is used as a constructor function with the 'new' keyword, it does not create a new instance of an object. 
Instead, it inherits this from the enclosing scope, which is typically the global object or the object that contains the arrow function.
*/

//Answer CODE:
function main(){
    //Refactor the gadget constructor function
  const Gadget = function(brand, type){
    this.brand = brand;
    this.type = type;
  
    // Refactor the describeGadget() method here
    this.describeGadget = function() {
      return `This gadget is a ${this.type} from ${this.brand}.`;
    };
  };
    const gadget1 = new Gadget("sony","laptop");
    console.log(gadget1.describeGadget());
    // Do not modify the return statement
   return Gadget; 
  }
  main();
//Output:This gadget is a laptop from sony.