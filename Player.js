function Player(sprite, x, y, classename, h, w) {

    GameObject.call(this, sprite, x, y, "player", h, w);

}

//fazendo herança
Player.prototype = Object.create(GameObject.prototype);

Player.prototype.update = function () {

    //movimento
    if (se.teclado.CIMA) {

        if (this.y > 50)
            this.y -=3;

    } else if (se.teclado.BAIXO) {
        if (this.y < canvas.height - 100)
            this.y += 3;
    }

    if (se.teclado.DIREITA) {
        this.x +=3;
    } else if (se.teclado.ESQUERDA) {
        this.x -=3;
    }

    //laser
    if (se.teclado.ESPACO) {

    }
};