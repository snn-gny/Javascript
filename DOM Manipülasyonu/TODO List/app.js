// app.js

document.addEventListener("DOMContentLoaded", function () {
    var tasksData = [
        { name: "Görev 1" },
        { name: "Görev 2" },
        // ... diğer görevler
    ];

    function renderTasks(tasks) {
        var todoList = document.querySelector(".list-group");
        todoList.innerHTML = "";

        tasks.forEach(function (task) {
            var listItem = document.createElement("li");
            listItem.className = "list-group-item d-flex justify-content-between";

            var span = document.createElement("span");
            span.textContent = task.name;

            var actionsDiv = document.createElement("div");
            actionsDiv.innerHTML = `
                <a href="#" class="delete-item" title="Delete Task">
                    <i class="fa fa-remove"></i>
                </a>
                <a href="#" class="edit-item" 
                   data-toggle="modal" 
                   data-target="#editTaskModal" 
                   data-task="${JSON.stringify(task)}" 
                   title="Edit Task">
                    <i class="fa fa-edit"></i>
                </a>
            `;

            listItem.appendChild(span);
            listItem.appendChild(actionsDiv);
            todoList.appendChild(listItem);
        });
    }

    function updateTasks(tasks) {
        var $taskList = $('.list-group');
        $taskList.empty();

        tasks.forEach(function (task) {
            $taskList.append('<li class="list-group-item d-flex justify-content-between">' + task.name + '<a href="#" class="delete-item"><i class="fa fa-remove"></i></a></li>');
        });
    }

    function loadTasks() {
        $.get('/', function (data) {
            updateTasks(data);
        });
    }

    // Sayfa yüklendiğinde görevleri yükle
    loadTasks();

    // Todo ekleme
    $('#todo-form').submit(function (e) {
        e.preventDefault();
        var todoText = $('#todo').val();
        if (todoText) {
            $.post('/add', { todo: todoText }, function () {
                loadTasks();
            });
        }
    });

    // Todo silme
    $(document).on('click', '.delete-item', function (e) {
        e.preventDefault();
        var taskIndex = $(this).closest('li').index();
        $.get('/delete/' + taskIndex, function () {
            loadTasks();
        });
    });

    // Tüm taskları temizleme
    $('#clear-todos').click(function (e) {
        e.preventDefault();
        $.get('/clear', function () {
            loadTasks();
        });
    });

    // Todo filtreleme
    $('#filter').keyup(function () {
        var keyword = $(this).val();
        $.get('/api/filter/' + keyword, function (data) {
            updateTasks(data);
        });
    });
});
