// Tüm Elementleri Seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");
const firstCardBdy = document.querySelectorAll(".card-body")[0];
const secondCardBdy = document.querySelectorAll(".card-body")[1];
// Event Listenerları Tanımlama
eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  form.addEventListener("submit", addToDo);
  todoList.addEventListener("click", deleteOrEditTodo);
  clearButton.addEventListener("click", clearAllTodos);

  if (filter) {
    filter.addEventListener("keyup", filterTodos);
    filter.addEventListener("input", filterTodos);
  }
}

// Tüm Todoların Silinmesi
function clearAllTodos(e) {
  if (confirm("Tümünü silmek istediğinizden emin misiniz?")) {
    while (todoList.firstElementChild != null) {
      todoList.removeChild(todoList.firstElementChild);
    }
    localStorage.removeItem("todos");
  }
}

// Todo'ların Filtrelenmesi
function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      listItem.setAttribute("style", "display:none !important");
    } else {
      listItem.setAttribute("style", "display:block");
    }
  });
}

// Düzenleme veya Silme İşlemi
function deleteTodoFromStorage(deleteTodo) {
  let todos = getTodosStorage();

  todos = todos.filter(todo => todo !== deleteTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function editTodoInStorage(oldTodo, editedTodo) {
  let todos = getTodosStorage();

  todos = todos.map(todo => (todo === oldTodo ? editedTodo : todo));

  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteOrEditTodo(e) {
  if (e.target.classList.contains("fa-remove")) {
    // Silme işlemi
    const todoText = e.target.parentElement.parentElement.textContent.trim();
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(todoText);
    showAlert("success", "Todo başarılı bir şekilde silindi.");
  } else if (e.target.classList.contains("fa-edit")) {
    // Düzenleme işlemi
    const listItem = e.target.parentElement.parentElement;
    const textNode = listItem.firstChild;
    const editedTodo = prompt("Todo'yu düzenleyin:", textNode.textContent.trim());
    
    if (editedTodo !== null) {
      editTodoInUI(listItem, editedTodo);
      editTodoInStorage(textNode.textContent, editedTodo);
      showAlert("success", "Todo başarılı bir şekilde düzenlendi.");
    }
  }
}

// UI'da Todo Düzenleme
function editTodoInUI(todoElement, editedTodo) {
  const textNode = todoElement.firstChild;
  textNode.textContent = editedTodo;
}

// Sayfa Yüklendiğinde Todo'ların UI'a Eklenmesi
function loadAllTodosToUI() {
  let todos = getTodosStorage();
  todos.forEach(function (todo) {
    addToDoToUI(todo);
  });
}

// Yeni Todo Eklenmesi
function addToDo(e) {
  const newTodo = todoInput.value.trim();

  if (newTodo === "") {
    showAlert("danger", "Lütfen bir Todo giriniz...");
  } else if (isTodoAlreadyExists(newTodo)) {
    showAlert("warning", "Aynı isimde bir Todo girmiştiniz...");
  } else {
    showAlert("success", "Todo başarıyla eklendi");
    addToDoToUI(newTodo);
    addToDoToStorage(newTodo);
  }

  e.preventDefault();
}

// Todo'nun Zaten Var Olup Olmadığını Kontrol Etme
function isTodoAlreadyExists(newTodo) {
  const todos = getTodosStorage();
  return todos.includes(newTodo);
}

// Storage'dan Todo Listesini Alma
function getTodosStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

// Yeni Todo'yu Storage'a Eklemek
function addToDoToStorage(newTodo) {
  let todos = getTodosStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Alert Oluşturma ve Ekleme
function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  firstCardBdy.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 1000);
}

// UI'ya Todo Eklemek
function addToDoToUI(newTodo) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item edit-item";

  // Silme ikonu oluşturma
  const deleteIcon = document.createElement("i");
  deleteIcon.className = 'fa fa-remove';
  deleteIcon.style.marginRight = '10px';

  // Düzenleme ikonu oluşturma
  const editIcon = document.createElement("i");
  editIcon.className = 'fa fa-edit';
  editIcon.style.marginLeft = '10px';

  link.appendChild(deleteIcon);
  link.appendChild(document.createTextNode(" "));
  link.appendChild(editIcon);

  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  todoList.appendChild(listItem);
  todoInput.value = "";
}