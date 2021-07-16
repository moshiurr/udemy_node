const name = "Alif";

const user = {
    name,
    age: 20
}

console.log(user)

const product = {
    label: 'Blue glass on the sky',
    price: 15,
    stock: 30,
    salePrice: undefined,
    rating: 2.5 
}

const {price, stock:productStock, label, rating=5} = product // rating = 5 serve as a defult value if rating is not defined in the object
// stock:productStock is to create a different name for stock variable
console.log(price, productStock,label,rating);

