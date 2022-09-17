const menuBtn = document.querySelector('.hamburger');
const slideBar = document.querySelector('.slider')



menuBtn.addEventListener(('click'), function () {
    slideBar.classList.toggle('open');
    menuBtn.classList.toggle('open');
})


