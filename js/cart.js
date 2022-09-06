// ** get the input field values

const getInputFieldValueById = id => {
    const inputValue = document.getElementById(id).value;
    document.getElementById(id).value = ``;

    return inputValue;
};


// ** button handler functionality

const addToCart = ()=>{
    const product = getInputFieldValueById('product-field');
    const quantity = getInputFieldValueById('quantity-field');

    // ** display product and quantity 
    displayCartItems(product,quantity);

    // ** Add to localStorage
    storeValueToLocalStorage(product,quantity);

};

// ** display the product and quantity

const displayCartItems = (product,quantity)=>{
    // ** where to display

    const productsContainer = document.getElementById('display-container');

    const li = document.createElement('li');

    li.innerText = `${product} ${quantity}`;

    productsContainer.appendChild(li)
};

// ** Local Storage Option

// ** step one -> amra cart name a strigyfy object er vitor value hisabe r ekta strigyfy object akare "cart":{"product":"quantity"} ei vabe data loaalStorage a rakhbo

// ** First a dekhet hobe age theke kono cart namer item LocalStorage a ase kina

const getCartFromLocalStorage = ()=>{

    const savedCart = localStorage.getItem('cart'); // this retunrs a stringfy obj like thing

    const savedCartObject = JSON.parse(savedCart);

    let cart = {};

    savedCartObject && (cart = savedCartObject); // jodi object thake tahole take cart a assign kore pathay dibo r na thakle khali cart object ta pathay dibo

    return cart;

};

// ** save product and quantity to the localStorage

const storeValueToLocalStorage = (product,quantity)=>{
    // ** get any thing if priviously stored

    const cart = getCartFromLocalStorage();
    // ** here we'll set the cart object to set as the value of cart property

    cart[product] = quantity;

    // ** now make the cart object to strigyfy obj like

    const cartStringfy = JSON.stringify(cart);

    // ** Now we'll set the cart value in loaalStorage as cartStringfy

    localStorage.setItem('cart', cartStringfy);
};

// ** Display saved cart from localStorage

