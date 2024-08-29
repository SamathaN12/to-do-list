// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const dateDisplay = document.getElementById('date-display');

     // Function to format the current date and day
     const updateDateDisplay = () => {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = today.toLocaleDateString(undefined, options);
        dateDisplay.textContent = `Today is ${dateString}`;
    };

    // Call the function to set the date and day on page load
    updateDateDisplay();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const todoText = input.value.trim();
        if (todoText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);

        input.value = '';

        li.querySelector('span').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            todoList.removeChild(li);
        });
    });
});
