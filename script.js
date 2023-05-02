// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor (nome, dataCadastro, descricao, preco){
    this.nome = nome;
    this.dataCadastro = dataCadastro;
    this.descricao = descricao;
    this.preco = preco;
}
mostrarProdutos (){
    return this.nome + this.dataCadastro + this.descricao + this.preco ;
 }
}

const produto = new Produto("isabela", "27-02-2023", "boneca da Hello Kitty", "R$ 49,99");
console.log(produto.mostrarProdutos())

class ProdutosDestaque extends Produto{
    constructor (nome, dataCadastro, descricao,  preco, imagemDestaque){
      super(nome, dataCadastro, descricao, preco, imagemDestaque)
      this.imagemDestaque = imagemDestaque;
    }
    mostrarProdutosDestaque (){
        return this.nome + this.dataCadastro + this.descricao + this.preco + this.imagemDestaque;
     }
}   
const produtosDestaque = new ProdutosDestaque("isabela", "27-02-2023", "boneca da Hello Kitty", "R$ 49,99", "https://www.voceselembra.com/wp-content/uploads/2021/03/Hello-Kitty-1.jpg");
console.log(produtosDestaque.mostrarProdutosDestaque())