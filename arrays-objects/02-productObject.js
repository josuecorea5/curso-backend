//Create a product object and calculate the total price of the product

const computer = {
  brand: "HP",
  model: "Envy",
  price: 1000,
  quantity: 3,
  total: function () {
    return this.price * this.quantity;
  },
};

const cellphone = {
  brand: "Samsung",
  model: "Galaxy",
  price: 500,
  quantity: 2,
  total: function () {
    return this.price * this.quantity;
  },
};

const totalCost = computer.total() + cellphone.total();

console.log(totalCost);
