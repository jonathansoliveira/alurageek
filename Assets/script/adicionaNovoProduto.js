// pegando inputs:

const nome = document.querySelector('[data-nomeProduto]')
const url = document.querySelector('[data-url]')
const preco = document.querySelector('[data-preco]')
const categoria = document.querySelector('[data-categoria]')
const descricao = document.querySelector('[data-descricao]')
const botaoNovoProduto = document.querySelector('[data-btnNovoProduto]')


const todosProdutos =  JSON.parse(localStorage.getItem('Produtos'))

// criando função que adiciona um novo produto:
botaoNovoProduto.addEventListener('click', (evento) => {

    evento.preventDefault()

    const produto = {
        url: url.value,
        nome: nome.value,
        preco: preco.value,
        descricao: descricao.value.toLowerCase(),
        categoria: categoria.value
    }

    const produtosAtualizados = [...todosProdutos, produto]
    localStorage.setItem('Produtos', JSON.stringify(produtosAtualizados))


    nome.value = '';
    url.value = '';
    preco.value = '';
    categoria.value = '';
    descricao.value = '';
})







