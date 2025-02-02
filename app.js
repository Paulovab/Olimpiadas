
function pesquisar(){
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == ""){
        section.innerHTML = "<h1>Nenhum atleta foi encontrado</h1>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ""

    // Itera sobre cada dado da pesquisa
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Cria um novo elemento div para cada resultado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ) {
            resultados += 
                `<div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}
                    </p>
                    <a href="${dado.link}" target="_blank">Mais Informações</a>          
                </div>`
        }
    }   
    if(!resultados){
        resultados = "<h1>Nenhum atleta foi encontrado</h1>"
    }     
    section.innerHTML = resultados
}
