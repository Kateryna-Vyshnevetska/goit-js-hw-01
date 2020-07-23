// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате 
// ключ:значение используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;


//! Var1
let keys = Object.keys(user);

for (let elem of keys) {
  console.log(elem, ":", user[elem]);
}

//! Var2
// for(const key in user){
//   console.log(key, ':', user[key]);
// }

//! Var3
// const keys = Object.keys(user);
// const values = Object.values(user);

// for(let i = 0; i < keys.length; i++){
//   console.log(keys[i], ':', values[i]);
// }







