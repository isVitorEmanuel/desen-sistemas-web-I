const validatedInput = (nameField, ageField, courseField) => {
    const nameValidity = nameField.validity;
    const ageValidity = ageField.validity;
    const courseValidity = courseField.validity;
    
    // TODO: 
    if (nameValidity.valueMissing) {
        console.log("Preecha o Campo de Nome!");
        return false;
    }

    // TODO: 
    if (courseValidity.valueMissing) {
        console.log("Preencha o Campo de Curso!");
        return false;
    }

    // TODO: 
    if (false) {
        console.log("Preencha corretamente o campo de idade!")
        return false;
    } 
    
    return true;
};

export default validatedInput;