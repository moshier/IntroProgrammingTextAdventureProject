//Locations

function Location(id, name, description, hasItem) {
   //Attributes 
   this.id = id;
   this.name = name;
   this.description = description;
   this.hasItem = hasItem;
}

var stage = new Location();
   stage.id = 0;
   stage.name = "stage";
   stage.description = "0. You are standing on Stage in Paris with over 75,000 fans screaming your name.";
   stage.hasItem = false;
   
var screaming = new Location();
   screaming.id = 1;
   screaming.name = "screaming";
   screaming.description = "1. The screaming gets louder.";
   screaming.hasItem = false; 
   
var firstSong = new Location();
   fistSong.id = 2; 
   firstSong.name = "firstSong";
   firstSong.description = "2. You start and finish your first song.";
   firstSong.hasItem = false; 
   
var secondSong = new Location();
   secondSong.id = 3;
   secondSong.name = "secondSong";
   secondSong.description = "3. You perform another song.";
   secondSong.hasItem = false; 
   
var crying = new Location();
   crying.id = 4;
   crying.name = "crying";
   crying.description = "4. Fans start to cry. Oh no!";
   crying.hasItem = false; 
   
var costume = new Location();
   costume.id = 5;
   costume.name = "costume";
   costume.description = "5. Costume change!";
   costume.hasItem = false; 
   
var bracelet = new Location();
   bracelet.id = 6;
   bracelet.name = "bracelet";
   bracelet.description = "6. You contribute to Make a Wish by singing to a fan in the audience. The fan gives you a bracelet.";
   bracelet.hasItem = true; 
   
var loveXO = new Location();
   loveXO.id = 7;
   loveXO.name = "loveXO";
   loveXO.description =  "7. Your love is like XO, you perform the XO song and feel overwhelmed with love from your fans.";
   loveXO.hasItem = true; 
   
var autographs = new Location();
   autographs.id = 8;
   autographs.name = "autographs";
   autographs.description =  "8. You sign autographs for fans in between songs.";
   autographs.hasItem = true; 
   
var flowers = new Location();
   flowers.id = 9;
   flowers.name = "flowers";
   flowers.description =  "9. You receive flowers from a generous fan and notice something that shines in the bouquet...it's the ring!";
   flowerss.hasItem = true; 
   
function stage() {
    var msg = "0. You are standing on Stage in Paris with over 75,000 fans screaming your name.";
    showScore();
    displayMessage(msg);
}
function screaming() {
    var msg = "1. The screaming gets louder.";
    showScore();
    displayMessage(msg);
}
function firstSong() {
    var msg = "2. You start and finish your first song.";
    showScore();
    displayMessage(msg);
}
function secondSong() {
    var msg = "3. You perform another song.";
    showScore();
    displayMessage(msg);
}
function crying() {
    var msg = "4. Fans start to cry. Oh no!";
    showScore();
    displayMessage(msg);
}
function costume() {
    var msg = "5. Costume change!";
    showScore();
    displayMessage(msg);
}
function bracelet() {
	if(taken_bracelet===false){
    	var msg = "6. You contribute to Make a Wish by singing to a fan in the audience. The fan gives you a bracelet.";
    } else {
        var msg = "6. You contribute to Make a Wish by singing to a fan in the audience. ";
    }
    showScore();
    displayMessage(msg);
}
function loveXO() {
	if(taken_love===false){
    var msg = "7. Your love is like XO, you perform the XO song and feel overwhelmed with love from your fans.";
    } else {
        var msg = "7. You perform another song.";
	}
    showScore();
    displayMessage(msg);
}
function autographs() {
    var msg = "8. You sign autographs for fans in between songs."
    showScore();
    displayMessage(msg);
}
function flowers() {
	if(taken_flowers===false){
    var msg = "9. You receive flowers from a generous fan and notice something that shines in the bouquet...it's the ring!";
    } else {
        var msg = "9. You perform more songs with Jay-Z.";
    }
    showScore();
    displayMessage(msg);
}
function errorMsg(){
    displayMessage("You can not go this way.");
}