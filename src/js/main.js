import '../scss/main.scss';

$( function () {
  $( "#type-system" ).selectmenu();
})

 window.rangeSlider = function (value) {
   $("#rangeValue")[0].innerHTML = value + ' %'
}

let inputs = document.querySelectorAll('.button-attach-file__input');
Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
      labelVal = label.querySelector('.button-attach-file__text').innerText;

    input.addEventListener('change', function (e){
      let countFiles = '';
      if (this.files && this.files.length >= 1)
        countFiles = this.files.length;
      if (countFiles)
        label.querySelector('.button-attach-file__text').innerText = 'Выбрано файлов: ' + countFiles;
      else
        label.querySelector('.button-attach-file__text').innerText = labelVal;
    })
})
let trigger = document.querySelector('.menu-toggle')
let nav = document.querySelector('.nav')
let body = document.querySelector('body')
let bgGray = document.querySelector('.bg-gray')

trigger.addEventListener('click', function () {
  nav.classList.toggle('active-mobile-nav')
  body.classList.toggle('scroll-hidden')
  bgGray.classList.toggle('bg-gray-active')
})

