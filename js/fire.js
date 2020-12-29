//PLACING MUZZLE ALONG WITH PLAYER
function muzzleplacement() {
    if (player.mirrorX() === 1) {
        muzzle.x = player.x + 90;
        muzzle.y = player.y - 13;
    } else if (player.mirrorX() === (-1)) {
        muzzle.x = player.x - 40;
        muzzle.y = player.y - 13;
    }
}

//SEETING FUNCTION TO FIRE FROM PLAYER'S GUN
function fire() {
    if (keyWentDown("space") && bulletreloadtime === 1) {
        if (player.mirrorX() === 1) {
            bullet = createSprite(muzzle.x, muzzle.y);
            bullet.velocityX = 20;
        } else if (player.mirrorX() === (-1)) {
            bullet = createSprite(muzzle.x - 50, muzzle.y);
            bullet.mirrorX(-1);
            bullet.velocityX = -20;
        }
        bullet.addImage(bulletimg);
        bullet.debug = false;
        bullet.setCollider("rectangle", 0, 0, 400, 200)
        bulletgroup.add(bullet);
        //ASSIGNING BULLETS SEPARATE GROUPS AND ADDIND IT'S PROPERTIES
        bulletgroupassignreset();
        switch (bulletgroupassign) {
            case bulletgroupassign: bg[bulletgroupassign].add(bullet);
                break;
            default: break;
        }
        bulletgroupassign = bulletgroupassign + 1;
        bullet.scale = 0.1;
        bulletreloadtime = 0;
        bullet.lifetime = 40;
        firesound.play();
        bulletreload();
    }
}

//SETTING OUR RELOAD TIME
function bulletreload() {
    if (bulletreloadtime === 0) {
        setTimeout(reload, 2000);
    }
}

//RELOAD TIME VALUE
function reload() {
    bulletreloadtime = 1;
}

//RECOMPUTING THE VALUE OF THE VARIABLE RESPONSIBLE FOR ASSIGNING BULLET THEIR SEPARATE GROUPS
function bulletgroupassignreset() {
    if (bulletgroupassign === 6) {
        bulletgroupassign = 1;
    }
}