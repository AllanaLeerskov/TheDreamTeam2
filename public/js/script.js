// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Laceybabe#10213!",
//   database: "random_shit"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM Products", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "UPDATE Products SET id = '${id}' WHERE id = '${id}'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
//   });

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO Products (id, title, product_id, price, description, rating) VALUES ('${id}', '${title}', '${product_id}', '${price}', '${description}', ${rating}')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });

//   con.connect(function(err) {
//     if (err) throw err;
//     var sql = "UPDATE customers Products title = '${title}' WHERE title = '${title}'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
//   });
//function getProducts() {
//   db.collection("Products").get().then((querySnapshot) => {
//        let Products = [];
//        querySnapshot.forEach((doc) => {
//            Products.push({
//                id: doc.id,
//                title: doc.data().title,
//                product_id: doc.data().product_id,
//                price: doc.data().price,
//                description: doc.data().description,
//                id: doc.data().id,
//                rating: doc.data().rating
//            })
//        });
//        generateProducts(Products)
//    });    
//}

//function addToCart(Product) {  
//   let cartProduct = db.collection('cart-products').doc(Product.id);
//   cartProduct.get()
//   .then(function(doc) {
//      if(doc.exists) {
//           cartProduct.update( {
//               quantity: doc.data().quantity + 1
//           })
//       } else { 
//            cartProduct.set({
//                photo: Product.photo,
//                title: Product.title,
//                description: Product.description,
//                price: Product.price,
//               quantity : 1
//          })
    
  
//}

//})

//function generateProducts(Products) {
//    let ProductsHTML = ""
//    Products.forEach((Products) => {
//        let doc = document.createElement('div');
//        doc.classList.add('main-product', 'mr-5');
//        doc.innerHTML = `
//            <div class="product-image w-48 h-52 bg-pink-400 rounded-lg p-4">
//                <img class="w-full h-full object-contain" src="${Products.photo}">

//            </div>
//            <div class="product-name text-black font-bold mt-2 text-sm">
//                ${Products.title}

//            </div>
//            <div class="product-make text-black font-bold">
//                ${Products.desripton}

//            </div>
//            <div class="product-rating text-yellow-400 font-bold my-1">
//                <i class="fa-solid fa-star"></i>
//                <i class="fa-solid fa-star"></i>
//                <i class="fa-solid fa-star"></i>
//                <i class="fa-solid fa-star"></i>
//                <i class="fa-solid fa-star"></i>
//                    ${Products.rating}
//            </div>
//            <div class="product-price font-bold text-black text-lg">
//                ${Products.price}
//            </div>
//            <div class="add-to-cart h-8 w-28 bg-lime-500 flex items-center justify-center text-white rounded text-md cursor-pointer hover:bg-lime-600">
//                Add to cart
//            </div>
//        
//        `
//        ProductsHTML += `
//            <div class="main-product mr-5">
//                <div class="product-image w-48 h-52 bg-pink-400 rounded-lg p-4">
//                    <img class="w-full h-full object-contain" src="${Products.photo}">

//                </div>
//                <div class="product-name text-black font-bold mt-2 text-sm">
//                    ${Products.title}

//                </div>
//                <div class="product-make text-black font-bold">
//                    ${Products.desripton}

//                </div>
//                <div class="product-rating text-yellow-400 font-bold my-1">
//                    <i class="fa-solid fa-star"></i>
//                    <i class="fa-solid fa-star"></i>
//                    <i class="fa-solid fa-star"></i>
//                    ${Products.rating}
//                </div>
//                <div class="product-price font-bold text-black text-lg">
//                    ${Products.price}
//                </div>
                
//            </div> 
//            `

//            let  addToCartEl = doc.createElement('div');
//            addToCartEl.classList.add('add-to-cart h-8 w-28 bg-lime-500 flex items-center justify-center text-white rounded text-md cursor-pointer hover:bg-lime-600');
//            addToCartEl.innerText = 'Add to cart';
//            addToCartEl.addEventListener('click', function() {
//                addToCart(Products)
//            })
//            doc.appendChild(addToCartEl);
//            doc.querySelector('.main-section-products').appendChild(doc);
//    })

//    document.querySelector('.main-section-products').innerHTML = ProductsHTML;
    

//getProducts();