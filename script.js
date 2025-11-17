const form = document.getElementById("form-tarefa");
const input = document.getElementById("entrada");
const lista = document.getElementById("lista");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = input.value.trim();
    if (!texto) return;

    const li = document.createElement("li");
    li.textContent = texto;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = 'Remover'
    btnRemover.style.marginLeft = '10px';

    li.appendChild(btnRemover);
    lista.appendChild(li);

    input.value = ''



})


lista.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.stopPropagation();
        e.target.closest('li')?.remove();
        return;
    }

    const li = e.target.closest("li");
    if (li) {
        li.classList.toggle('feito')
    }
})