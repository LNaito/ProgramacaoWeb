// Array que armazena todas as tarefas
let tasks = [];

const todoForm = document.getElementById('todo-form');

// Função para adicionar tarefa
todoForm.addEventListener ('submit', function(e){
    e.preventDefault(); 
    const nameInput = document.getElementById('task-name');
    const categoryInput = document.getElementById('task-category');
    const priorityInput = document.getElementById('task-priority');
    const dateInput = document.getElementById('task-date');
    if (!nameInput.value || !dateInput.value) {
        alert("Por favor, preencha o nome e a data da tarefa.");
        return;
    }
    const newTask = {
        id: Date.now(),
        name: nameInput.value,
        category: categoryInput.value,
        priority: priorityInput.value,
        date: dateInput.value,
        completed: false
    };

    tasks.push(newTask);
    nameInput.value = "";
    renderTasks();
});

// Função que exibe as tarefas de acordo
function renderTasks() {
    const container = document.getElementById('tasks-container');
    const filter = document.getElementById('filter-category').value;
    const sort = document.getElementById('sort-order').value;
    document.getElementById('filter-category')
    .addEventListener('change', renderTasks);
    document.getElementById('sort-order')
    .addEventListener('change', renderTasks);
    container.innerHTML = ""; 
    let filteredList = tasks.filter(t => filter === "Todos" || t.category === filter);
    filteredList.sort((a, b) => {
        if (sort === "data") {
            return new Date(a.date) - new Date(b.date);
        } else {
            const peso = { "Alta": 1, "Media": 2, "Baixa": 3 };
            return peso[a.priority] - peso[b.priority];
        }
    });
    filteredList.forEach(task => {
        const card = document.createElement('div');
        card.className = `task-card priority-${task.priority} ${task.completed ? 'completed' : ''}`;
        
        card.innerHTML = `
            <div class="task-info">
                <h4>${task.name}</h4>
                <p><strong>${task.category}</strong> | Limite: ${formatDate(task.date)}</p>
            </div>
            <div class="task-actions">
                <button class="btn-action" onclick="toggleComplete(${task.id})" title="Concluir">✔️</button>
                <button class="btn-action" onclick="deleteTask(${task.id})" title="Excluir">❌</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função que deleta tarefas
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}

// Função que marca completude da tarefa
function toggleComplete(id) {
    const task = tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
    renderTasks();
}

// Função auxiliar para formatar a data
function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}