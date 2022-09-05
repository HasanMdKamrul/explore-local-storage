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

};

// ** display the product and quantity

const displayCartItems = ()=>{
    // ** where to display
}