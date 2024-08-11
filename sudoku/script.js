// script.js
document.querySelectorAll('.sudoku-cell').forEach(cell => {
    cell.addEventListener('input', function() {
        const valid = /^[1-9]?$/.test(this.value);
        if (!valid) {
            this.value = '';
        }
    });
});

function solveSudoku() {
    // This function would contain the logic to solve the Sudoku.
    // Implementing a full Sudoku solver here would require backtracking algorithm.
    console.log('Solving Sudoku...');
    // Placeholder for solving logic
}
