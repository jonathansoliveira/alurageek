export function escolheProdutoEditar(){
    const botoesEditar = document.querySelectorAll(".caixa__editar");
    botoesEditar.forEach((botaoEditar,id)=>{
        botaoEditar.addEventListener('click', (event)=>{
            const index = id;
            event.preventDefault;
            localStorage.setItem('index', JSON.stringify(index));
        })
    })    
}

export function editaProduto(){
    const todosProdutos =  JSON.parse(localStorage.getItem('Produtos'));
    const indiceProdutoEditar = JSON.parse(localStorage.getItem('index'));
    console.log(todosProdutos);
    const produtoEditar = todosProdutos[indiceProdutoEditar];
    console.log(produtoEditar);

    const nome = document.querySelector('[data-nomeProduto]');
    const url = document.querySelector('[data-url]');
    const preco = document.querySelector('[data-preco]');
    const categoria = document.querySelector('[data-categoria]');
    const descricao = document.querySelector('[data-descricao]');
    const botaoNovoProduto = document.querySelector('[data-btnNovoProduto]');
    
    nome.value = produtoEditar.nome;
    url.value = produtoEditar.url;
    preco.value = produtoEditar.preco;
    descricao.value = produtoEditar.descricao;
    categoria.value = produtoEditar.categoria;

    botaoNovoProduto.addEventListener('click', (event)=> {
        event.preventDefault();

        produtoEditar.nome = nome.value;
        produtoEditar.url = url.value;
        produtoEditar.preco = preco.value;
        produtoEditar.categoria = categoria.value;
        produtoEditar.descricao = descricao.value;
        todosProdutos.splice(indiceProdutoEditar,1,produtoEditar);

        localStorage.setItem('Produtos', JSON.stringify(todosProdutos));
        
        window.location.href="todos-produtos.html";
    })
}