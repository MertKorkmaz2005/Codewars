function multiply(number){
    const power = Math.abs(number).toString().length; // Lengte van het aantal cijfers
    const result = number * Math.pow(5, power); 
  
  return result
}

describe("Basic Tests",() =>{
    Test.assertEquals(multiply(10),250);
    Test.assertEquals(multiply(5),25);
    Test.assertEquals(multiply(200),25000);
    Test.assertEquals(multiply(0),0);
    Test.assertEquals(multiply(-2),-10);
    })