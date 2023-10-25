// tum elementleri secme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelector(".card-body1");
const secondCardBody = document.querySelector(".card-body2");
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

/* ---------------------------------------
   butun todo'lari temizleme
   --------------------------------------- */
function clearAllTodos(e) {
  if (confirm("tumunu silmek istediginize eminmisiniz?"))
    while (todoList.firstElementChild) {
      deleteTodoFromStorage(todoList.firstElementChild.textContent);
      todoList.removeChild(todoList.firstElementChild);
    }
}

/* ---------------------------------------
   todo'lari filtreleme
   --------------------------------------- */
function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1)
      listItem.setAttribute("style", "display : none !important");
    else listItem.setAttribute("style", "display : block");
  });
}

/* ---------------------------------------
   sayfa yuklendiginde todo'lari ekleyecek
   --------------------------------------- */
function loadAllTodosToUI() {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

/* -----------------------------------------
   basarili / basarisiz alertleri bastiracak
   ----------------------------------------- */
function showAlert(type, message) {
  /* <div class="alert alert-danger" role="alert">
       A simple danger alert—check it out!
       </div>; */
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;

  firstCardBody.appendChild(alert);
  setTimeout(function () {
    alert.remove();
  }, 1500);
}

/* ------------------------------------------------
    storagede todo var mi yok mu bunu kontrol edecek
    ------------------------------------------------ */
function getTodosFromStorage() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

/* -----------------------------
   todo'lari storageye ekleyecek
   ----------------------------- */
function addTodoToStorage(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
}

/* -------------------------------------------------------
   aldigi string degerini UI'ya list item olarak ekleyecek
   ------------------------------------------------------- */
function addTodoToUI(newTodo) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class='fa fa-remove'></i>";
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todoList.appendChild(listItem);

  todoInput.value = "";
}

/* ---------------------------
   todo'yu storage'den silecek
   --------------------------- */
function deleteTodoFromStorage(deleteTodo) {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (todo === deleteTodo) {
      todos.splice(index, 1);
      // arrayden deger silmek icin splice fonksiyonu kullanilir
    }
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

/* --------------------------
   todo'yu arayuz'den silecek
   -------------------------- */
function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    showAlert("success", "todo basariyla silindi");
  }
}

/* ------------------------------------------------
   todo kontrolu yapip tekrar etmesini engelleyecek
   ------------------------------------------------ */
function todoControl(newTodo) {
  let flag = false;
  let todoLists = getTodosFromStorage();
  todoLists.forEach((e) => {
    if (e === newTodo) {
      flag = true;
    }
  });
  return flag;
}

/* ----------------------------------------------
   todo girdisini kontrol edecek & todo ekleyecek
   ---------------------------------------------- */
function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    showAlert("danger", "lutfen bir todo girin");
  } else if (todoControl(newTodo)) {
    showAlert("danger", "bu todo daha once girildi");
    todoInput.value = "";
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success", "todo eklendi");
  }

  e.preventDefault();
}

function eventListeners() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  secondCardBody.addEventListener("click", deleteTodo);
  filter.addEventListener("keyup", filterTodos);
  clearButton.addEventListener("click", clearAllTodos);
}
