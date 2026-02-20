function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
      let line = "";
      let val = i % 2; // Start with 0 if row is even, 1 if odd
      for (let j = 0; j <= i; j++) {
        line += val + " ";
        val = 1 - val; // Toggle between 0 and 1
      }
      console.log(line.trim());
    }
  }
  
  printPattern(6);
  