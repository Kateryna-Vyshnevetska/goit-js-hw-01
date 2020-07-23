// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников 
// и возвращает имя самого продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате 
// "имя":"кол-во задач".

const findBestEmployee = function(employees) {
  //! Var1
  // let name = '';
  // let count = 0;
  // for(const key in employees){
  //   if(employees[key] > count){
  //     count = employees[key]
  //     name = key
  //   }
  // }return name;

  //! Var2
  const keys = Object.keys(employees);
  const values = Object.values(employees);
  const maxValue = Math.max.apply(null, values);
  return keys[values.indexOf(maxValue)];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux