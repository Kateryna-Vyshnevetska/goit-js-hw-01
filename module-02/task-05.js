// Напиши функцию checkForSpam(message), 
// принимающую 1 параметр message - строку. 
// Функция проверяет ее на содержание слов spam и sale. 
// Если нашли зарещенное слово то функция возвращает true, 
// если запрещенных слов нет функция возвращает false. 
// Слова в строке могут быть в произвольном регистре.

const checkForSpam = function(message) {

  //!Var1
  const newMessage = message.split(' ').join('').toLowerCase();
  console.log(newMessage.includes('sale') || newMessage.includes('spam'));
  
};


checkForSpam('Latest technology news'); // false

checkForSpam('JavaScript weekly newsletter'); // false

checkForSpam('Get best sale offers now!'); // true

checkForSpam('[SPAM] How to earn fast money?'); // true


//!Var2
// const newMessage = message.replace( /\s/g, "").toLowerCase();

//? \s - регулярное выражение для "пробелов", 
//?  g - "глобальный" флаг, что означает соответствие
//? всем \s (пробелам).