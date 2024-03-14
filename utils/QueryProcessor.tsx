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
  
  const match0 = query.match(/What is (\d+) plus (\d+) plus (\d+)\?/i);
  if (match0){
    const num1 = parseInt(match0[1]);
    const num2 = parseInt(match0[2]);
    const num3 = parseInt(match0[3]);
    const sum = num1 + num2 + num3;
    return sum.toString();
  }
  
  const match = query.match(/What is (\d+) plus (\d+)\?/i);
  if (match){
    const num1 = parseInt(match[1]);
    const num2 = parseInt(match[2]);
    const sum = num1 + num2;
    return sum.toString();
  }
  
  const match2 = query.match(/Which of the following numbers is the largest: (.+)\?/i);
  if (match2){
    const numbers = match2[1].split(',').map(num => parseInt(num.trim()));
    const largest = Math.max(...numbers);
    return largest.toString();
  }
  
  const match3 = query.match(/What is (\d+) multiplied by (\d+)\?/i);
  if (match3) {
    const num1 = parseInt(match3[1]);
    const num2 = parseInt(match3[2]);
    const product = num1 * num2;   
    return product.toString();
  }

  const match4 = query.match(/Which of the following numbers is both a square and a cube: (.+)\?/i);
  if (match4) {
      const numbers = match4[1].split(',').map(num => parseInt(num.trim()));
      const result = numbers.find(num => {
          const squareRoot = Math.sqrt(num);
          const cubeRoot = Math.cbrt(num);
          return Number.isInteger(squareRoot) && Number.isInteger(cubeRoot);
      });
      if (result !== undefined) {
          return result.toString(); 
      } else {
          return "None";
      }
  }
  
  const match5 = query.match(/What is (\d+) minus (\d+)\?/i);
  if (match5) {
      const num1 = parseInt(match5[1]);
      const num2 = parseInt(match5[2]);
      const product = num1 - num2;
      return product.toString();
  }

  const match6 = query.match(/What is (\d+) divided by (\d+)\?/i);
  if (match6) {
      const num1 = parseInt(match6[1]);
      const num2 = parseInt(match6[2]);
      const product = num1 / num2;
      return product.toString();
  }

  const match7 = query.match(/What is (\d+) to the power of (\d+)\?/i);

  if (match7) {
      const base = parseInt(match7[1]);
      const exponent = parseInt(match7[2]);
      const result = Math.pow(base, exponent);
      return result.toString();
  }
  
  if (query.toLowerCase().includes("your name")) {
    return (
      "David Wang"
    );
  }

  return "";
}
