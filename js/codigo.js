window.onload = setTimeout( function (){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    console.log('se ha completado la carga de la pagina')
}, 500)
