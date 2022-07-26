import { criaProduto } from "./CriaProduto.js";
import { deletarProduto } from "./deletarProduto.js";

const todosProdutos = document.querySelector('.todosProdutos__container');


const produtosAtualizados = JSON.parse(localStorage.getItem('Produtos'));
// criando os produtos pagina toos os produtos:
produtosAtualizados.forEach((produto)=>{
    todosProdutos.appendChild(criaProduto(produto));
})

deletarProduto();
