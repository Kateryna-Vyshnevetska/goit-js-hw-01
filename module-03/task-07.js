// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с 
// балансом и историей транзакций.

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,

  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
    const newTrans = {id, amount, type};
    return newTrans;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    let newBalance = this.balance += amount;
    let newTans = this.createTransaction(newBalance, 'deposit');
    this.transactions.push(newTans);
    return this.transactions;

  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы невозможно, недостаточно средств.
   */
  withdraw(amount) {
    if(this.balance >= amount){
      let newBalance = this.balance -= amount;
      this.transactions.push(this.createTransaction(newBalance, 'withdraw'));
      return this.transactions;
    }else{
      alert('It is impossible to withdraw such an amount, there are not enough funds');
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    let currentBalance = this.balance;
    return `Your balance is ${currentBalance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for(let item of this.transactions){
        if(item.id === id){
          return item;
        }
      }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalAmount = 0;
    for(let item of this.transactions){
      if(item.type === type){
        totalAmount += item.amount;
      }
    }return `Amount of transactions by type ${type} is ${totalAmount}`;
  },
};


let userDo ;
let userChoose;

do{

  userDo = prompt('Choose a transaction: 1 - deposit , 2 - withdraw, 3 - current balance, 4 - search by id, 5 - Amount of transactions by type');

  if(Number(userDo) === 1){
    userChoose = prompt('Enter the amount to  for deposit');
    console.log(account.deposit(Number(userChoose)));
  }
  else if(Number(userDo) === 2){
    userChoose = prompt('Enter the amount to  for withdraw');
    console.log(account.withdraw(Number(userChoose)));
  }
  else if(Number(userDo) === 3){
    console.log(account.getBalance());
  }
  else if(Number(userDo) === 4){
    userChoose = prompt('Enter the id');
    console.log(account.getTransactionDetails(userChoose));
  }
  else if(Number(userDo) === 5){
    userChoose = prompt('Enter the type of transaction');
    console.log(account.getTransactionTotal(userChoose));
  }else{
    alert('Please, enter a number of transaction')
  }


}while(userDo != null)



