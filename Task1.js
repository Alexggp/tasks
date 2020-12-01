const products = [
  {
    number: 1,
    price: 100,
    name: 'Orange juice'
  },
  {
    number: 2,
    price: 200,
    name: 'Soda'
  },
  {
    number: 3,
    price: 150,
    name: 'Chocolate snack'
  },
  {
    number: 4,
    price: 250,
    name: 'Cookies'
  },
  {
    number: 5,
    price: 180,
    name: 'Gummy bears'
  },
  {
    number: 6,
    price: 500,
    name: 'Condoms'
  },
  {
    number: 7,
    price: 120,
    name: 'Crackers'
  },
  {
    number: 8,
    price: 220,
    name: 'Potato chips'
  },
  {
    number: 9,
    price: 80,
    name: 'Small snack'
  }
]

const coins = [500, 200, 100, 50, 20, 10];

const moneyAmount = parseInt(process.argv.slice(2)[0]);
const productNumber = parseInt(process.argv.slice(2)[1]);

const pickACoin = (money) =>{

  return coins.find((c) => c <= money);
}

const getChange = (money, price) =>{
  let changeAmount = money-price;
  const changeCoins = [];
  if (changeAmount < 0) return "Not enough money";

  while(changeAmount > 0){

    const coin = pickACoin(changeAmount);
    changeAmount = changeAmount - coin;
    changeCoins.push(coin);
  }
  return changeCoins;

}

const vendingMachine = (ma, pn) => { 
  demandedProduct = products.find((product)=>{ return product.number === pn});


  const response = {
    product: demandedProduct.name,
    change: getChange(ma, demandedProduct.price)
  }

  return response
}

console.log(vendingMachine(moneyAmount, productNumber));
