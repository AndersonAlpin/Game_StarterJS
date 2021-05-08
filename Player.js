function Player(sprite, x, y, classename, h, w) {

    GameObject.call(this, sprite, x, y, "player", h, w);

}

//fazendo herança
Player.prototype = Object.create(GameObject.prototype);

Player.prototype.update = function () {

    //movimento
    if (se.teclado.CIMA) {

        if (this.y > 50)
            this.y -= 3;

    } else if (se.teclado.BAIXO) {
        if (this.y < canvas.height - 100)
            this.y += 3;
    }

    if (se.teclado.DIREITA) {
        if (this.x + this.w < canvas.width)
            this.x += 3;
    } else if (se.teclado.ESQUERDA) {
        if (this.x > 0)
            this.x -= 3;
    }

    //laser
    if (se.teclado.ESPACO) {

        laser = new Bullet("lase1", 0, 0, -4);
        laser.setPosition(this.x + this.w / 2 - laser.w / 2, this.y - laser.h);
        laser.setFire(["enemy", "kill"])

        let cs = se.mlevel.getCurrentScene();
        cs.addObjects(laser);

    }
};