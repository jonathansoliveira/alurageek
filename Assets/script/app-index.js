import { criaProdutoNosConsoles } from "./CriaProduto.js";

const produtosAtualizados = JSON.parse(localStorage.getItem('Produtos'));

// Criando Produtos nas seções de categoria na pagina principal:
produtosAtualizados.forEach((produto)=>{
    if(produto.categoria=="consoles"){
        const consoles = document.querySelector('[data-consoles]')
        consoles.appendChild(criaProdutoNosConsoles(produto))
    }
    if(produto.categoria=="starwars"||produto.categoria=="star wars"){
        const starwars = document.querySelector('[data-starwars]')
        starwars.appendChild(criaProdutoNosConsoles(produto))
    }
    if(produto.categoria=="diversos"){
        const diversos = document.querySelector('[data-diversos]')
        diversos.appendChild(criaProdutoNosConsoles(produto))
    }
})
