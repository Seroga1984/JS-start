// const lesson1 = 2006;
// console.log(lesson1);

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee}) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// makeOrderMessage(2, 100, 50);
// console.log(makeOrderMessage(2, 100, 50));

// makeOrderMessage(4, 300, 100);
// console.log(makeOrderMessage(4, 300, 100));

// makeOrderMessage(10, 70, 200);
// console.log(makeOrderMessage(10, 70, 200));


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
  
//   let totalPrice;
//   totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   }

//   else {
//   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }


  

 
//   return message;
// }

// makeTransaction(3000, 5, 20000);
// console.log(makeTransaction(3000, 5, 20000))
// makeTransaction(1000, 3, 15000);
// console.log(makeTransaction)
// makeTransaction(5000, 10, 8000);
// console.log(makeTransaction)
// makeTransaction(2000, 8, 10000);
// console.log(makeTransaction)
// makeTransaction(500, 10, 5000);
// console.log(makeTransaction(500, 10, 5000))





// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message =  'Canceled by user!';
//   }
//   else if (password === 'jqueryismyjam') {
//     message = 'Welcome!';
//   }
//   else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// checkPassword('jqueryismyjam');
// console.log(checkPassword('jqueryismyjam'))
// checkPassword(null);
// console.log(checkPassword(null))
// checkPassword('mangohackzor');
// console.log(checkPassword('mangohackzor'))


// task 20

// function checkStorage(available, ordered) {
//   let message;
  
//    if (ordered <= 0) {
//      message = "There are no products in the order!";
//    }

  
  


// else if (ordered > available) {
//   message = "Your order is too large, there are not enough items in stock!";
// }

// else {
// message = "The order is accepted, our manager will contact you";
// }
// return message;
// }



// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(100, 250);
// checkStorage(150, 0);


// task 21
// function isNumberInRange(start, end, number) {
//   const isInRange = (start <= number && number <= end ) ;

//   return isInRange;
// }

// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);



// task 22

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType == 'pro' || subType == 'vip');

//   return canAccessContent;
// }

// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");


// task 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange ;

//   return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);




// task 24

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
  
//   if (totalSpent >= 50000) {
//     discount = 0.1;
    
//   }
//   else if  (totalSpent >= 20000) {
//     discount = 0.05;
//     }
//    else if  (totalSpent >= 5000) {
//       discount = 0.02;

//     }

//     else {
//       discount = 0;
//     }
  

  
//   return discount;
// }

// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);


// task 25

// function checkStorage(available, ordered) {
//   let message;
//   message = ordered > available ? "Not enough goods in stock!": "The order is accepted, our manager will contact you";
// ;
  
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// task 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
  
// message = password == "jqueryismyjam" ? "Access is allowed": "Access denied, wrong password!"
  
//   return message;
// }
// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// checkPassword("r3actsux");


// task 27
// function getSubscriptionPrice(type) {
//   let price;
  

//  switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }

  
//   return price;
// }



// task 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
  // Change code below this line

  // if (password === null) {
  //   message = "Canceled by user!";
  // } else if (password === ADMIN_PASSWORD) {
  //   message = "Welcome!";
  // } else {
  //   message = "Access denied, wrong password!";
  // }


//   switch (password) {
//     case 'jqueryismyjam':
//     message = "Welcome!";
//     break;

//     case null:
//     message = "Canceled by user!";
//     break;


//     default:
//     message = "Access denied, wrong password!"

//   }

  // Change code above this line
//   return message;
// }


// task 29
// function getShippingCost(country) {
//   let message;
  
//   switch (country) {

//     case 'China':
//     message = 'Shipping to China will cost 100 credits';
//     break;

//     case 'Chile':
//     message = 'Shipping to Chile will cost 250 credits';
//     break;

//     case 'Australia':
//     message = 'Shipping to Australia will cost 170 credits';
//     break;

//     case 'Jamaica':
//     message = 'Shipping to Jamaica will cost 120 credits';
//     break;

//     default:
//     message = "Sorry, there is no delivery to your country";
//   }

  
//   return message;
// }

// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");

// task 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   return message;
// }

// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");

// task 31
// const courseTopic = "JavaScript essentials";
// Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];
// Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);




// task 32

// function getSubstring(string, length) {
//   const substring = string.slice(string, length);; // Change this line

//   return substring;
// }

// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);



// task 33
// function formatMessage(message, maxLength) {
//   let result;
  // Change code below this line
// if (message.length <= maxLength) {
//   result = `${message}`;
//   }



// else
// {
//   result = message.slice(0, maxLength) + "...";
// }

// console.log(result);

  /// Change code above this line
//   return result;
// }

// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);



// task 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line
// console.log(normalizedInput)
//   return normalizedInput;
  
// }


// normalizeInput("Hello world");
// normalizeInput("This ISN'T SpaM");
// normalizeInput("Big SALE");



// task 35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name);
//   return result;
// }


// task 36
// function checkForSpam(message) {
//   let result;
//   const messageTol = message.toLowerCase()
  
// if (result = messageTol.includes("spam")) {
//   result = true;
// }

// else if (result = messageTol.includes("sale")){
//   result = true;
// }
// else {
//   result = false;
//   }
  
//   return result;
// }

// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");

