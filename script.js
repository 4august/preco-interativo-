let priceValue = document.querySelector("h3")
let input = document.querySelector("#price")
let check = document.querySelector("input[type='checkbox']")

const monthly = "/monthly";
const yearly = "/yearly";

input.addEventListener("mousemove", () => {
    priceValue.innerHTML = `$${parseInt(input.value).toFixed(2)} <span>${!check.checked ? monthly : yearly}</span>`
})