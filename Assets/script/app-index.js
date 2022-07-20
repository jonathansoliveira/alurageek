import { criaProduto } from "./CriaProduto.js";

const produtosAtualizados = JSON.parse(localStorage.getItem('Produtos'));

// Criando Produtos nas seções de categoria na pagina principal:
produtosAtualizados.forEach((produto)=>{
    if(produto.categoria=="consoles"){
        const consoles = document.querySelector('[data-consoles]')
        consoles.appendChild(criaProduto(produto))
    }
    if(produto.categoria=="starwars"){
        const starwars = document.querySelector('[data-starwars]')
        starwars.appendChild(criaProduto(produto))
    }
    if(produto.categoria=="diversos"){
        const diversos = document.querySelector('[data-diversos]')
        diversos.appendChild(criaProduto(produto))
    }
})
