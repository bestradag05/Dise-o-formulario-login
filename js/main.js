$(document).ready(function () {


    var input_form = $('#formulario input');

    // Agregar Clase Dinamicamente
    var form = $('#formulario');
    var bar = $('.bar');

    input_form.on('keyup', function () {


        if ($(this).val() != "") {
            $(this).siblings('label').addClass('clase');
        } else {
            $(this).siblings('label').removeClass('clase');
        }
    });
    
//Validacion de campos del formulario
    form.on('submit', function (event) {

        let estado = true;
        event.preventDefault();

            $('input').each(function(){
           
                if($(this).val().length <= 0)
                {
                 $(this).closest('.card-input').append('<p id="msgError" class="divError">*Este campo es obligatorio</p>');
                 estado = false;
                }else{
                 $(this).closest('.card-input').children('p').remove();
                 
                }
                 
             });

             if(!estado){
             }else{
                alert('Bienvenido al sistema');
             }


    });


    //Cambiar icono y mostrar contraseña

    $('#logo-contra').on('click', function () {

        let input = $('#contraseña');

        if (input.get(0).type == "password") {
            input.get(0).type = 'text';
            $('#logo-contra').html('<i class="fa fa-2x fa-eye"></i>');
        } else {
            input.get(0).type = 'password';
            $('#logo-contra').html(' <i class="fa fa-2x fa-eye-slash"></i>');
        }

    });



    

});