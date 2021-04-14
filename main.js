var canvas = new fabric.canvas('myCanvas');

var block_image_width = 30;
var block_image_height = 30;
player_x = 10;
player_y = 10;
block_image_object="";
player_object="";

function player_update(){
    fabric.Image.fromURL("Image.png", function(Img){
      player_object = Img;
      
      player_object.scaleToWidth(150);
      player_object.scaleToHeight(150);
      player_object.set({
          top:player_y,
          left:player_x
      });
      canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){ 
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
      block_image_object.scaleToHeight(block_image_height);
       block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
      });
}