function validaNumero(input)
{
//TOMO EL VALOR DEL CAMPO ENVIADO EN EL EVENTO 
  var num = input.value;
  if(isNaN(num))
  {
   /*  alert("Solo se permiten números en este campo"); */
    input.value = "";
    input.focus();
  }else{
	
  }
}
//CON ESTA FUNSIO SE VALIDA QUE NO SE PERMITAN NUMEROS, NI ESPACIOS, NI CARACTERES ESPECIALES EN UN CAMPO DE TEXTO
function validarletras(input){
//VERIFICO QUE SOLO SE PRESIONEN LETRAS O TECLAS DE CONTRO
  if(((event.keyCode < 8) && (event.keyCode >18)) || ((event.keyCode > 47) && (event.keyCode <58)))
  {
	alert("Solo se permiten letras en este campo");
	input.value = "";
    input.focus();
	event.returnValue = true;
  }
//VERIFICO QUE NO SE INSERTEN ESPACIO O CARACTERES ESPECIALES
  if((event.keyCode == 32) || (event.keyCode > 192) || event.keyCode > 194)
  {
    alert("No se permite poner espacios ni caracteres especiales en este campo");
	input.value = "";
    input.focus();
	event.returnValue = false;	
  }
}
function validarletrasusuario(input){
//VERIFICO QUE SOLO SE PRESIONEN LETRAS O TECLAS DE CONTRO
  if(((event.keyCode < 8) && (event.keyCode >18)) || ((event.keyCode > 47) && (event.keyCode <58)))
  {
	alert("Solo se permiten letras en este campo");
	input.value = "";
    input.focus();
	event.returnValue = true;
  }
//VERIFICO QUE NO SE INSERTEN ESPACIO O CARACTERES ESPECIALES
  if((event.keyCode > 192) || event.keyCode > 194)
  {
    alert("No se permite poner espacios ni caracteres especiales en este campo");
	input.value = "";
    input.focus();
	event.returnValue = false;	
  }
}
