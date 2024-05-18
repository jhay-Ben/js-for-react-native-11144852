function processArray(arr) {
    return arr.map(num => (num % 2 === 0 ? num * num : num * 3));
   }
   
function formatArrayStrings(strings, numbers) {
    return strings.map((str, i) => (numbers[i] % 2 === 0 ? str.toUpperCase() : str.toLowerCase()));
    }

const arr = [10, 15, 44, 57, 19];
const strings = ['James', 'Bentil', 'Is', 'The', 'Best'];


const processedArr = processArray(arr);
const formattedStrings = formatArrayStrings(strings, processedArr);

console.log(processedArr); 
console.log(strings);
console.log(formattedStrings);
          
 