const input = document.querySelector("#phone-input");

input.addEventListener("input", (e) => {
    let inputValue = e.target.value.replace(/\D/g, ""); 

   
    if (inputValue.length > 3 && inputValue.length <= 6) {
        inputValue = `+(${inputValue.substring(0, 3)})-${inputValue.substring(3)}`;
    } else if (inputValue.length > 6) {
        inputValue = `+(${inputValue.substring(0, 3)})-${inputValue.substring(3, 6)}-${inputValue.substring(6, 10)}`;
    } else if (inputValue.length <= 3) {
        inputValue = `+(${inputValue}`;
    }

    e.target.value = inputValue;
});