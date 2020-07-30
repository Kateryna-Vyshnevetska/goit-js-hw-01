// Получить массив только неактивных пользователей (поле isActive).
import {default as users}  from './users.js';

const getInactiveUsers = users => {
  const result = users.filter((elem)=>{return !elem.isActive})
  return result;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]