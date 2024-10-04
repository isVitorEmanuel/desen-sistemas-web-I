let interval = null;
let fbackContainer = document.querySelector('#feedback');

/**
 * This function set a timeout to clear the feedback's message.
 */
const timeOut = () => {
    clearTimeout(interval);

    interval = setTimeout(() => {
        fbackContainer.textContent = '';
        fbackContainer.setAttribute('class', '');
    }, 4000);
};

/**
 * This function validates the input fields provided for name, age, and course.
 * It uses the HTML5 form validation API (the `validity` property) to check if 
 * the fields are filled correctly and within the expected limits.
 * 
 * @param {HTMLInputElement} nameField - Input field for the user's name.
 * @param {HTMLInputElement} ageField - Input field for the user's age.
 * @param {HTMLInputElement} courseField - Input field for the user's course.
 * @returns {boolean} - Returns true if all fields are valid, otherwise false.
 */
const validatedInput = (nameField, ageField, courseField) => {
    const nameValidity = nameField.validity;
    const courseValidity = courseField.validity;
    
    if (nameValidity.valueMissing) {
        nameField.focus();
        fbackContainer.textContent = "campo nome é obrigatório!"
        fbackContainer.setAttribute('class', 'feedback');
        timeOut();
        return false;
    }
    
    if (!ageField.checkValidity()) {
        ageField.focus();
        if (ageField.validity.valueMissing) {
            fbackContainer.textContent = "campo idade é obrigatório!"
        } else if (ageField.validity.rangeUnderflow) {
            fbackContainer.textContent = "idade deve ser maior que 13!"
        } else if (ageField.validity.rangeOverflow) {
            fbackContainer.textContent = "idade deve ser menor que 120!"
        }
        fbackContainer.setAttribute('class', 'feedback');
        timeOut();
        return false;
    } 
    
    if (courseValidity.valueMissing) {
        courseField.focus();
        fbackContainer.textContent = "campo curso é obrigatório!"
        fbackContainer.setAttribute('class', 'feedback');
        timeOut();
        return false;
    }
    
    fbackContainer.textContent = '';
    fbackContainer.setAttribute('class', '');
    return true;
};

export default validatedInput;