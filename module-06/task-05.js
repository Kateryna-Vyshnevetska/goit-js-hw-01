// Получить пользоваля (не массив) по email (поле email, он уникальный).
import {default as users}  from './users.js';

const getUserWithEmail = (users, email) => {
  const result = users.find((elem)=>{return elem.email === email})
  return result;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}