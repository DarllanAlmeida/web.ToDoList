const button = document.querySelector(".button-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-tasks")

let minhaListaDeItens = []

function adicionarNovaTarefa (){
    minhaListaDeItens.push(input.value)

    input.value = ''

    mostrarTarefas()

}

function mostrarTarefas() {
let novaLi = ''


minhaListaDeItens.forEach((tarefas) => {
    novaLi = novaLi +` 
    
            <li class="task">
                <img src="./img/checked.png" alt="">
                <p>${tarefas}</p>
                <img src="./img/trash.png" alt="">
            </li>
    
    `


})

listaCompleta.innerHTML = novaLi


}

button.addEventListener("click", adicionarNovaTarefa)

    

  

    
        

 
        





