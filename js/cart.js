// ** get the input field values

const getInputFieldValueById = id => {
    const inputValue = document.getElementById(id).value;
    document.getElementById(id).value = ``;

    return inputValue;
};


// ** button handler functionality