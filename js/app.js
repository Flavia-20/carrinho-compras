totalGeral = 0;
limpar()


function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];//divide a string quantas vezes aparecer o - e pego o que estiver na primeira posição[0]
    let valorUnidade = produto.split('R$')[1];//procura o R$ e pega o que esta depois do R$ por isso [1]
    let quantidade = document.getElementById('quantidade').value;

    let preco = quantidade * valorUnidade;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho .innerHTML + ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnidade}</span>
        </section>`
    
    totalGeral = preco + totalGeral;

    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.innerHTML = `${totalGeral}`;

    document.getElementById('quantidade').value = '';
}


function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = "";
    document.getElementById('valor-total').innerHTML = '';

}




