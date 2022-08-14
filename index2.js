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



// task 12
// function makeStringFromArray(array, delimeter) {
//   let string;
  
// string = array.join(delimeter);


  
//   return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");




// task 13
// function slugify(title) {
  
//     const titleSp = title.split(' ');
//     const titleJo = titleSp.join('-');
//     const slug = titleJo.toLowerCase();
//     return slug;




  
// }


// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));



// task 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];


// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);



// task 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);



// task 16
// function makeArray(firstArray, secondArray, maxLength) {
// let array = [];
//     if (firstArray.concat(secondArray) >= maxLength) {
//         array.push(firstArray);
      
//         return;
//     }
//     return array = firstArray.concat(secondArray).slice(0, maxLength);
// }
  

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));



// task 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// task 18
// function calculateTotal(number) {
 
// let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
    
//   }
//   console.log(total);
// return total;

  
// }

// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);



// task 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// task 20
// function calculateTotalPrice(order) {
//   let total = 0;
  
// const ordered = []
// for (let i = 0; i < order.length; i += 1) {
//   total += order[i];
// }
  
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);




// task 21

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
// function findLongestWord(string) {
  


// const splitString = string.split(" ");
// let biggestWord = splitString[0];
// for (let i = 0; i < splitString.length; i += 1) {
//   if (splitString[i].length > biggestWord.length) {
//     biggestWord = splitString[i];
//   }
// }
// return biggestWord;
  



// findLongestWord("The quick brown fox jumped over the lazy dog");
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");






// task 22 Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
// for (let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }
        
  
//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);



// task 23 Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
   
// const elements = [];
// for (const item of numbers) {
//   console.log(item);
//   if (item > value) {
//     elements.push(item);
//   }
// }
// return elements;
  
// }


// filterArray([1, 2, 3, 4, 5], 3);
// console.log(filterArray([1, 2, 3, 4, 5], 3));




// task 24 Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }





// task 25 Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
// function getCommonElements(array1, array2) {
  
// const newArray =[];
//   for (let i = 0; i < array1.length; i += 1) {
//     if(array2.includes(array1[i])){
//       newArray.push(array1[i]);
//     }
//   }

//   return newArray;


 
// }

// getCommonElements([1, 2, 3], [2, 4]);
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));