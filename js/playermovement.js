//MOVING PLAYER ALONG WITH THE ARROW CONTROLS
function playermovement() {
    if (keyDown(UP_ARROW) && player.y > 444) {
        player.y = player.y - 5;
    }
    if (keyDown(DOWN_ARROW) && player.y < 1218) {
        player.y = player.y + 5;
    }
    if (keyDown(RIGHT_ARROW) && player.x < 2049) {
        player.x = player.x + 5;
    }
    if (keyDown(LEFT_ARROW) && player.x > 685) {
        player.x = player.x - 5;
    }
}