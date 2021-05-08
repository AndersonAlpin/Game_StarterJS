const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("background", "Backgrounds/purple.png", "image");
    this.loader.addResource("shipblue", "playerShip2_blue.png", "image");
    this.loader.addResource("enemyred", "enemyRed1.png", "image");
    this.loader.addResource("lase1", "laserBlue01.png", "image");
    this.loader.addResource("lase2", "laserRed01.png", "image");
    this.loader.addResource("logogame", "logogame.png", "image");
    this.loader.addResource("play", "labelPlay.png", "image");
    this.loader.addResource("labelrank", "labelRanking.png", "image");
    this.loader.addResource("guiscore", "playerLife2_blue.png", "image");
    this.loader.addResource("laser", "laser.mp3", "audio");
};


//Quando o loading acabar
se.gameReady = function () {

    var jogo = new Scene();

    jogo.setFunctionStart(setLevel1);

    this.mlevel.addScene(jogo);

}

//crie quantas funcoes precisar!!!

function setLevel1() {

    new Background("background", 0, 0, canvas.width, canvas.height);

    new Player("shipblue", 300, 600, "player");
}


function setMenu() {

}