// Select the form and expense list elements by their IDs
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

/**
 * Event listener for form submission
 * This function handles the addition of new expenses to the list
 */
expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Get input values from the form fields
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value.trim();

    // Validate input fields
    if (description && category && !isNaN(amount) && amount > 0) {
        // Create a new row for the expense
        const newRow = document.createElement('tr');
        
        // Populate the new row with expense details
        newRow.innerHTML = `
            <td>${description}</td>
            <td>${category.charAt(0).toUpperCase() + category.slice(1)}</td>
            <td>₹${parseFloat(amount).toFixed(2)}</td>
        `;

        // Append the new row to the expense list table body
        expenseList.appendChild(newRow);

        // Reset the form fields after successful submission
        expenseForm.reset();
    } else {
        // Display an alert if any input is invalid
        alert('Please enter valid values for all fields');
    }
});

/**
 * TODO: Consider adding the following features to enhance functionality:
 * 1. Implement local storage to persist expenses across page reloads
 * 2. Add a feature to edit or delete existing expenses
 * 3. Implement a total sum calculation for all expenses
 * 4. Add date input for each expense and sort functionality
 */
