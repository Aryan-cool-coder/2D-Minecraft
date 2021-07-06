var canvas=new fabric.Canvas("myCanvas");
var block_img_height = 30;
var block_img_width = 30;
player_X = 10;
player_Y = 10;
var player_object = "";
var block_img_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(130);
        player_object.scaleToHeight(120);
        player_object.set({
            top:player_Y, 
            left:player_X
        });
        canvas.add(player_object);
    });
}
function new_Image(get_Image) {
    fabric.Image.fromURL(get_Image, function(Img){
    block_img_object = Img;
    block_img_object.scaleToWidth(block_img_width);
    block_img_object.scaleToHeight(block_img_height);
    block_img_object.set({
        top:player_Y,
        left:player_X
    });
    canvas.add(block_img_object);
});
};
window.addEventListener("keydown", keydown);
 function keydown(e) {
     keypress = e.keyCode;
     console.log(keypress);
     if (e.shiftKey == true && e.keypress == 80) {
        console.log("P and Shift key Pressed Together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (e.shiftKey == true && e.keypress == 77) {
        console.log("M and Shift key Pressed Together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (e.keyPress == 38) {
        up();
        console.log("up");
    }
    if (e.keyPress == 39) {
        right();
        console.log("right");
    }
    if (e.keyPress == 37) {
        left();
        console.log("left");
    }
    if (e.keyPress == 40) {
        down();
        console.log("down");
    }
    if (e.keyPress == 87) {
        new_Image("wall.jpg");
        console.log("w");
    }
    if (e.keyPress == 71) {
        new_Image("ground.png");
        console.log("g");
    }
    if (e.keyPress == 76) {
        new_Image("light_green.png");
        console.log("l");
    }
    if (e.keyPress == 84) {
        new_Image("trunk.jpg");
        console.log("t");
    }
    if (e.keyPress == 82) {
        new_Image("roof.jpg");
        console.log("r");
    }
    if (e.keyPress == 89) {
        new_Image("yellow_wall.png");
        console.log("y");
    }
    if (e.keyPress == 68) {
        new_Image("dark_green.png");
        console.log("d");
    }
    if (e.keyPress == 85) {
        new_Image("unique.png");
        console.log("u");
    }
    if (e.keyPress == 67) {
        new_Image("cloud.jpg");
        console.log("c");
    }
 }

 function up() {
    if (player_Y >=0 ) {
        player_Y = player_Y - block_img_height;
        console.log("Block Image Height =" + block_img_height );
        console.log("When up arrow key is pressed, x = " + player_X + ", y =" + player_Y);
        canvas.remove(player_object);
        player_update();
    }
 }

 function down() {
    if (player_Y <=500 ) {
        player_Y = player_Y + block_img_height;
        console.log("Block Image Height =" + block_img_height );
        console.log("When down arrow key is pressed, x = " + player_X + ", y =" + player_Y);
        canvas.remove(player_object);
        player_update();
    }
 }

 function left() {
    if (player_X >0 ) {
        player_X = player_X - block_img_width;
        console.log("Block Image  width=" + block_img_width );
        console.log("When left arrow key is pressed, x = " + player_X + ", y =" + player_Y);
        canvas.remove(player_object);
        player_update();
    }
 }

 function right() {

 } if (player_X <=500 ) {
    player_X = player_X + block_img_width;
    console.log("Block Image  width=" + block_img_width );
    console.log("When right arrow key is pressed, x = " + player_X + ", y =" + player_Y);
    canvas.remove(player_object);
    player_update();
}