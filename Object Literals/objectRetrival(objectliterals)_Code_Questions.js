/* Requirement:
Implement a function called getUserDetail() that takes two parameters:
   -  a user profile object. 
   - an array of string keys. 
The function should retrieve the nested value in the profile that corresponds to the array of keys. If the keys do not lead to a valid nested value, the function should return the string "Not available". */
function main() {

    const userProfile1 = {
      name: "John Doe",
      email: "john.doe@example.com",
      address: {
        city: "New York",
        street: "123 Main St",
        zipCode: "10001"
      }
    };
  
    const userProfile2 = {
      name: "Marry Jane",
      email: "marry.jane@example.com",
      address: {
        city: "L.A",
        street: "154, washington road",
        block: "001",
        zipCode: "10011"
      }
    };
  
    function getUserDetail(profile, keys) {
      let currentObj = profile;
  
      for (const key of keys) {
        if (currentObj.hasOwnProperty(key)) {
          currentObj = currentObj[key];
        } else {
          return "Not available";
        }
      }
  
      return currentObj;
    }
  
    console.log(getUserDetail(userProfile2, ["address", "block"])); // Output: "001"
    console.log(getUserDetail(userProfile1, ["address", "block"])); // Output: "Not available"
    console.log(getUserDetail(userProfile1, ["name"])); // Output: "John Doe"
  
    // Return the function for later use if needed
    return getUserDetail;
  }
  
  main();
  