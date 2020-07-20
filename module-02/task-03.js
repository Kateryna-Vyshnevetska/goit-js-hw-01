// Напиши фукцнию findLongestWord(string), которая принимает параметром 
// произвольную строку (в строке будут только слова и пробелы) 
// и возвращает самое длинное слово в этой строке.

// //!Var1
const findLongestWord = function(string) {
  let a = 0;
  let b = 0;
  const arrayString = string.split(' ');
  for (let i = 0; i < arrayString.length; i++){
    if (a < arrayString[i].length){
      a = arrayString[i].length;
      b = i;
    }
  }
  return arrayString[b];
};

//!Var2
// const findLongestWord = function(string) {
//   const arr = [];
//   const arrayString = string.split(' ');
//   for (let i = 0; i < arrayString.length; i++){
//     arr.push(arrayString[i].length);
//   }
//   return arrayString[arr.indexOf(Math.max.apply(null,arr))];
// }

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'