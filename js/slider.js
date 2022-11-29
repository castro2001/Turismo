const Slider = document.getElementById('Slider');
let SliderSeccion = document.querySelectorAll('.Contenido_Slider')
let SliderSectionLast = SliderSeccion[SliderSeccion.length - 1];


const BtnLeft = document.querySelector('#btn_left');
const BtnRight  = document.querySelector('#btn_rigth');

Slider.insertAdjacentElement('afterbegin', SliderSectionLast);

function Nexts( ){
 let sliderSectionFirst=  document.querySelectorAll('.Contenido_Slider')[0];
    Slider.style.marginLeft ='-200%';
    Slider.style.transition ='all 0.5s ease';
    setTimeout(function(){
        Slider.style.transition ='none';
        Slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        Slider.style.marginLeft ='-100%';
    } ,500);
}

function Previous() {
        let SliderSeccion = document.querySelectorAll('.Contenido_Slider')
    let SliderSectionLast = SliderSeccion[SliderSeccion.length - 1];
    Slider.style.marginLeft ='0%';
    Slider.style.transition ='all 0.5s ease';
    setTimeout(function(){
        Slider.style.transition ='none';
        Slider.insertAdjacentElement('afterbegin',SliderSectionLast);
        Slider.style.marginLeft ='-100%';
    } ,500);
}

BtnRight.addEventListener('click', function(){
    Nexts()
})

BtnLeft.addEventListener('click', function(){
    Previous()
})

//menu fijo 
window.addEventListener("scroll", function (){
    let header = document.getElementById("menu");
    header.classList.toggle("sticky",window.scrollY)


})