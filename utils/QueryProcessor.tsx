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
  if {query.match(/What is (\d+) plus (\d+)\?/i)}{
    const num1 = parseInt(match[1]);
    const num2 = parseInt(match[2]);

        // Calculate the sum
    const sum = num1 + num2;
        
    return sum.toString();
  }
  if (query.toLowerCase().includes("your name")) {
    return (
      "David Wang"
    );
  }

  return "";
}
