//Given an object with items and quantity, generate a legible shopping list

const shoppingList = {
  apples: 5,
  bananas: 3,
  oranges: 2,
  beans: 1,
  eggs: 6,
};

const generateLegibleShoppingList = (obj) => {
  for (const item in obj) {
    console.log(`Item: ${item}: Quantity: ${obj[item]}`);
  }
};

generateLegibleShoppingList(shoppingList);
