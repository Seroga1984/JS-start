// task 1
// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);



// task 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
  

  

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }

//   return 'Access denied, wrong password!'
  
// }

// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");



// task 3
// function checkStorage(available, ordered) {
 
  

//   if (ordered === 0) {
//     return "Your order is empty!";
//     }
//    if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
  

  
  
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);



// task 4
// const fruits = ["apple", "plum", "pear", "orange"];


// task 5
// const fruits = ["apple", "plum", "pear", "orange"];


// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];



// task 6
// const fruits = ["apple", "plum", "pear", "orange"];


// fruits[1] = "peach";
// fruits[3] = "banana";


// task 7
// const fruits = ["apple", "peach", "pear", "banana"];


// const fruitsArrayLength = fruits.length;

// task 8
// const fruits = ["apple", "peach", "pear", "banana"];


// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


// task 9

// function getExtremeElements(array) {
  


//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   const firstElement = array[0];
  
//   return [firstElement, lastElement];
// }

  

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// 1 способ
    // const newArray = [];
    // newArray.push(array[0], array[array.length - 1]);
    // return newArray;
//  2способ
    //  const newArray = [array[0], array[array.length - 1]];
    // return newArray;
// 3 способ
        // return  newArray = [array[0], array[array.length - 1]];
  // 4 способ
    // return [array[0], array[array.length - 1]];
// }



// task 10


// function splitMessage(message, delimeter) {
//   let words;
  
//    words = message.split(delimeter);
  
//   return words;
// }

// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");



// task 11
// function calculateEngravingPrice(message, pricePerWord) {
   
//    const wordMessage = message.split(" ");
//    const totalWord = wordMessage.length;
//    return totalWord * pricePerWord;




  
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);