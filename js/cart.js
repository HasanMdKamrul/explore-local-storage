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
    displayCartItems(product,quantity)

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