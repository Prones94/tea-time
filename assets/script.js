
const itemList = document.getElementById("item-list");
const cartQty = document.getElementById("cart-qty");
const cartTotal = document.getElementById("cart-total");
const addForm = document.getElementById("add-form");
const itemName = document.getElementById("item-name");
const itemPrice = document.getElementById("item-price");
const cart = [];
// -------------------------------------------------------
// Handle changed events on updated input
itemList.onchange = function (e) {
    if (e.target && e.target.classList.contains("update")) {
        const name = e.target.dataset.name;
        const qty = parseInt(e.target.value);
        updateCart(name, qty);
    }
};
// -------------------------------------------------------
// Handle clicked on list
itemList.onclick = function (e) {
    if (e.target && e.target.classList.contains("remove")) {
        const name = e.target.dataset.name;
        removeItem(name);
    } else if (e.target && e.target.classList.contains("add-one")) {
        const name = e.target.dataset.name;
        console.log(name);
        addItem(name);
    } else if (e.target && e.target.classList.contains("remove-one")) {
        const name = e.target.name;
        removeItem(name, 1);
    }
};
// -------------------------------------------------------
// Handle add form
addForm.onsubmit = function (e) {
    e.preventDefault();
    const name = itemName.value;
    const price = itemPrice.value;
    addItem(name, price);
};
// -------------------------------------------------------
// Add item
function addItem(name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1;
            showItem();
            return;
        }
    }
    const item = { name, price, qty: 1 };
    cart.push(item);
    showItem();
}
// -------------------------------------------------------
// Remove item
function removeItem(name, qty = 0) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty > 0) {
                cart[i].qty -= 1;
            }
            if (cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1);
            }
            showItem();
            return;
        }
    }
}
// -------------------------------------------------------
// Updating cart
function updateCart(name, qty) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty < 1) {
                reomveItem(name);
                return;
            }
            cart[i].qty = qty;
            showItem();
            return;
        }
    }
}
// -------------------------------------------------------
// Show items
function showItem() {
    cartQty.innerHTML = `You have ${getQty()} items in your cart.`;
    let itemStr = "";
    for (let i = 0; i < cart.length; i += 1) {
        const { name, price, qty } = cart[i];
        itemStr += `<li> 
                    <span>
                        ${name}: $${price} x ${qty} = $${(qty * price).toFixed(
            2
        )} 
                    </span>
                    <span>
                        <button class="remove" data-name="${name}">Remove</button>
                        <button class="add-one" data-name="${name}">+</button>
                        <button class="remove-one" data-name="${name}">-</button>
                        <input class="update" type="number" data-name="${name}">
                    <span>
                </li>`;
    }
    itemList.innerHTML = itemStr;
    cartTotal.innerHTML = `Total in cart: $${getTotal()}`;
}
// -------------------------------------------------------
// Get Qty
function getQty() {
    let qty = 0;
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty;
    }
    return qty;
}
// -------------------------------------------------------
// Get Total
function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty;
    }
    return total.toFixed(2);
}


function party() {
    // delete everything 
}

window.addEventListener('birthday', party)

function water() {
    //water plants
    return Math.random()
}

window.addEventListener('sunlight', water)


const plantSeeds = function () {

}

water
water()

const wateringCan = water
const canOfWater = water()

wateringCan()

window.addEventListener('spring', plantSeeds)



document.querySelector()

const getElement = document.querySelector

getElement('.box')
