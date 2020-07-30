// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
import {default as users}  from './users.js';

const getUsersWithEyeColor = (users, color) => {
  const result = users.filter((elem)=>{return elem.eyeColor === color})
  return result;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]