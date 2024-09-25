let fieldCount = 1;

document.getElementById('addField').addEventListener('click', function() {
    fieldCount++;
    const newField = document.createElement('div');
    newField.className = 'form-group';
    newField.innerHTML = `
        <label for="field${fieldCount}">Field ${fieldCount}:</label>
        <input type="text" id="field${fieldCount}" name="field${fieldCount}">
        <button type="button" class="btn btn-remove" onclick="removeField(this)">Remove</button>
    `;
    document.getElementById('formFields').appendChild(newField);
});

function removeField(button) {
    button.parentElement.remove();
}

document.getElementById('dynamicForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    let output = '';
    for (let [name, value] of formData) {
        output += `${name}: ${value}\n`;
    }
    alert('Form Data:\n' + output);
});
