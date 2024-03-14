export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your andrew id")) {
    return (
      "dfwang"
    );
  }
  const match = query.match(/What is (\d+) plus (\d+)\?/i);
  if (match){
    const num1 = parseInt(match[1]);
    const num2 = parseInt(match[2]);

        // Calculate the sum
    const sum = num1 + num2;
        
    return sum.toString();
  }
  const match2 = query.match(/Which of the following numbers is the largest: (.+)\?/i);

  if (match2){
    const numbers = match2[1].split(',').map(num => parseInt(num.trim()));

        // Find the largest number
    const largest = Math.max(...numbers);
        
    return largest.toString(); // Convert largest number to strin
  }
  const match3 = query.match(/What is (\d+) multiplied by (\d+)\?/i);

  if (match3) {
        // Extract the numbers from the matched groups
        const num1 = parseInt(match3[1]);
        const num2 = parseInt(match3[2]);

        // Calculate the product
        const product = num1 * num2;
        
        return product.toString(); // Convert product to string
  }

  const match4 = query.match(/Which of the following numbers is both a square and a cube: (.+)\?/i);

  if (match4) {
        // Extract the numbers from the matched group
        const numbers = match4[1].split(',').map(num => parseInt(num.trim()));

        // Find the number that is both a square and a cube
        const result = numbers.find(num => {
            const squareRoot = Math.sqrt(num);
            const cubeRoot = Math.cbrt(num);
            return Number.isInteger(squareRoot) && Number.isInteger(cubeRoot);
        });

        if (result !== undefined) {
            return result.toString(); // Convert result to string
        } else {
            return "None of the given numbers is both a square and a cube.";
        }
  }
  const match5 = query.match(/What is (\d+) minus (\d+)\?/i);

  if (match5) {
        // Extract the numbers from the matched groups
        const num1 = parseInt(match5[1]);
        const num2 = parseInt(match5[2]);

        // Calculate the product
        const product = num1 - num2;
        
        return product.toString(); // Convert product to string
  }

  const match6 = query.match(/What is (\d+) divided by (\d+)\?/i);

  if (match6) {
        // Extract the numbers from the matched groups
        const num1 = parseInt(match6[1]);
        const num2 = parseInt(match6[2]);

        // Calculate the product
        const product = num1 / num2;
        
        return product.toString(); // Convert product to string
  }
  
  if (query.toLowerCase().includes("your name")) {
    return (
      "David Wang"
    );
  }

  return "";
}
