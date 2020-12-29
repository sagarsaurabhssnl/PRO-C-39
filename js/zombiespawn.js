//SPAWNING ZOMBIES WITH FRAME COUNT
function zombiespawn() {
    if (frameCount % 50 === 0) {
        zombie = createSprite(random(zombiex), Math.round(random(444, 1218)));
        if (zombie.x < 800) {
            zombie.velocityX = 3;
            zombie.mirrorX(-1);
        } else if (zombie.x > 1800) {
            zombie.velocityX = -3;
        }
        zombie.debug = false;
        //ADDIND RANDOM ANIMATIONS TO ZOMBIES AND ADDING COLLIDERS
        let zom = Math.round(random(1, 17));
        switch (zom) {
            case 1: zombie.addAnimation("zimg1", zombie1img);
                zombie.setCollider("rectangle", 0, 35, 100, 370);
                break;
            case 2: zombie.addAnimation("zimg2", zombie2img);
                zombie.setCollider("rectangle", 0, 0, 100, 200);
                break;
            case 3: zombie.addAnimation("zimg3", zombie3img);
                zombie.setCollider("rectangle", 0, 10, 100, 220);
                break;
            case 4: zombie.addAnimation("zimg4", zombie4img);
                zombie.setCollider("rectangle", 0, 0, 100, 230);
                break;
            case 5: zombie.addAnimation("zimg5", zombie5img);
                zombie.setCollider("rectangle", 0, 0, 100, 190);
                break;
            case 6: zombie.addAnimation("zimg6", zombie6img);
                zombie.setCollider("rectangle", 0, 0, 100, 190);
                break;
            case 7: zombie.addAnimation("zimg7", zombie7img);
                zombie.setCollider("rectangle", 0, 0, 100, 230);
                break;
            case 8: zombie.addAnimation("zimg8", zombie8img);
                zombie.setCollider("rectangle", 0, 0, 100, 200);
                break;
            case 9: zombie.addAnimation("zimg9", zombie9img);
                zombie.setCollider("rectangle", 0, 0, 100, 320);
                break;
            case 10: zombie.addAnimation("zimg10", zombie10img);
                zombie.setCollider("rectangle", 0, 0, 100, 420);
                break;
            case 11: zombie.addAnimation("zimg11", zombie11img);
                zombie.setCollider("rectangle", 0, 0, 100, 470);
                break;
            case 12: zombie.addAnimation("zimg12", zombie12img);
                zombie.setCollider("rectangle", 0, 0, 100, 470);
                break;
            case 13: zombie.addAnimation("zimg13", zombie13img);
                zombie.setCollider("rectangle", 0, 0, 100, 270);
                break;
            case 14: zombie.addAnimation("zimg14", zombie14img);
                zombie.setCollider("rectangle", 0, 0, 100, 540);
                break;
            case 15: zombie.addAnimation("zimg15", zombie15img);
                zombie.setCollider("rectangle", 0, 0, 100, 280);
                break;
            case 16: zombie.addAnimation("zimg16", zombie16img);
                zombie.setCollider("rectangle", 0, -30, 100, 380);
                break;
            case 17: zombie.addAnimation("zimg17", zombie17img);
                zombie.setCollider("rectangle", 0, 20, 100, 220);
                break;
            default: break;
        }
        //PROPERTIES OF ZOMBIES
        zombie.scale = 0.4;
        zombie.lifetime = 1000;
        //ADDIND ZOMBIES TO GROUPS
        zombiegroup.add(zombie);
        zombiegroupassignreset();
        switch (zombiegroupassign) {
            case zombiegroupassign: zg[zombiegroupassign].add(zombie);
                break;
            default: break;
        }
        zombiegroupassign = zombiegroupassign + 1;
    }
}

//DESTROYING ZOMBIE AS THE BULLET TOUCHES IT
function zombiedown() {
    for (var t = 1; t < 21; t++) {
        if (bulletgroup.isTouching(zg[t])) {
            zg[t].destroyEach();
            kill = kill + 1;
        }
    }
}

//RECOMPUTING THE VALUE OF THE VARIABLE RESPONSIBLE FOR ASSIGNING ZOMBIE THEIR SEPARATE GROUPS
function zombiegroupassignreset() {
    if (zombiegroupassign === 20) {
        zombiegroupassign = 1;
    }
}