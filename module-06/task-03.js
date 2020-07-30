// Получить массив имен пользователей по полу (поле gender).
import {default as users}  from './users.js';

const getUsersWithGender = (users, gender) => {
  const result = users.filter((elem)=>{return elem.gender === gender})
  return result;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]