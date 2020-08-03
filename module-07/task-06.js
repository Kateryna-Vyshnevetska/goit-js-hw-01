// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
//  если неправильное - красным.

const inputRef = document.querySelector('#validation-input');
const validLength = inputRef.dataset.length;

const checkValid = (e) => {
  if(e.target.value.length < validLength){
    e.target.classList.add('invalid');
  }else{
    e.target.classList.replace('invalid','valid')
  }
}
inputRef.addEventListener('change', e => checkValid(e));