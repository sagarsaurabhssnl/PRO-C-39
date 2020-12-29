//FUNCTION TO BE EXECUTED AT GAMESTATE PLAY
function gamestateplay() {
    if (gamestate === play) {
        gameover.visible = false;
        fire();
        playermovement();
        zombiespawn();
        zombiedown();
        coinSpawn();
        gameend();
        push();
        fill(150);
        rect(camera.position.x - 100, camera.position.y + 300, 200, 10);
        pop();
        fill("red");
        rect(camera.position.x - 100, camera.position.y + 300, health, 10);
    }
}