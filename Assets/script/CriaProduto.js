const produtos = [{
    url: "Assets/imagens/Skill1.png",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "starwars"
}, {
    url: "Assets/imagens/skill2.png",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "starwars"
},{
    url: "Assets/imagens/Skill3.png",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "starwars"
},{
    url: "Assets/imagens/skill4.png",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "starwars"
},{
    url: "Assets/imagens/Skill5.png",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "starwars"
},{
    url: "Assets/imagens/skill6.png",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "starwars"
},{
    url: "Assets/imagens/Skill7.png",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "consoles"
},{
    url: "Assets/imagens/skill8.png",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "consoles"
},{
    url: "Assets/imagens/skill9.jpg",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "consoles"
},{
    url: "Assets/imagens/skill10.jpg",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "consoles"
},{
    url: "Assets/imagens/skill11.jpg",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "consoles"
},{
    url: "Assets/imagens/skill12.png",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "consoles"
},{
    url: "Assets/imagens/Skill13.png",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "diversos"
},{
    url: "Assets/imagens/skill14.jpg",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "diversos"
},{
    url: "Assets/imagens/skill15.jpg",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "diversos"
},{
    url: "Assets/imagens/skill16.jpg",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "diversos"
},{
    url: "Assets/imagens/skill17.jpg",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "diversos"
},{
    url: "Assets/imagens/skill18.png",
    nome: "Produto XYZ",
    preco: "R$ 60,00",
    descricao: "",
    categoria: "diversos"
}]

export const produtosAtualizados = JSON.parse(localStorage.getItem('Produtos'));

if(produtosAtualizados==null){
    localStorage.setItem('Produtos', JSON.stringify(produtos))
}

export function criaProduto(produto){
    const conteudo = `<img src="${produto.url}" alt="produto starwars" class="img-produto">
    <a href="editar-produto.html" class="caixa__editar"><img src="Assets/imagens/editar.png" alt="Editar produto"></a>
    <a href="" class="caixa__excluir"><img src="Assets/imagens/excluir.png" alt="Editar produto"></a>
    <p class="caixa__descricao">${produto.nome}</p>
    <h3 class="caixa__preco">${produto.preco}</h3>
    <a href="#" class="caixa__ver-produto">Ver produto</a>`
    const Produto = document.createElement('div');
    Produto.classList.add('caixa');
    Produto.innerHTML=conteudo
    return Produto;
}


export function criaProdutoNosConsoles(produto){
    const conteudo = `<img src="${produto.url}" alt="produto starwars" class="img-produto">
    <p class="caixa__descricao">${produto.nome}</p>
    <h3 class="caixa__preco">${produto.preco}</h3>
    <a href="#" class="caixa__ver-produto">Ver produto</a>`
    const Produto = document.createElement('div');
    Produto.classList.add('caixa');
    Produto.innerHTML=conteudo
    return Produto;
}
