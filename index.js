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