//1
 class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Erro!";
  }
}
//2

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

  } 

  atributos() {
    if (this.nome != "" && this.datadeCadastro != "" && this.descricao != "" && this.preco != "" && this.imagemDestaque != ""){ 
      return  `
      <h1 class = "bela" >${this.nome}</h1>
      <h4> ${this.datadeCadastro}</h4>
      <img src="${this.imagemDestaque}" style="height: 250px"/>
      <p> ${this.descricao}</p>
      <p> ${this.preco}</p>
      ` ;
  } else {
    throw new Error ("Algum campo não está preenchido :)")
}
  }


  
}   


//4
const produtosDestaque = new ProdutosDestaque("Boneca", "27-02-2023", "Boneca da Hello Kitty - Kuromi", "R$49.99", "https://seeklogo.com/images/K/kuromi-logo-68C9041203-seeklogo.com.png");

const atributos1 = produtosDestaque.mostrarAtributos() 

const produtos = document.getElementById("produto-destaque")
produtos.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarAtributos());
//5






class ProdutosdaLista extends Produto{
  constructor (nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4){
    super(nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4)
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

  mostrarAtributos2(){
    try{
    return this.atributos1();
    } catch (erro){
      console.log(erro.stack)
    }
  } 

  atributos1() {
    if ( this.nome2 != "" && this.descricao2 != "" && this.preco2 != "" && this.nome3 != "" && this.descricao3 != "" && this.preco3 != "" && this.nome4 != "" && this.descricao4 != "" && this.preco4 != ""){
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

  } else {
    throw new Error ("Algum campo não está preenchido :)")
}
  }
}



//6




const produtosLIsta = new ProdutosdaLista("Boneca Turma da Hello Kitty", "Boneca da Hello Kitty - Hello Kitty", "R$ 79,99", "Pelúcia Turma da Hello Kitty", "Boneca da Hello Kitty - Chococat", "R$ 39,99", "Boneca Turma da Hello Kitty", "Boneca da Hello Kitty - My Melody", "R$ 89,99");

const atributos2 = produtosLIsta.mostrarAtributos2() 

const listaProdutos = document.getElementById("lista-produtos")
listaProdutos.insertAdjacentHTML('afterbegin', produtosLIsta.mostrarAtributos2());

//const listaProdutos = document.getElementById("lista-produtos")
//divListaProduto.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());