const readline = require('readline');

// Criando a interface para ler os dados no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar o nome do herói
rl.question("Digite o nome do herói: ", function(nome) {

  // Solicitar a quantidade de experiência (XP)
  rl.question("Digite a quantidade de experiência (XP): ", function(xp) {
    xp = parseInt(xp); // Garantir que XP seja um número

    // Variável para armazenar o nível do herói
    let nivel;

    // Classificação do nível do herói
    if (xp < 1000) {
      nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
      nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }

    // Exibir a mensagem final
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

    // Fechar a interface
    rl.close();
  });
});
