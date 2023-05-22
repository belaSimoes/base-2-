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
      <img src="${this.imagemDestaque}" style="height: 250px"/>
      <p> ${this.descricao}</p>
      <p> ${this.preco}</p>
      ` 
     // return this.nome + this.datadeCadastro + this.descricao + this.preco + this.imagemDestaque;
   }
}   
const produtosDestaque = new ProdutosDestaque("Boneca", "27-02-2023", "Boneca da Hello Kitty - Kuromi", "R$ 49,99", "https://seeklogo.com/images/K/kuromi-logo-68C9041203-seeklogo.com.png");
//console.log(produtosDestaque.mostrarProdutosDestaque())


const produtos = document.getElementById("produto-destaque")
produtos.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());


class ProdutosdaLista extends Produto{
  constructor (nome, datadeCadastro, descricao,  preco, imagemDestaque, nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4){
    super(nome, datadeCadastro, descricao, preco, imagemDestaque, nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4)
    this.imagemDestaque = imagemDestaque;
    this.nome2 = nome2;
    this.descricao2 = descricao2;
    this.preco2 = preco2;
    this.nome3 = nome3;
    this.descricao3 = descricao3;
    this.preco3 = preco3;
    this.nome4 = nome4;
    this.descricao4 = descricao4;
    this.preco4 = preco4;
  }
mostrarListaProdutos() {
  return `
    
    <div class="listinha">
  <div class="grid-container">
    <div class="coluna">
    <h4>${this.nome2}</h4>
    <p>${this.descricao2}</p>
    <p>${this.preco2}</p>
    </div>
    <div class="coluna">
    <h4>${this.nome3}</h4>
    <p>${this.descricao3}</p>
    <p>${this.preco3}</p>
    </div>
    <div class="coluna">
    <h4>${this.nome4}</h4>
    <p>${this.descricao4}</p>
    <p>${this.preco4}</p>
    </div>
  </div>
</div>
  `;
}
}

const produtosLIsta = new ProdutosdaLista("Boneca", "27-02-2023", "boneca da Hello Kitty", "R$ 49,99", "https://t1.uc.ltmcdn.com/pt/posts/5/6/5/desenhos_da_hello_kitty_para_colorir_9565_600.jpg", "Boneca Turma da Hello Kitty", "Boneca da Hello Kitty - Hello Kitty", "R$ 49,99", "Pelúcia Turma da Hello Kitty", "Boneca da Hello Kitty - Chococat", "R$ 39,99", "Boneca Turma da Hello Kitty", "Boneca da Hello Kitty - My Melody", "R$ 89,99");

const listaProdutos = document.getElementById("lista-produtos")
listaProdutos.insertAdjacentHTML('afterbegin', produtosLIsta.mostrarListaProdutos());

//const listaProdutos = document.getElementById("lista-produtos")
//divListaProduto.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());