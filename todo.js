let addTodoBtn = document.getElementById('add-todo-btn');
addTodoBtn.addEventListener('click', addTodo);

let todoUl = document.querySelector('#todos ul');

function addTodo() {
    let title = document.getElementById('todo').value;
    let completed = false;

    let todoData = {
        title,
        completed,
    };

    let url = `https://jsonplaceholder.typicode.com/todos`;

    let options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(todoData),
    };

    fetch(url, options)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
        });

    showTodos();
}

function showTodos() {
    todoUl.innerHTML = null;

    fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => response.json())
        .then((results) => {
            let todosUser1 = results.filter((result) => result.userId === 1);

            console.log(todosUser1);

            todosUser1.forEach((todo) => {
                let todoLi = document.createElement('li');
                let todoText = document.createTextNode(todo.title);
                todoLi.appendChild(todoText);

                let deleteBtn = document.createElement('button');
                let deleteText = document.createTextNode('delete');
                deleteBtn.appendChild(deleteText);
                deleteBtn.addEventListener('click', function () {
                    deleteTodo(todo.id);
                });

                todoLi.appendChild(deleteBtn);

                todoUl.appendChild(todoLi);
            });
        });
}

function deleteTodo(id) {
    let url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    let options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
    };

    fetch(url, options)
        .then((response) => {
            console.log(response);
            response.json();
        })
        .then((result) => {
            // console.log(result);
            // alert(`todo dengan id ${result.id} sudah dihapus`))
        })
        .catch((error) => console.error(error));
}

function logout() {
    localStorage.removeItem('user');
    window.location.replace('./index.html');
}
