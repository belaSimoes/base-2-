 // divListaProduto.insertAdjacentHTML('afterbegin', '');
 class Produto {
  constructor (nome, datadeCadastro, descricao, preco){
  this.nome = nome;
  this.datadeCadastro = datadeCadastro;
  this.descricao = descricao;
  this.preco = preco;
}
mostrarProdutos (){
  return this.nome + this.datadeCadastro + this.descricao + this.preco ;
}
}

const produto = new Produto("Boneca", "27-02-2023", "boneca da Hello Kitty", "R$ 49,99");
console.log(produto.mostrarProdutos())

class ProdutosDestaque extends Produto{
  constructor (nome, datadeCadastro, descricao,  preco, imagemDestaque){
    super(nome, datadeCadastro, descricao, preco, imagemDestaque)
    this.imagemDestaque = imagemDestaque;
  }
  mostrarProdutosDestaque (){
      return `
      <h1 class = "bela" >${this.nome}</h1>
      <h4> ${this.datadeCadastro}</h4>
      <img src="${this.imagemDestaque}"/>
      <p> ${this.descricao}</p>
      <p> ${this.preco}</p>
      ` 
     // return this.nome + this.datadeCadastro + this.descricao + this.preco + this.imagemDestaque;
   }
}   
const produtosDestaque = new ProdutosDestaque("Boneca", "27-02-2023", "boneca da Hello Kitty", "R$ 49,99", "https://t1.uc.ltmcdn.com/pt/posts/5/6/5/desenhos_da_hello_kitty_para_colorir_9565_600.jpg");
//console.log(produtosDestaque.mostrarProdutosDestaque())


const produtos = document.getElementById("produto-destaque")
produtos.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());

//const listaProdutos = document.getElementById("lista-produtos")
//divListaProduto.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());