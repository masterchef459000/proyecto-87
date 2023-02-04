
// Crea la variable del canvas
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// para subir las imágenes
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') // añade los códigos de las teclas
	{
		// sube al ranger rojo
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// sube al ranger verde
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// sube al ranger amarillo
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// sube al ranger rosa
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// sube al ranger azul
	}
	
}

