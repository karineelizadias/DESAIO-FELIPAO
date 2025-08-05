// Classe que representa um Herói de Aventura
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Verifica o tipo para determinar o ataque
    if (this.tipo === "mago") {
      ataque = "usou magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "usou espada";
    } else if (this.tipo === "monge") {
      ataque = "usou artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "usou shuriken";
    } else {
      ataque = "usou um ataque desconhecido";
    }

    // Exibe a mensagem final
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso:
const heroi1 = new Heroi("Arus", 30, "mago");
const heroi2 = new Heroi("Thork", 45, "guerreiro");
const heroi3 = new Heroi("Li", 28, "monge");
const heroi4 = new Heroi("Shadow", 22, "ninja");

heroi1.atacar(); // O mago atacou usando magia
heroi2.atacar(); // O guerreiro atacou usando espada
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken
