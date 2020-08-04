// Напиши скрипт, который для каждого элемента массива ingredients 
// создаст отдельный li, после чего вставит все li за одну операцию в 
// список ul.ingredients. Для создания DOM-узлов используй 
// document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// !1
// const ulRef = document.querySelector('ul');
// ingredients.forEach(el => ulRef.innerHTML+= `<li>${el}</li>`);

// !2
const result = ingredients.reduce((acc, el)=>{
  return (acc += `<li>${el}</li>`);
},'');
ulRef.insertAdjacentHTML('beforeend',result);

// !3
// for (let i = 0; i < ingredients.length; i++) {
//   const liRef = document.createElement('li');
//   liRef.textContent = ingredients[i];
//   ulRef.append(liRef);
// }