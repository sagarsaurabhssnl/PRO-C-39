//FUNCTIONS TO BE EXECUTED WHEN GAME STATE IS END
function gamestateend() {
    if (gamestate === end) {
        player.pause();
        gameover.visible = true;
        restart.visible = true;
        zombiegroup.setVelocityXEach(0);
        zombiegroup.destroyEach();
        if (mousePressedOver(restart)) {
            restart.play();
            setTimeout(() => { document.location.reload(false) }, 2000);
        }
    }
}

//CONDITION WHERE THE GAME FINISHES
function gameend() {
    for (var e = 1; e < 21; e++) {
        if (player.isTouching(zg[e])) {
            zg[e].destroyEach();
            health = health - 40;
        }
    }
    if (health <= 0) {
        gamestate = end;
    }
}
