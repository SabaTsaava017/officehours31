//1.დავწეროთ ფუნქცია რომელიც მიღებული product_price, sale_percentage
//უკან დააბრუნებს ფასდაკლებულ ფასს და გამოიტანთ p ტეგის შიგნით.

function getSalePrice (product_price,sale_percentage){
    let sale = (product_price * sale_percentage) / 100;
    let salePrice = product_price - sale;
     const price = document.createElement("p");
     price.textContent = salePrice;
    document.body.appendChild(price);


}
getSalePrice(1000,20);

// 2..დავწეროთ ფუნქცია რომელიც არგუმენტად მიღებული (პროდუქტის სახელი, ფასი, შექმნის თარიღი)
// დინამიურად დააგენერირებს html ტეგებს და დახატავს dom ში.

// ინფუთი : [{ name: "Product 1", price: 200, created_at: "01-02-2022" }]
// აუთფუთი:
// <div>
// <div> სახელი: Product 1 <div/>
// <div> ფასი: 200 </div>
// <div> გამოქვეყნების თარიღი: 01-02-2022 </div
// <div/>

const info = [{ name: "Product 1", price: 200, created_at: "01-02-2022" }]

function productName (productInfo){
    productInfo.forEach(object => {
        const div = document.createElement("div");
        document.body.appendChild(div);

        let productName = document.createElement("div");
        productName.innerHTML = `სახელი : ${object.name}`
        div.appendChild(productName);
        productName.classList.add("name");



        let productPrice = document.createElement("div");
        productPrice.innerHTML = `ფასი : ${object.price}`
        div.appendChild(productPrice);
        productPrice.classList.add("price")



        let productData = document.createElement("div");
        productData.innerHTML = `გამოქვეყნების თარიღი : ${object.created_at}`
        div.appendChild(productData);
        productData.classList.add("data")

    });


}
productName(info);


//3.დაწეროთ ფუნქცია რომელიც ღილაკის კლიკზე ცალკე ტაბში გახსნის არგუმენტად მიღებულ url ს
//URL = https://youtube.com/

const button = document.createElement("button")
document.body.appendChild(button);
button.textContent = "click me"
button.addEventListener("click", () => {
    window.open ( "https://youtube.com/")
})
button.classList.add("button")



//5.დავწეროთ ფუნქცია, რომელიც დაგვიბრუნებს არგუმენტად მიღებული ხარჯების ჯამს.
//ინფუთი: [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }]


const costs = [
    { product_id: 1, amount: 200 },
    { product_id: 2, amount: 300 },
    { product_id: 3, amount: 500 }
  ];
  
  const totalCosts = calculateTotalCosts(costs);


  function calculateTotalCosts(costs) {
    let total = 0;
  
    for (let i = 0; i < costs.length; i++) {
      total += costs[i].amount;
    }
  
    return total;
  }

  console.log(totalCosts);