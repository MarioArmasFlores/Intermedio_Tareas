window.addEventListener('load', function () {
  const _name = document.getElementById("usuario");
  const _date = document.getElementById("fecha-ven");
  const _title = document.getElementById("titulo");
  const _description = document.getElementById("contenido");
  const _lists = document.querySelectorAll(".list");
  const _button = document.getElementById("btn-crearTarea");
  const en_progreso = document.getElementById("en-progreso");
  const _completado = document.getElementById("completado");

  let selected;

  // Cargar tareas del local storage si existen
  loadTasksFromLocalStorage();

  // Evento click en el botón crear
  _button.addEventListener("click", (e) => {
    e.preventDefault();

    // Tomamos el valor de los elementos y los guardamos en variables
    const date = _date.value;
    const nameUser = _name.value;
    const titleUser = _title.value;
    const description = _description.value;

    // Guardamos en el local storage
    saveTaskToLocalStorage(nameUser, date, titleUser, description);

    // Creamos los elementos que serán introducidos en el nuevo div de la lista
    const h4 = document.createElement("h4");
    const h_4 = document.createElement("h4");
    const f = document.createElement("p");
    const p = document.createElement("p");

    // Asignamos un contenido a cada elemento creado en el paso anterior
    h4.textContent = 'Nombre: ' + nameUser;
    f.textContent = 'Fecha: ' + date;
    h_4.textContent = 'Titulo: ' + titleUser;
    p.textContent = 'Descripcion: ' + description;

    // Creamos el div que contendrá los elementos anteriores, le asignamos una clase y un id
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add("list-item");
    nuevoDiv.id = "draggable";
    nuevoDiv.draggable = true;

    // Agregamos los elementos creados como hijos del nuevo div
    nuevoDiv.appendChild(h4);
    nuevoDiv.appendChild(f);
    nuevoDiv.appendChild(h_4);
    nuevoDiv.appendChild(p);
    nuevoDiv.appendChild(btn_delete()); // Aquí agregamos el botón creado más abajo

    // Permitimos editar cada elemento del div con un evento click
    h4.addEventListener("click", () => {
      const newUserName = prompt("Ingresa el nuevo nombre.");
      h4.textContent = 'Nombre: ' + newUserName;
      updateTaskInLocalStorage(nuevoDiv.id, "name", newUserName);
    });

    h_4.addEventListener("click", () => {
      const newTitleUser = prompt("Ingresa el nuevo título.");
      h_4.textContent = 'Título: ' + newTitleUser;
      updateTaskInLocalStorage(nuevoDiv.id, "title", newTitleUser);
    });

    p.addEventListener("click", () => {
      const newDescription = prompt("Descripción nueva.");
      p.textContent = 'Descripción: ' + newDescription;
      updateTaskInLocalStorage(nuevoDiv.id, "description", newDescription);
    });

    // Permite arrastrar y soltar los elementos en las listas
    _lists.forEach(list => {
      list.addEventListener("dragstart", (e) => {
        selected = e.target;
      });

      list.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      list.addEventListener("drop", (e) => {
        list.appendChild(selected);
        selected = null;
      });
    });

    _lists[0].appendChild(nuevoDiv);
  });

  function saveTaskToLocalStorage(name, date, title, description) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = {
      id: "task-" + Date.now(),
      name: name,
      date: date,
      title: title,
      description: description
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
      const { id, name, date, title, description } = task;
      const h4 = document.createElement("h4");
      const h_4 = document.createElement("h4");
      const f = document.createElement("p");
      const p = document.createElement("p");

      h4.textContent = 'Nombre: ' + name;
      f.textContent = 'Fecha: ' + date;
      h_4.textContent = 'Titulo: ' + title;
      p.textContent = 'Descripcion: ' + description;

      const nuevoDiv = document.createElement('div');
      nuevoDiv.classList.add("list-item");
      nuevoDiv.id = id;
      nuevoDiv.draggable = true;

      nuevoDiv.appendChild(h4);
      nuevoDiv.appendChild(f);
      nuevoDiv.appendChild(h_4);
      nuevoDiv.appendChild(p);
      nuevoDiv.appendChild(btn_delete());

      h4.addEventListener("click", () => {
        const newUserName = prompt("Ingresa el nuevo nombre.");
        h4.textContent = 'Nombre: ' + newUserName;
        updateTaskInLocalStorage(id, "name", newUserName);
      });

      h_4.addEventListener("click", () => {
        const newTitleUser = prompt("Ingresa el nuevo título.");
        h_4.textContent = 'Título: ' + newTitleUser;
        updateTaskInLocalStorage(id, "title", newTitleUser);
      });

      p.addEventListener("click", () => {
        const newDescription = prompt("Descripción nueva.");
        p.textContent = 'Descripción: ' + newDescription;
        updateTaskInLocalStorage(id, "description", newDescription);
      });

      _lists[0].appendChild(nuevoDiv);
    });
  }

  function updateTaskInLocalStorage(taskId, field, value) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex][field] = value;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  function btn_delete() {
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.classList.add("custom-button");

    btn.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      item.remove();
      const taskId = item.id;
      deleteTaskFromLocalStorage(taskId);
    });

    return btn;
  }

  function deleteTaskFromLocalStorage(taskId) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
});
