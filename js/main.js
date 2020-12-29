//Global variables
let player, playerimg, playerdie;
let bullet, muzzle, bulletimg, firesound, bulletgroup;
let back;
let zombie, coinimg, coin;
let gameover, gameoverimg;
let zombie1img, zombie2img, zombie3img, zombie4img, zombie5img, zombie6img, zombie7img, zombie8img, zombie9img, zombie10img, zombie11img, zombie12img, zombie13img, zombie14img, zombie15img, zombie16img, zombie17img, zombiegroup;
let reloadimg, reloadimg1, reloadimg2, reloadimg3, reloadimg4, reloadimg5, reloadimg6, reloadimg7, reloadimg8, reloadimg9, reloadimg10, reloadimg11, reloadimg12, reloadimg13, reloadimg14, reloadimg15, reloadimg16;
let bulletgroupassign = 1;
let zombiegroupassign = 1;
let bulletreloadtime = 1;
let zombiex = [50, 2650];
let kill = 0;
var restart;
play = 1;
end = 0;
let health = 200;
let gamestate = play;
let zg = [], bg = [];
let zgMyGroup;
let bgMyGroup;
let font;

//Loading Images
function preload() {
    alert("Be patient as it will load almost 10 MB of files, or you may also download it");
    alert("Remove headphones or minimise it's volume");
    font = loadFont("fonts/ShriftSteamy.otf");
    firesound= loadSound("firesound.mp3");
    back = loadImage("background.png");
    playerimg = loadAnimation("player/snapshot1.png", "player/snapshot2.png", "player/snapshot3.png", "player/snapshot4.png", "player/snapshot5.png", "player/snapshot6.png", "player/snapshot7.png", "player/snapshot8.png", "player/snapshot9.png", "player/snapshot10.png", "player/snapshot11.png", "player/snapshot12.png", "player/snapshot13.png", "player/snapshot14.png", "player/snapshot15.png", "player/snapshot16.png", "player/snapshot17.png", "player/snapshot18.png");
    zombie1img = loadAnimation("zombie1/snapshot2.png", "zombie1/snapshot3.png", "zombie1/snapshot4.png", "zombie1/snapshot5.png", "zombie1/snapshot6.png", "zombie1/snapshot7.png", "zombie1/snapshot8.png", "zombie1/snapshot9.png", "zombie1/snapshot10.png", "zombie1/snapshot11.png", "zombie1/snapshot12.png", "zombie1/snapshot13.png", "zombie1/snapshot14.png", "zombie1/snapshot15.png", "zombie1/snapshot16.png", "zombie1/snapshot17.png", "zombie1/snapshot18.png", "zombie1/snapshot19.png");
    zombie2img = loadAnimation("zombie2/snapshot1.png", "zombie2/snapshot2.png", "zombie2/snapshot3.png", "zombie2/snapshot4.png", "zombie2/snapshot5.png", "zombie2/snapshot6.png", "zombie2/snapshot7.png", "zombie2/snapshot8.png", "zombie2/snapshot9.png", "zombie2/snapshot10.png", "zombie2/snapshot11.png", "zombie2/snapshot12.png", "zombie2/snapshot13.png", "zombie2/snapshot14.png", "zombie2/snapshot15.png", "zombie2/snapshot16.png", "zombie2/snapshot17.png", "zombie2/snapshot18.png", "zombie2/snapshot19.png", "zombie2/snapshot20.png");
    zombie3img = loadAnimation("zombie3/snapshot1.png", "zombie3/snapshot2.png", "zombie3/snapshot3.png", "zombie3/snapshot4.png", "zombie3/snapshot5.png", "zombie3/snapshot6.png", "zombie3/snapshot7.png", "zombie3/snapshot8.png", "zombie3/snapshot9.png", "zombie3/snapshot10.png", "zombie3/snapshot11.png");
    zombie4img = loadAnimation("zombie4/snapshot1.png", "zombie4/snapshot2.png", "zombie4/snapshot3.png", "zombie4/snapshot4.png", "zombie4/snapshot5.png", "zombie4/snapshot6.png", "zombie4/snapshot7.png", "zombie4/snapshot8.png", "zombie4/snapshot9.png", "zombie4/snapshot10.png", "zombie4/snapshot11.png", "zombie4/snapshot12.png", "zombie4/snapshot13.png", "zombie4/snapshot14.png", "zombie4/snapshot15.png", "zombie4/snapshot16.png", "zombie4/snapshot17.png", "zombie4/snapshot18.png", "zombie4/snapshot19.png", "zombie4/snapshot20.png", "zombie4/snapshot21.png");
    zombie5img = loadAnimation("zombie5/snapshot1.png", "zombie5/snapshot2.png", "zombie5/snapshot3.png", "zombie5/snapshot4.png", "zombie5/snapshot5.png", "zombie5/snapshot6.png", "zombie5/snapshot7.png", "zombie5/snapshot8.png", "zombie5/snapshot9.png", "zombie5/snapshot10.png", "zombie5/snapshot11.png", "zombie5/snapshot12.png", "zombie5/snapshot13.png", "zombie5/snapshot14.png", "zombie5/snapshot15.png", "zombie5/snapshot16.png", "zombie5/snapshot17.png", "zombie5/snapshot18.png", "zombie5/snapshot19.png", "zombie5/snapshot20.png", "zombie5/snapshot21.png", "zombie5/snapshot22.png", "zombie5/snapshot23.png", "zombie5/snapshot24.png", "zombie5/snapshot25.png", "zombie5/snapshot26.png", "zombie5/snapshot27.png", "zombie5/snapshot28.png", "zombie5/snapshot29.png", "zombie5/snapshot30.png", "zombie5/snapshot31.png");
    zombie6img = loadAnimation("zombie6/snapshot1.png", "zombie6/snapshot2.png", "zombie6/snapshot3.png", "zombie6/snapshot4.png", "zombie6/snapshot5.png", "zombie6/snapshot6.png");
    zombie7img = loadAnimation("zombie7/snapshot1.png", "zombie7/snapshot2.png", "zombie7/snapshot3.png", "zombie7/snapshot4.png", "zombie7/snapshot5.png", "zombie7/snapshot6.png", "zombie7/snapshot7.png", "zombie7/snapshot8.png", "zombie7/snapshot9.png", "zombie7/snapshot10.png", "zombie7/snapshot11.png", "zombie7/snapshot12.png", "zombie7/snapshot13.png", "zombie7/snapshot14.png", "zombie7/snapshot15.png", "zombie7/snapshot16.png", "zombie7/snapshot17.png", "zombie7/snapshot18.png", "zombie7/snapshot19.png", "zombie7/snapshot20.png", "zombie7/snapshot21.png");
    zombie8img = loadAnimation("zombie8/snapshot1.png", "zombie8/snapshot2.png", "zombie8/snapshot3.png", "zombie8/snapshot4.png", "zombie8/snapshot5.png", "zombie8/snapshot6.png");
    zombie9img = loadAnimation("zombie9/snapshot1.png", "zombie9/snapshot2.png", "zombie9/snapshot3.png", "zombie9/snapshot4.png", "zombie9/snapshot5.png", "zombie9/snapshot6.png", "zombie9/snapshot7.png", "zombie9/snapshot8.png", "zombie9/snapshot9.png", "zombie9/snapshot10.png", "zombie9/snapshot11.png", "zombie9/snapshot12.png", "zombie9/snapshot13.png", "zombie9/snapshot14.png", "zombie9/snapshot15.png", "zombie9/snapshot16.png");
    zombie10img = loadAnimation("zombie10/snapshot1.png", "zombie10/snapshot2.png", "zombie10/snapshot3.png", "zombie10/snapshot4.png", "zombie10/snapshot5.png", "zombie10/snapshot6.png", "zombie10/snapshot7.png");
    zombie11img = loadAnimation("zombie11/snapshot1.png", "zombie11/snapshot2.png", "zombie11/snapshot3.png", "zombie11/snapshot4.png", "zombie11/snapshot5.png", "zombie11/snapshot6.png", "zombie11/snapshot7.png", "zombie11/snapshot8.png", "zombie11/snapshot9.png", "zombie11/snapshot10.png", "zombie11/snapshot11.png", "zombie11/snapshot1.png");
    zombie12img = loadAnimation("zombie12/snapshot1.png", "zombie12/snapshot2.png", "zombie12/snapshot3.png", "zombie12/snapshot4.png");
    zombie13img = loadAnimation("zombie13/snapshot1.png", "zombie13/snapshot2.png", "zombie13/snapshot3.png", "zombie13/snapshot4.png", "zombie13/snapshot5.png", "zombie13/snapshot6.png", "zombie13/snapshot7.png", "zombie13/snapshot8.png", "zombie13/snapshot9.png", "zombie13/snapshot10.png", "zombie13/snapshot11.png", "zombie13/snapshot12.png", "zombie13/snapshot13.png", "zombie13/snapshot14.png", "zombie13/snapshot15.png", "zombie13/snapshot16.png", "zombie13/snapshot17.png");
    zombie14img = loadAnimation("zombie14/snapshot1.png", "zombie14/snapshot2.png", "zombie14/snapshot3.png", "zombie14/snapshot4.png", "zombie14/snapshot5.png", "zombie14/snapshot6.png", "zombie14/snapshot7.png", "zombie14/snapshot8.png", "zombie14/snapshot9.png", "zombie14/snapshot10.png", "zombie14/snapshot11.png", "zombie14/snapshot12.png", "zombie14/snapshot13.png", "zombie14/snapshot14.png", "zombie14/snapshot15.png", "zombie14/snapshot16.png", "zombie14/snapshot17.png", "zombie14/snapshot18.png", "zombie14/snapshot19.png", "zombie14/snapshot20.png", "zombie14/snapshot21.png", "zombie14/snapshot22.png", "zombie14/snapshot23.png");
    zombie15img = loadAnimation("zombie15/snapshot1.png", "zombie15/snapshot2.png", "zombie15/snapshot3.png", "zombie15/snapshot4.png", "zombie15/snapshot5.png", "zombie15/snapshot6.png", "zombie15/snapshot7.png", "zombie15/snapshot8.png", "zombie15/snapshot9.png", "zombie15/snapshot10.png", "zombie15/snapshot11.png", "zombie15/snapshot12.png", "zombie15/snapshot13.png", "zombie15/snapshot14.png", "zombie15/snapshot15.png", "zombie15/snapshot16.png", "zombie15/snapshot17.png", "zombie15/snapshot18.png", "zombie15/snapshot19.png", "zombie15/snapshot20.png", "zombie15/snapshot21.png", "zombie15/snapshot22.png");
    zombie16img = loadAnimation("zombie16/snapshot1.png", "zombie16/snapshot2.png", "zombie16/snapshot3.png", "zombie16/snapshot4.png");
    zombie17img = loadAnimation("zombie17/snapshot1.png", "zombie17/snapshot2.png", "zombie17/snapshot3.png", "zombie17/snapshot4.png", "zombie17/snapshot5.png", "zombie17/snapshot6.png", "zombie17/snapshot7.png", "zombie17/snapshot8.png", "zombie17/snapshot9.png", "zombie17/snapshot10.png", "zombie17/snapshot11.png", "zombie17/snapshot12.png");
    coinimg = loadAnimation("coin/snapshot1.png", "coin/snapshot2.png", "coin/snapshot3.png", "coin/snapshot4.png", "coin/snapshot5.png", "coin/snapshot6.png", "coin/snapshot7.png", "coin/snapshot8.png", "coin/snapshot9.png", "coin/snapshot10.png", "coin/snapshot11.png", "coin/snapshot12.png", "coin/snapshot13.png");
    reloadimg = loadAnimation("reload/snapshot1.png", "reload/snapshot2.png", "reload/snapshot3.png", "reload/snapshot4.png", "reload/snapshot5.png", "reload/snapshot6.png", "reload/snapshot7.png", "reload/snapshot8.png", "reload/snapshot9.png", "reload/snapshot10.png", "reload/snapshot11.png", "reload/snapshot12.png", "reload/snapshot13.png", "reload/snapshot14.png", "reload/snapshot15.png", "reload/snapshot16.png");
    gameoverimg = loadImage("gameover.png");
    bulletimg = loadImage("bullet.png");
}
//Creating sprites and setting them on the canvas
function setup() {
    createCanvas(displayWidth, displayHeight - 133);
    //CREATING SPRITES AND GROUPS AND ADDING THEIR PROPERTIES
    player = createSprite(displayWidth, displayHeight);
    player.addAnimation("myplayer", playerimg);
    player.setCollider("rectangle", 0, 0, 200, 300);
    player.scale = 0.5;
    player.mirrorX(-1);
    gameover = createSprite(player.x, player.y);
    gameover.addImage("gameover", gameoverimg);
    gameover.visible = false;
    restart = createSprite(player.x, player.y + 200);
    restart.addAnimation("reloadGame", reloadimg);
    restart.pause();
    restart.scale = 0.5;
    restart.visible = false;
    muzzle = createSprite(player.x + 10, player.y - 13, 100, 10);
    bulletgroup = new Group();
    zombiegroup = new Group();
    zgMyGroup = new myGroup(zg, 20);
    bgMyGroup = new myGroup(bg, 6);
}

//Drawing Elements
function draw() {
    //SETTING UP THE BACKGROUND
    background(150);
    image(back, 0, 0, displayWidth * 2, displayHeight * 2);
    gameover.x = camera.position.x;
    gameover.y = camera.position.y;
    restart.x = player.x;
    restart.y = player.y + 200
    //MUZZLE POSITION AND VISIBILITY
    muzzle.visible = false;
    muzzleplacement();
    //CALLING FUNCTIONS
    gamestateplay();
    gamestateend();
    drawSprites();
    fill(0);
    text("Press C to get the code", player.x - 670, player.y + 300);
    text("Press R to reload game", player.x - 670, player.y + 280);
    push();
    textFont(font, 80);
    fill("red");
    text("Kills: " + kill, player.x + 350, player.y - 250);
    pop();
    camera.position.x = player.x;
    camera.position.y = player.y;
}

function keyPressed() {
    if (keyCode === 67) {
        window.location.href = "https://github.com/sagarsaurabhssnl/PRO-C-39";
    }
    if (keyCode === 82) {
        window.location.reload(false);
    } if (gamestate !== end) {
        if (keyCode === 37) {
            player.mirrorX(-1);
        }
        if (keyCode === 39) {
            player.mirrorX(1);
        }
    }
    if (gamestate === end && keyCode === 80) {
        gamestate = play;
        zombiegroup.destroyEach();
        kill = 0;
    }
}