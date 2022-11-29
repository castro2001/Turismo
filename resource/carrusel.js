
//carrusel
const Carrusel = document.getElementById('Carrusel');

let CarruselSeccion = document.querySelectorAll('.Carrusel_item')
let CarruselSectionLast = CarruselSeccion[CarruselSeccion.length - 1];
console.log(Carrusel)

const CarruselBtnLeft = document.querySelector('#btn_carrusel_left');
const CarruselBtnRight  = document.querySelector('#btn_carrusel_rigth');

Carrusel.insertAdjacentElement('afterbegin', CarruselSectionLast);

function Next(){
    let CarruselSectionFirst=  document.querySelectorAll('.Carrusel_item')[0];
    Carrusel.style.marginLeft ='-200%';
    Carrusel.style.transition ='all 0.5s ease';
    setTimeout(function(){
        Carrusel.style.transition ='none';
        Carrusel.insertAdjacentElement('beforeend',CarruselSectionFirst);
        Carrusel.style.marginLeft ='-100%';
    } ,500);

}

CarruselBtnRight.addEventListener('click', function (){
    Next()
})

function Prev() {
    let CarruselSeccion = document.querySelectorAll('.Carrusel_item')
    let CarruselSectionLast = CarruselSeccion[CarruselSeccion.length - 1];
    Slider.style.marginLeft ='0%';
    Slider.style.transition ='all 0.5s ease';
    setTimeout(function(){
        Carrusel.style.transition ='none';
        Carrusel.insertAdjacentElement('afterbegin',CarruselSectionLast);
        Carrusel.style.marginLeft ='-100%';
    } ,500);
}

CarruselBtnLeft.addEventListener('click',function(){
    Prev()
})