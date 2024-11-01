const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    calculate: function (operation, a, b) {
      return this[operation](a, b);
    }
  };
  
  console.log(calculator.calculate.call(calculator, "add", 10, 5));
  console.log(calculator.calculate.apply(calculator, ["multiply", 4, 3]));
  
  const discountCalculator = {
    discount: 0.1,
    applyDiscount: function (price) {
      return price - price * this.discount;
    }
  };
  
  const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
  console.log(calculateDiscount(100));
  