export const deletarProduto = ()=>{
    const botoesDeleta = document.querySelectorAll(".caixa__excluir");
botoesDeleta.forEach((botao, id)=>{
    botao.addEventListener("click", (event)=>{
        event.preventDefault()

        const produtosAtualizados = JSON.parse(localStorage.getItem('Produtos'));
        const index = id;
        produtosAtualizados.splice(index,1);
        localStorage.setItem('Produtos', JSON.stringify(produtosAtualizados));

        const elemento = event.target;        
        elemento.parentElement.parentElement.remove();

    })
})
}


