// Nível Médio /////////////////////////
const mediumWords = ["computador", "intermediario", "imperio", "programaçao", "consolidação"];
const mediumGridSize = 10;
const mediumGrid = createGrid(mediumGridSize);

// Insira as palavras na grade
for (const word of mediumWords) {
  insertWord(mediumGrid, word, "horizontal");
}

// Crie uma grade vazia
function createGrid(size) {
    const grid = [];
    for (let i = 0; i < size; i++) {
      grid[i] = Array(size).fill(' ');
    }
    return grid;
  }
  
  // Insira uma palavra na grade
  function insertWord(grid, word, direction) {
    const gridSize = grid.length;
    let row, col;
  
    if (direction === "horizontal") {
      row = Math.floor(Math.random() * gridSize);
      col = Math.floor(Math.random() * (gridSize - word.length + 1));
    } else {
      row = Math.floor(Math.random() * (gridSize - word.length + 1));
      col = Math.floor(Math.random() * gridSize);
    }
  
    for (let i = 0; i < word.length; i++) {
      if (direction === "horizontal") {
        grid[row][col + i] = word[i];
      } else {
        grid[row + i][col] = word[i];
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
displayGrid(mediumGrid);