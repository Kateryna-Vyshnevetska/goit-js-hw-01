// Получить массив имен всех пользователей (поле name).
import {default as users}  from './users.js';

const getUserNames = users => {
  const result = users.map((elem)=>{return elem.name})
  return result;
  // ! OR
  // const result = [];
  // users.forEach(elem => {result.push(elem.name)});
  // return result;

};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]