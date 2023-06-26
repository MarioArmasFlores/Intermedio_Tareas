const input_title = document.getElementById("input_title");
const input_content = document.getElementById("input_content");
const btn_add = document.getElementById("btn-add");
const ul = document.getElementById("lista");
const empty = document.getElementById("empty");


window.addEventListener("load", () => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        ul.innerHTML = savedNotes;

        const deleteButtons = ul.getElementsByClassName("btn-delete");
        Array.from(deleteButtons).forEach((button) => {
            button.addEventListener("click", (e) => {
                const item = e.target.parentElement;
                ul.removeChild(item);
                saveNotes();
            });
        });
    }
});

btn_add.addEventListener("click", (e) => {
    e.preventDefault();
    const titulo = input_title.value;
    const content = input_content.value;

    const li = document.createElement('li');
    const p = document.createElement('p');

    li.textContent = 'Titulo: ' + titulo;
    p.textContent = content;

    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(addDeleteBtn());

    saveNotes();

})

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        saveNotes();
    })
    return deleteBtn;


}

function saveNotes() {
    const notes = ul.innerHTML;
    localStorage.setItem("notes", notes);
}








































/* const text_title = input_title.value;
    const text_cont = input_content.value;

    const li = document.createElement('li');
    const p = document. createElement('p');
    p.textContent = text_title + '<br><br>' + text_cont;

    li.appendChild(p);
    li.appendChild(addDeleteBtn);
    ul.appendChild(li);

    input_content.value = "";
})

function addDeleteBtn() {
    const deleteBtn = document.creatElement('button');
    deleteBtn.textContent = "x";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
    })
    return deleteBtn; */