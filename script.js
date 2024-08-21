document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    addButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <button class="complete">Complete</button>
                    <button class="delete">Delete</button>
                </div>
            `;

            const completeButton = listItem.querySelector('.complete');
            const deleteButton = listItem.querySelector('.delete');

            completeButton.addEventListener('click', () => {
                listItem.classList.toggle('completed'); // เพิ่ม/ลบคลาส 'completed' จาก <li> ทั้งแถว
            });

            deleteButton.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });

            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
