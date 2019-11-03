var mainblock = document.querySelector('#phone-container');
let phoneList = mainblock.getElementsByClassName('phone-item');

for (let phone of phoneList) {
   let text = phone.querySelector('.model').textContent;
   console.log(text)
   
}
