// Получить общую сумму баланса (поле balance) всех пользователей.
import {default as users}  from './users.js';

const calculateTotalBalance = users => {
  const summ = users.reduce((acc, elem)=> acc + elem.balance, 0);
  return summ;
};

console.log(calculateTotalBalance(users)); // 20916