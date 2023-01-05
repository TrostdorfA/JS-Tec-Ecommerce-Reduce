// const btnCart = document.querySelector(".container-cart-icon")
// const containerCartProducts = document.querySelector(".container-cart-products")

// btnCart.addEventListener("click", () => {
//   containerCartProducts.classList.toggle("active")
// })

// /* ========================= */
// const cartInfo = document.querySelector(".cart-products")
// const rowProduct = document.querySelector(".row-product")

// // Lista de todos los contenedores de productos
// const productsList = document.querySelector("container-items")

// // Variable de arreglos de productos
// let allProducts = []

// const valorTotal = document.querySelector(".total-pagar")

// const countProducts = document.querySelector("#contador-productos")

// const cartEmpty = document.querySelector(".cart-empty")
// const cartTotal = document.querySelector(".cart-total")

// productsList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn-add-cart")) {
//     const product = e.target.parentElement

//     const infoProduct = {
//       quantity: 1,
//       title: product.querySelector("h2").textContent,
//       price: product.querySelector(".p").textContent,
//     }

//     const exists = allProducts.some(
//       (product) => product.title === infoProduct.title
//     )

//     if (exists) {
//       const products = allProducts.map((product) => {
//         if (product.title === infoProduct.title) {
//           product.quantity++
//           return product
//         } else {
//           return product
//         }
//       })
//       allProducts = [...products]
//     } else {
//       allProducts = [...allProducts, infoProduct]
//     }

//     cartInfo.innerHTML = ""
//     allProducts.forEach((product) => {
//       cartInfo.innerHTML += `
//             <div class="row-product">
//                 <div class="col-product">
//                     <h2>${product.title}</h2>
//                     <p class="p">${product.price}</p>
//                 </div>
//                 <div class="col-product">
//                     <p class="p">Cantidad: ${product.quantity}</p>
//                 </div>
//             </div>
//             `
//     })
//   }
// })

// Probando reduce:

const numbers = [10, 25]

const result = numbers.reduce((acumulado, valorActual, indice, Array) => {
  console.log("acumulado", acumulado)
  console.log("valorActual", valorActual)
  console.log("indice", indice)
  console.log("Array", Array)
  return acumulado + valorActual
})
console.log(result)

const productsReduce = [
  { name: "Coca Cola", price: 10, quantity: 2 },
  { name: "Pepsi", price: 15, quantity: 1 },
  { name: "Fanta", price: 20, quantity: 3 },
]

const totalPrice = productsReduce.reduce((acumulado, product) => {
  console.log("acumulado", acumulado)
  console.log("product", product)
  const totalIterated = acumulado + product.price * product.quantity
  console.log("totalIterated", totalIterated)

  return totalIterated
}, 0)

console.log(totalPrice)

const users = [
  { id: 1, name: "Juan", age: 25 },
  { id: 2, name: "Pedro", age: 30 },
  { id: 3, name: "Pablo", age: 35 },
]

const newUsers = [
  { id: 4, name: "Faby", age: 14 },
  { id: 5, name: "Luis", age: 18 },
  { id: 2, name: "Luisa", age: 20 },
]

const userResult = newUsers.reduce((acumulado, newUser) => {
  const existingUser = acumulado.find((user) => user.id === newUser.id)
  if (!existingUser) {
    acumulado.push(newUser)
  }
  return acumulado
}, users)

console.log("userResult", userResult)
