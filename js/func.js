const products = [
    { name: "น้ำส้ม", price: 13 },
    { name: "นํ้าแอปเปิล", price: 15 },
    { name: "นํ้ากีวี", price: 22 }
];

const coins = [1, 2, 5, 10];

function calculate() {
    let productSelect = document.getElementById("product").value.split(',');
    let quantity = productSelect.length;
    console.log(productSelect);
    console.log(quantity);
    let coinInput = document.getElementById("coin").value;
    let selectedProduct = products[productSelect[0] - 1];
    console.log(selectedProduct);
    let totalCoins = 0;
    for (let i = 0; i < coinInput.length; i++) {
        if (coinInput[i] === 'a') {
            totalCoins += 1;
        } else if (coinInput[i] === 'b') {
            totalCoins += 5;
        } else if (coinInput[i] === 'c') {
            totalCoins += 10;
        }
    }
    let change = totalCoins - selectedProduct.price * quantity;
    let result = "เงินทอนคือ " + change + " บาท" + "<br>";
    for (let i = coins.length - 1; i >= 0; i--) {
        let coinValue = coins[i];
        if (change >= coinValue) {
            let coinCount = Math.floor(change / coinValue);
            change -= coinCount * coinValue;
            let coinName = coinValue === 1 ? "หนึ่ง" : coinValue === 2 ? "สอง" : coinValue === 5 ? "ห้า" : "สิบ";
            result += "<ul><li>" + "เหรียญ" + coinName + "บาท " + coinValue + "เหรียญ" + "</li></ul>";
        }
    }

    // let b10 = change / 10;
    // let b5 = (change % 10) / 5;
    // let b2 = ((change % 10) % 5) / 2;
    // let b1 = (((change % 10) % 5) % 2) / 1;
    // let result = "เงินทอนคือ " + change + " บาท" + "<br>";
    // result += "<ul><li>" + "เหรียญสิบบาท " + Math.floor(b10) + " เหรียญ" + "</li></ul>";
    // result += "<ul><li>" + "เหรียญห้าบาท " + Math.floor(b5) + " เหรียญ" + "</li></ul>";
    // result += "<ul><li>" + "เหรียญสองบาท " + Math.floor(b2) + " เหรียญ" + "</li></ul>";
    // result += "<ul><li>" + "เหรียญหนึ่งบาท " + Math.floor(b1) + " เหรียญ" + "</li></ul>";

    document.getElementById("result").innerHTML = result.slice(0, -2);
}
