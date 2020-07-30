// Получить массив всех умений всех пользователей (поле skills), 
// при этом не должно быть повторяющихся умений и они должны быть отсортированы 
// в алфавитном порядке.

import {default as users}  from './users.js';

const getSortedUniqueSkills = users => {

  const result = users
  .reduce((allSkills,elem) => {
    elem.skills.forEach(item => {
      !allSkills.includes(item) ? allSkills.push(item) : '';
    });
      return allSkills
  }, [])
  .sort();

  return result;
  
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 
// 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 
// 'veniam' ]