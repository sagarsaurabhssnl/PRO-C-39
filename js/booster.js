function coinSpawn() {
    if (frameCount % 500 === 0 && gamestate === play) {
        coin = createSprite(Math.round(random(685, 2049)), Math.round(random(444, 1218)));
        coin.addAnimation("booster", coinimg);
        coin.scale = 0.2;
        coin.setCollider("rectangle", 0, 0, 300, 300);
        coin.lifetime = 200;
    }
    if (coin) {
        if (player.isTouching(coin)) {
            coin.destroy();
            health += 20;
            if (health > 200) {
                health = 200;
            }
        }
    }
}
