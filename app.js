function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
("campo-pesquisa").value

if (campoPesquisa == "") {
    section.innerHTML = "Nenhum livro foi encontrado"
    return}

    campoPesquisa = campoPesquisa.toLowerCase()
    console.log(campoPesquisa); // Para fins de depuração, verifica se a seção foi encontrada

    // Inicializa uma string vazia para armazenar a marcação HTML dos resultados
    let resultados = "";
    let titulo = "";
    let autor = "";
    let resumo = "";
    let tags = "";

    // Itera sobre cada item de dado (resultado da pesquisa)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        autor = dado.autor.toLowerCase()
        resumo = dado.resumo.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes (campoPesquisa) || autor.includes (campoPesquisa) || resumo.includes (campoPesquisa) || tags.includes (campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="https://s.shopee.com.br/8zmA5B35aH" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta"> ${dado.autor}</p>
                <p>${dado.editora}</p>
                <p>${dado.resumo}</p>
                <a href=${dado.link} target="_blank">Conheça aqui</a>
            </div>
        `;
        }
        console.log(dado.titulo.includes (campoPesquisa))
        // Constrói a marcação HTML para cada item, incluindo:
        // - Um container para o item
        // - Um título com um link para o Shopee
        // - Informações sobre o autor, editora e resumo
        // - Um link para mais detalhes
       
    }

    if (!resultados) {
        resultados = "Nenhum livro foi encontrado"
    }

    // Atribui a marcação HTML construída à seção, atualizando o conteúdo da página
    section.innerHTML = resultados;
}
   
//console.log(dados);

