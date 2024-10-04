import validatedInput from "./validatedInput.js";

const addButton = document.querySelector("#btn-add");
const tbody = document.querySelector('tbody');


addButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const fieldName = document.querySelector("#name_field");
    const fieldAge = document.querySelector("#age_field");
    const fieldCourse = document.querySelector("#course_field");

    if (validatedInput(fieldName, fieldAge, fieldCourse) == true) {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdAge = document.createElement('td');
        const tdCourse = document.createElement('td');
    
        tr.setAttribute('class', 'row-table');
        
        tdName.setAttribute('class', 'column-data');
        tdAge.setAttribute('class', 'column-data');
        tdCourse.setAttribute('class', 'column-data');
        
        tdName.textContent = fieldName.value;
        tdAge.textContent = fieldAge.value;
        tdCourse.textContent = fieldCourse.value;
    
        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdCourse);
    
        tbody.appendChild(tr);

        fieldName.value = '';
        fieldAge.value = '';
        fieldCourse.value = '';
    }
})