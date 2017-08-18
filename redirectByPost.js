/*
* @Author: ITIC. Ruben Cruz Aguilar
* Fecha: 18-ago-2017
*/
function redirect_by_post(purl, pparameters) {
	
    var form = document.createElement("form"); // crea un formulario temporal donde enviara los datos
    $(form).attr("id", "reg-form").attr("name", "reg-form").attr("action", purl).attr("method", "post");//se le añaden los atributos necesarios como nombre, id, action y method
    document.body.appendChild(form); // se añade el formulario a nuestro documento
    $.each(pparameters, function(key,val) { //se leen los parametros para crear cajas de texto que almacenara los datos 
        $("#reg-form").append('<input type="text" id="'+key+'" name="' + key + '" value="' + val + '" />');//se crean las cajas del texto con el nombre de la llave y el valor de nuestro json que enviamos por parametro
    });
    form.submit(); //enviamos el formulario
    document.body.removeChild(form);//eliminamos el formulario
}

/**********************************************
***************implementacion******************
***********************************************/

$(".button").click(function(){

	var datos = {
			'variable1'	:"valor de variable1",
			'variable2'	:"valor de variable2"
	};	
	redirect_by_post('url.php',datos); //funcion para redirigir por post
	
});
