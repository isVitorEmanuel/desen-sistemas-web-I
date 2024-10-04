let interval = null;
let fbackContainer = document.querySelector('#feedback');

/**
 * This function set a timeout to clear the feedback's message.
 */
const timeOut = () => {
    clearTimeout(interval);

    interval = setTimeout(() => {
        fbackContainer.textContent = '';
    }, 4000);
};

const validatedInput = (nameField, ageField, courseField) => {
    const nameValidity = nameField.validity;
    const ageValidity = ageField.validity;
    const courseValidity = courseField.validity;
    
    if (nameValidity.valueMissing) {
        fbackContainer.textContent = "campo nome é obrigatório!"
        timeOut();
        return false;
    }
    
    if (ageValidity) {
        if (ageField.validity.valueMissing) {
            fbackContainer.textContent = "campo idade é obrigatório!"
        } else if (ageField.validity.rangeUnderflow) {
            fbackContainer.textContent = "idade deve ser maior que 13!"
        } else if (ageField.validity.rangeOverflow) {
            fbackContainer.textContent = "idade deve ser menor que 120!"
        }
        timeOut();
        return false;
    } 
    
    if (courseValidity.valueMissing) {
        fbackContainer.textContent = "campo curso é obrigatório!"
        timeOut();
        return false;
    }
    
    return true;
};

export default validatedInput;