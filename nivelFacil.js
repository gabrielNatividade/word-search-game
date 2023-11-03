// Nível Fácil
const palavraFacil = ["volei", "futbol", "futsal", "handbol", "basquete"]; //palavras faceis
const tamanhoGradeFacil = 12; // tamanho de palarvas faceis
const gradeFacil = criacaoGrade(tamanhoGradeFacil); //

// Insira as palavras na grade
for (const palavra of palavraFacil) {
  inserirPalavra(gradeFacil, palavra, "horizontal");
}

// Crie uma grade vazia
function criacaoGrade(tamanho) {
    const grade = [];
    for (let i = 0; i < tamanho; i++) {
      grade[i] = Array(tamanho).fill(' ');
    }
    return grade;
  }
  
  // Insira uma palavra na grade
  function inserirPalavra(grade, palavra, direcao) {
    const tamanhoGrade = grade.length;
    let row, col;
  
    if (direcao === "horizontal") {
      row = Math.floor(Math.random() * tamanhoGrade);
      col = Math.floor(Math.random() * (tamanhoGrade - palavra.length + 1));
    } else {
      row = Math.floor(Math.random() * (tamanhoGrade - palavra.length + 1));
      col = Math.floor(Math.random() * tamanhoGrade);
    }
  
    for (let i = 0; i < palavra.length; i++) {
      if (direcao === "horizontal") {
        grade[row][col + i] = palavra[i];
      } else {
        grade[row + i][col] = palavra[i];
      }
    }
  }
  
  // Exiba a grade
  function exibirGrade(grade) {
    for (let row of grade) {
      console.log(row.join(" "));
    }
  }
  

// Exiba a grade
exibirGrade(gradeFacil);