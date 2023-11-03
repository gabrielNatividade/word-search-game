// Nível Difícil  //////////////////////////////////////////////////////
const palavrasDificil = ["complexidade", "gigantesco", "companhia", "criptografia", "enigma"];
const tamanhoGradeDificil = 16;
const gradeDificil = createGrid(tamanhoGradeDificil);

// Insira as palavras na grade
for (const palavra of palavrasDificil) {
  // Escolha aleatoriamente entre horizontal e vertical
  const direcao = Math.random() < 0.5 ? "horizontal" : "vertical";
  insertWord(gradeDificil, palavra, direcao);
}

// Crie uma grade vazia
function createGrid(tamanho) {
    const grade = [];
    for (let i = 0; i < tamanho; i++) {
      grade[i] = Array(tamanho).fill(' ');
    }
    return grade;
  }
  
  // Insira uma palavra na grade
  function insertWord(grade, palavra, direcao) {
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
  function displayGrid(grid) {
    for (let row of grid) {
      console.log(row.join(" "));
    }
  }
  
// Exiba a grade
displayGrid(gradeDificil);
