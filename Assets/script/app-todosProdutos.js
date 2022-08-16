import { criaProduto } from "./CriaProduto.js";
import { deletarProduto } from "./deletarProduto.js";
import { escolheProdutoEditar } from "./editaProduto.js";

const todosProdutos = document.querySelector('.todosProdutos__container');


const produtosAtualizados = JSON.parse(localStorage.getItem('Produtos'));
// criando os produtos pagina toos os produtos:
produtosAtualizados.forEach((produto)=>{
    todosProdutos.appendChild(criaProduto(produto));
})

// adicionando a opção de excluir os produtos criados:
deletarProduto();

// escolhendo o produto a ser editado e redirecionando a página de editar:
escolheProdutoEditar();