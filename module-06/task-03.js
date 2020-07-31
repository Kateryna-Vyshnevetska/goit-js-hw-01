// Получить массив имен пользователей по полу (поле gender).
import {default as users}  from './users.js';

const getUsersWithGender = (users, gender) => {
  const result = [...users];
  const arr = [];
  result
  .filter((elem)=>{return elem.gender === gender})
  .forEach((elem)=>{arr.push(elem.name) });
  return arr;
};




console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]