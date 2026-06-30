//Bmi calculator in js 
// function BMI(weight,height){
//     var ans = weight/height**2;
//     return ans;
// }

// console.log("Your bmi is " + BMI(78,1.8));

//random number lover calculator in js
// var love = Math.floor(Math.random() * 100) + 1;
// console.log("How much love is there between you and your partner? " + love + "%");

//there is a function var.includes() which checks if a string contains a substring or not. It returns true if the 
// substring is found and false if it is not found.


//fizz buzz in js
// var arr = [];
// var count = 1;

// function fizzbuzz(arr) {
//      while(count<100){
//     if (count % 3 === 0 && count % 5 === 0) {
//         arr.push("FIZZBUZZ");
//     } else if (count % 3 === 0) {
//         arr.push("FIZZ");
//     } else if (count % 5 === 0) {
//         arr.push("BUZZ");
//     } else {
//         arr.push(count);
//     }

//     count++;
   
// }
//  return arr;
// }

// console.log(fizzbuzz(arr));

//fibonacci
// function fibonacciGenerator (n) {
//     var fibo = [];
//     if(n==1){
//         fibo=[0];
//     } else if(n==2){
//         fibo=[0,1];
//     } else{
//         fibo=[0,1];
//         for( var i=2 ; i<n ; i++){
//         fibo.push(fibo[i-1]+fibo[i-2]);
//     }
//      return fibo.slice(0,n);
//     }
// }

// console.log(fibonacciGenerator(999999));


//funtion calling 
function bellBoy( name , age , hasworkPermit  , languages){
    this.name = name ; 
    this.age = age ; 
    this.hasworkPermit = hasworkPermit;
    this.languages = languages;
}

var bellboy1 = new bellBoy("timmy" , 19 , true , ["hindi" , "english"]);
console.log(bellboy1);