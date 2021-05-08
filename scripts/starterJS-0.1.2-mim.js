function Animation(t){if(this.sprites=[],Array.isArray(t))for(var e=0;e<t.length;e++){var i=se.loader.getAssets(t[e]);if(!i instanceof Image||null==i)throw new Error("Ocorreu um erro ao carregar a imagem"+i+". Verifique o nome adicionado aos resources");this.sprites.push(i)}this.currentsprite=0,this.timesprite=5,this.stop=!1,this.start()}function GameObject(t,e,i,s,o,n,r,h){this.x=0,null!=e&&(this.x=e),this.y=0,null!=i&&(this.y=i),this.classename=s,this.w=0,null!=o&&(this.w=o),this.h=0,null!=n&&(this.h=n),this.z=0,null!=h&&(this.z=h),this.r=0,null!=r&&(this.r=r),this.currentAnimation=0,null!=t&&(Array.isArray(t)?(t.forEach(function(t){if(t.constructor!=Animation)throw new Error("Algum elemento do Array não é uma animação")}),this.animation=t):"string"==typeof t&&(this.animation=[new Animation([t])]),0==this.h&&(this.h=this.animation[this.currentAnimation].autoSize("h")),0==this.w&&(this.w=this.animation[this.currentAnimation].autoSize("w"))),this.linklevel=se.mlevel.currentScene,null!=se.mlevel.getCurrentScene()?se.mlevel.getCurrentScene().addObjects(this):console.warn("Impossível inserir objeto no nível atual.")}function Geometric(t,e,i,s,o,n,r,h,a){GameObject.call(this,void 0,t,e,i,s,o,h,a),(this.stroke=null)!=r&&(this.stroke=r),(this.fill=null)!=n&&(this.fill=n),this.linew=1}function Background(t,e,i,s,o){null==e&&(e=0),null==i&&(i=0),null==s&&(s=canvas.height),null==o&&(o=canvas.width),GameObject.call(this,t,e,i,"background",s,o),this.z=0}function Scene(t,e){this.objects=[],null!=t&&(this.objects=t),this.clean=!0,this.isActive=!0,"boolean"==typeof e&&(this.isActive=e),se.mlevel.addScene(this)}function Sprite(t,e,i,s,o){GameObject.call(this,t,e,i,"sprite",s,o),this.effects="none",this.text="",this.stackText=[],this.timewait=!1,this.mirred=!1}function Bullet(t,e,i,s,o,n,r){GameObject.call(this,t,e,i,"bullet",n,r),this.velocity=s,this.radius=o,this.nofire=["bullet","background"],this.fire=[],this.isremoving=!1,this.z=99}function Car(t,e,i,s,o){GameObject.call(this,t,e,i,"car",s,o),this.buttonup=null,this.buttondown=null,this.buttonleft=null,this.buttonright=null,this.aceleration=.1,this.desaceleration=.05,this.invertaceleration=1,this.maxSpeed=4,this.speed=1,this.setDefaultControll()}function MultDirections(t,e,i,s,o){GameObject.call(this,t,e,i,"mult",s,o),this.buttonup=null,this.buttondown=null,this.buttonleft=null,this.buttonright=null,this.aceleration=.05,this.desaceleration=.05,this.maxSpeed=2,this.speed=1,this.setDefaultControll(),console.log(this.animation)}function ManagerLoader(t){this.folder="assets/",this.starterfolder="resource/",this.assetsList=[],this.assetsListLoaded=[],this.checkAssetsList=0,this.callback=t}function ManagerInputs(){this.DIREITA=!1,this.ESQUERDA=!1,this.CIMA=!1,this.BAIXO=!1,this.ESPACO=!1,this.start()}function ManagerMouse(){this.start(),this.x=0,this.y=0}function ManagerScene(){this.nameplayer="",this.currentScene=-1,this.scenes=[],this.score=0,this.objectsMovimentMouse=[]}function Button(t,e,i,s,o,n){this.classename="button",GameObject.call(this,t,e,i,"button",n,o),this.clickFunction=null!=s?s:function(){console.warn("Esse objeto não possui uma clickFunction")}}function DragDrop(t,e,i,s,o,n){this.classename="dragdrop",GameObject.call(this,t,e,i,"dragdrop",n,o),this.targetFunction=null!=s?s:function(){console.warn("esse objeto não possui uma targetFunction!")},this.dragdroped=!1,this.xoffset=0,this.yoffset=0}function InputText(t,e,i,s,o){GameObject.call(this,void 0,t,e,"gui"),this.text="",this.color="#FFF",this.size="10",this.size="Arial",this.isfocus=!0,null!=i&&(this.color=i),null!=s&&(this.size=s),null!=o&&(this.font=o),this.textaling="start",this.blocked=!1,this.maxsize=100,this.z=100,this.start()}function Text(t,e,i,s,o,n,r){GameObject.call(this,void 0,e,i,"gui"),this.text=t,this.color="#FFF",this.size="20",this.font="Arial",null!=s&&(this.color=s),null!=o&&(this.size=o),null!=n&&(this.font=n),this.z=100,this.callback=function(){},null!=r&&(this.callback=r),this.textaling="start"}function Turtle(){this.x=canvas.width/2,this.y=canvas.height/2,this.linew=1,this.pendown=!0,this.penolddown=!0,this.stakemoviment=[],this.stakealdlines=[],this.stepcurrent=0,this.velocity=10,this.isnewcommand=!0,this.color={r:0,g:0,b:0},this.imgturtle=new GameObject([new Animation(["turtle"])],0,0,"turtle",40,40),this.lastcolor="",this.changecolorup=!0,se.mlevel.getCurrentScene().addObjects(this)}function Circle(t,e,i,s,o){Geometric.call(this,t,e,"rect",void 0,void 0,s,o),this.radius=i}function Rect(t,e,i,s,o,n){Geometric.call(this,t,e,"rect",s,i,o,n)}function Triangle(t,e,i,s,o){Geometric.call(this,t[0],t[1],"triangle",void 0,void 0,s,o),this.p1=t,this.p2=e,this.p3=i}function ReaderTextFile(t){this.text=[],this.currentLine=0,null!=t&&(this.text=se.loader.getAssets(t))}Animation.prototype.start=function(){var t=this;window.setTimeout(function(){t.update(t)},1e3*this.timesprite)},Animation.prototype.update=function(t){this.stop||(t.getCurrentIndexSprite()<t.sprites.length-1?t.nextSprite():t.setCurrentIndexSprite(0),window.setTimeout(function(){t.update(t)},1e3*t.timesprite))},Animation.prototype.nextSprite=function(){this.currentsprite++},Animation.prototype.priorSprite=function(){this.currentsprite--},Animation.prototype.setInterval=function(t){this.timesprite=t},Animation.prototype.setCurrentIndexSprite=function(t){t<this.sprites.length?this.currentsprite=t:console.warn("Índice fora da faixa da aminação atual")},Animation.prototype.getCurrentIndexSprite=function(){return this.currentsprite},Animation.prototype.getCurrentSprite=function(){return this.sprites[this.currentsprite]},Animation.prototype.setSprites=function(t){this.sprites=t},Animation.prototype.stopAnimation=function(){this.stop=!0},Animation.prototype.startAnimation=function(){this.stop=!1},Animation.prototype.autoSize=function(t){return"h"==t?this.sprites[0].height:"w"==t?this.sprites[0].width:0},GameObject.prototype.update=function(){},GameObject.prototype.print=function(){null!=this.animation&&ctx.drawImage(this.animation[this.currentAnimation].getCurrentSprite(),this.x,this.y,this.w,this.h)},GameObject.prototype.setRotate=function(t){360<t&&(t-=360),this.r=t},GameObject.prototype.getRotate=function(){return this.r},GameObject.prototype.setPosition=function(t,e){this.x=t,this.y=e},GameObject.prototype.setPositionByObject=function(t,e){"top"==e&&(this.x=t.x+t.w/2-this.w/2,this.y=t.y-this.h)},GameObject.prototype.setWidth=function(t){this.w=t},GameObject.prototype.getWidth=function(){return this.w},GameObject.prototype.setHeight=function(t){this.h=t},GameObject.prototype.getHeight=function(){return this.h},GameObject.prototype.setSize=function(t,e){this.w=t,this.h=e},GameObject.prototype.translate=function(t,e){this.x+=t,this.y+=e},GameObject.prototype.moveMouse=function(t,e){},Geometric.prototype=Object.create(GameObject.prototype),Geometric.prototype.setFill=function(t){this.fill=t},Geometric.prototype.clearFill=function(){this.fill=null},Geometric.prototype.setStroke=function(t){this.stroke=t},Geometric.prototype.clearStroke=function(){this.stroke=null},Geometric.prototype.setLineWidth=function(t){this.linew=t},Geometric.prototype.getLineWidth=function(){return this.linew},Background.prototype=Object.create(GameObject.prototype),Background.prototype.print=function(t){var e=t.createPattern(this.animation[0].getCurrentSprite(),"repeat");t.fillStyle=e,t.fillRect(0,0,this.w,this.h)},Scene.prototype.addObjects=function(t){this.objects.push(t)},Scene.prototype.startFunction=function(){},Scene.prototype.print=function(){if(0!=this.isActive){this.objects.sort(function(t,e){return t.z-e.z});for(var t=0;t<this.objects.length;t++)this.objects[t].update(),null!=this.objects[t]&&this.objects[t].print(ctx)}},Scene.prototype.setFunctionStart=function(t){this.startFunction=t},Scene.prototype.setObjects=function(t){this.objects=t},Scene.prototype.getObjects=function(){return this.objects},Scene.prototype.setActive=function(t){this.isActive=t},Sound=function(t){this.audio=se.loader.getAssets(t)},Sound.prototype.play=function(){this.audio.play()},Sound.prototype.playInLoop=function(){this.audio.loop()},Sound.prototype.pause=function(){this.audio.pause()},Sound.prototype.stop=function(){this.audio.stop()},Sound.prototype.setVolume=function(t){this.audio.volume(t)},Sound.prototype.isPlaying=function(){return this.audio.isPlaying()},Audio.prototype.setOnEnd=function(t){this.on("end",t)},Sprite.prototype=Object.create(GameObject.prototype),Sprite.prototype.update=function(){},Sprite.prototype.print=function(){if(ctx.save(),this.mirred&&(ctx.translate(canvas.width/2,0),ctx.scale(-1,1),ctx.translate(-canvas.width/2,0)),GameObject.prototype.print.call(this),ctx.restore(),!this.timewait)if("none"!=this.effects){ctx.save();var t=canvas.width-this.x;this.mirred?ctx.translate(t,this.y-.7*this.h):ctx.translate(this.x+this.w,this.y-.7*this.h),ctx.beginPath(),ctx.lineWidth=5,ctx.strokeStyle="#aaa",ctx.fillStyle="#fff";var e=this.text.length/12*20+20;if(0==e&&(e=20),"say"==this.effects?this.printTalkForm(0,0,150,e):"think"==this.effects&&this.printThinkForm(0,0,150,e),ctx.fillStyle="#000",ctx.textAlign="start",ctx.font="20 px",12<this.text.length)for(var i=0;i<this.text.length/12;i++){var s=this.text.substring(12*i,12*(i+1));" "==s[0]&&(s=s.substring(1,s.length)),ctx.fillText(s,10,20*(i+1))}else ctx.fillText(this.text,10,20);ctx.restore()}else 0<this.stackText.length&&(text_temp=this.stackText.shift(),"say"==text_temp[2]?this.startSayForSeconds(text_temp):"think"==text_temp[2]?this.startThinkForSeconds(text_temp):"wait"==text_temp[2]&&this.startWait(text_temp[1]))},Sprite.prototype.say=function(t){this.effects="say",this.text=t},Sprite.prototype.cleanEffects=function(t,e){this.effects="none"},Sprite.prototype.sayForSeconds=function(t,e){this.stackText.push([t,e,"say"])},Sprite.prototype.startSayForSeconds=function(t){this.say(t[0]);var e=this;window.setTimeout(function(){e.effects="none"},1e3*t[1])},Sprite.prototype.think=function(t){this.text=t,this.effects="think"},Sprite.prototype.thinkForSeconds=function(t,e){this.stackText.push([t,e,"think"])},Sprite.prototype.startThinkForSeconds=function(t){this.think(t[0]);var e=this;window.setTimeout(function(){e.effects="none"},1e3*t[1])},Sprite.prototype.changeSizeFor=function(t){"string"==typeof t&&(t=t.substring(0,t.length-1),t=isNaN(t)?0:parseFloat(t)/100),this.h*=t,this.w*=t},Sprite.prototype.changeSizeTo=function(t){this.h+=t,this.w+=t,this.x-=t/2,this.y-=t/2},Sprite.prototype.printTalkForm=function(t,e,i,s){ctx.beginPath(),ctx.moveTo(t+5,e),ctx.lineTo(t+i-5,e),ctx.quadraticCurveTo(t+i,e,t+i,e+5),ctx.lineTo(t+i,e+s-5),ctx.quadraticCurveTo(t+i,e+s,t+i-5,e+s),ctx.lineTo(t+5+10,e+s),ctx.lineTo(t-10,e+s+20),ctx.quadraticCurveTo(t,e+s,t,e+s-5),ctx.lineTo(t,e+5),ctx.quadraticCurveTo(t,e,t+5,e),ctx.closePath(),ctx.fill(),ctx.stroke()},Sprite.prototype.printThinkForm=function(t,e,i,s){ctx.beginPath(),ctx.moveTo(t+5,e),ctx.lineTo(t+i-5,e),ctx.quadraticCurveTo(t+i,e,t+i,e+5),ctx.lineTo(t+i,e+s-5),ctx.quadraticCurveTo(t+i,e+s,t+i-5,e+s),ctx.lineTo(t+5,e+s),ctx.quadraticCurveTo(t,e+s,t,e+s-5),ctx.lineTo(t,e+5),ctx.quadraticCurveTo(t,e,t+5,e),ctx.closePath(),ctx.fill(),ctx.stroke(),ctx.beginPath(),ctx.arc(t+10,e+s+20,7,0,2*Math.PI,!1),ctx.closePath(),ctx.fill(),ctx.stroke(),ctx.beginPath(),ctx.arc(t,e+s+40,5,0,2*Math.PI,!1),ctx.closePath(),ctx.fill(),ctx.stroke()},Sprite.prototype.wait=function(t){this.stackText.push(["",t,"wait"])},Sprite.prototype.startWait=function(t){this.timewait=!0;var e=this;window.setTimeout(function(){e.timewait=!1,e.effects="none"},1e3*t)},Sprite.prototype.setMirror=function(t){this.mirred=t,this.x=canvas.width-this.x},Sprite.prototype.nextSprite=function(){this.setCurrentIndexSprite(this.getCurrentIndexSprite++)},Sprite.prototype.priorSprite=function(){this.animation.setCurrentIndexSprite(this.getCurrentIndexSprite++)},Sprite.prototype.gotoSprite=function(t){this.animation.setCurrentIndexSprite(t)},Sprite.prototype.stopAnimation=function(){this.animation.stopAnimation()},Sprite.prototype.startAimation=function(){this.animation.setCurrentSprite(0),this.animation.startAnimation()},Sprite.prototype.nextAnimation=function(){this.currentAnimation<this.animation.length?this.currentAnimation++:this.currentAnimation=0,console.log(this.currentAnimation)},Sprite.prototype.priorAnimation=function(){0<this.currentAnimation?this.currentAnimation--:this.currentAnimation=this.animation.length-1},Bullet.prototype=Object.create(GameObject.prototype),Bullet.prototype.setNoFire=function(t){this.nofire.push(t)},Bullet.prototype.setFire=function(t){this.fire.push(t)},Bullet.prototype.update=function(){(this.y<0||this.y>canvas.height)&&se.mlevel.scenes[this.linklevel].objects.splice(se.mlevel.scenes[this.linklevel].objects.indexOf(this),1),this.y+=this.velocity;for(var t=0;t<se.mlevel.getCurrentScene().objects.length;t++)if(!this.isremoving){for(var e=se.mlevel.getCurrentScene().objects[t],i=0;i<this.nofire.length;i++)e.classename,this.nofire[i];if(this.x+this.w>e.x&&this.x<e.x+e.w&&this.y+this.h>e.y&&this.y<e.y+e.w)for(i=0;i<this.fire.length;i++)e.classename==this.fire[i][0]&&("custom"==this.fire[i][1]?this.fire[i][2]():"kill"==this.fire[i][1]&&e.fired(),this.remove())}},Bullet.prototype.remove=function(){this.isremoving||(this.isremoving=!0,se.mlevel.removeObject(this))},Car.prototype=Object.create(GameObject.prototype),Car.prototype.print=function(){ctx.save();var t=this.x+this.w/2,e=this.y+this.h/2;ctx.translate(t,e),ctx.rotate(this.r*Math.PI/180),ctx.translate(-t,-e),ctx.drawImage(this.animation[this.currentAnimation].getCurrentSprite(),this.x,this.y,this.w,this.h),ctx.restore()},Car.prototype.setControll=function(t,e,i,s){this.buttondown=e,this.buttonleft=i,this.buttonright=s,this.buttonup=t},Car.prototype.setDefaultControll=function(){this.buttondown="DOWN",this.buttonleft="LEFT",this.buttonright="RIGHT",this.buttonup="UP"},Car.prototype.update=function(){this.x+=this.speed*Math.cos(this.r*Math.PI/180),this.y+=this.speed*Math.sin(this.r*Math.PI/180),se.teclado.getKey(this.buttonup)&&this.moveUp(),se.teclado.getKey(this.buttondown)&&this.moveDown(),se.teclado.getKey(this.buttonright)&&this.moveRight(),se.teclado.getKey(this.buttonleft)&&this.moveLeft(),se.teclado.ESQUERDA||se.teclado.DIREITA||se.teclado.CIMA||se.teclado.BAIXO||(0<=this.speed&&(this.speed-=this.desaceleration),this.speed<0&&(this.speed+=this.desaceleration),this.speed<.1&&-.1<this.speed&&(this.speed=0))},Car.prototype.moveUp=function(){Math.abs(this.speed)<this.maxSpeed&&(0<=this.speed&&(this.speed+=this.aceleration),this.speed<0&&(this.speed-=this.aceleration)),this.speed<0&&(this.speed=-this.speed)},Car.prototype.moveDown=function(){Math.abs(this.speed)<this.maxSpeed&&(0<=this.speed&&(this.speed+=this.aceleration),this.speed<0&&(this.speed-=this.aceleration)),0<this.speed&&(this.speed-=this.invertaceleration)},Car.prototype.moveLeft=function(){se.teclado.getKey(this.buttonup)?this.r-=1:se.teclado.getKey(this.buttondown)&&(this.r+=1)},Car.prototype.moveRight=function(){se.teclado.getKey(this.buttonup)?this.r+=1:se.teclado.getKey(this.buttondown)&&(this.r-=1)},MultDirections.prototype=Object.create(GameObject.prototype),MultDirections.prototype.print=function(){ctx.save();var t=this.x+this.w/2,e=this.y+this.h/2;ctx.translate(t,e),ctx.rotate(this.r*Math.PI/180),ctx.translate(-t,-e),GameObject.prototype.print.call(this),ctx.restore()},MultDirections.prototype.setControll=function(t,e,i,s){this.buttondown=e,this.buttonleft=i,this.buttonright=s,this.buttonup=t},MultDirections.prototype.setDefaultControll=function(){this.buttondown="DOWN",this.buttonleft="LEFT",this.buttonright="RIGHT",this.buttonup="UP"},MultDirections.prototype.update=function(){if(this.x+=this.speed*Math.cos(this.r*Math.PI/180),this.y+=this.speed*Math.sin(this.r*Math.PI/180),se.teclado.getKey(this.buttonup))if(se.teclado.getKey(this.buttonright)||se.teclado.getKey(this.buttonleft))if(se.teclado.getKey(this.buttonright))this.turnToRight();else{if(!se.teclado.getKey(this.buttonleft))return;this.turnToLetf()}else this.moveUp();if(se.teclado.getKey(this.buttondown))if(se.teclado.getKey(this.buttonright)||se.teclado.getKey(this.buttonleft))if(se.teclado.getKey(this.buttonright))this.turnToRight();else{if(!se.teclado.getKey(this.buttonleft))return;this.turnToLetf()}else this.moveDown();if(se.teclado.getKey(this.buttonright))if(se.teclado.getKey(this.buttonup)||se.teclado.getKey(this.buttondown))if(se.teclado.getKey(this.buttondown))this.turnToDown();else{if(!se.teclado.getKey(this.buttonup))return;this.turnToUp()}else this.moveRight();if(se.teclado.getKey(this.buttonleft))if(se.teclado.getKey(this.buttonup)||se.teclado.getKey(this.buttondown))if(se.teclado.getKey(this.buttondown))this.turnToDown();else{if(!se.teclado.getKey(this.buttonup))return;this.turnToUp()}else this.moveLeft();se.teclado.ESQUERDA||se.teclado.DIREITA||se.teclado.CIMA||se.teclado.BAIXO||(0<=this.speed&&(this.speed-=this.desaceleration),this.speed<0&&(this.speed+=this.desaceleration),this.speed<.1&&-.1<this.speed&&(this.speed=0))},MultDirections.prototype.moveUp=function(){270!=this.getRotate()&&this.setRotate(270),Math.abs(this.speed)<this.maxSpeed&&(this.speed+=this.aceleration)},MultDirections.prototype.moveDown=function(){90!=this.getRotate()&&this.setRotate(90),Math.abs(this.speed)<this.maxSpeed&&(this.speed+=this.aceleration)},MultDirections.prototype.moveLeft=function(){180!=this.getRotate()&&this.setRotate(180),Math.abs(this.speed)<this.maxSpeed&&(this.speed+=this.aceleration)},MultDirections.prototype.moveRight=function(){360!=this.getRotate()&&this.setRotate(360),Math.abs(this.speed)<this.maxSpeed&&(this.speed+=this.aceleration)},MultDirections.prototype.turnToRight=function(){270<=this.getRotate()&&this.getRotate()<315?this.setRotate(this.getRotate()+1):this.getRotate()<=90&&45<this.getRotate()&&this.setRotate(this.getRotate()-1)},MultDirections.prototype.turnToLetf=function(){this.getRotate()<=270&&225<this.getRotate()?this.setRotate(this.getRotate()-1):90<=this.getRotate()&&this.getRotate()<135&&this.setRotate(this.getRotate()+1)},MultDirections.prototype.turnToUp=function(){this.getRotate()<=360&&315<this.getRotate()?this.setRotate(this.getRotate()-1):180<=this.getRotate()&&this.getRotate()<225&&this.setRotate(this.getRotate()+1)},MultDirections.prototype.turnToDown=function(){console.log(this.getRotate()),360==this.getRotate()||0<this.getRotate()&&this.getRotate()<45?this.setRotate(this.getRotate()+1):this.getRotate()<=180&&135<this.getRotate()&&this.setRotate(this.getRotate()-1)},ManagerStorage=function(){},ManagerStorage.prototype.setItem=function(t,e){localStorage.setItem(t,e)},ManagerStorage.prototype.getItem=function(t){return localStorage.getItem(t)},ManagerStorage.prototype.setItemJSON=function(t,e){localStorage.setItem(t,JSON.stringify(e))},ManagerStorage.prototype.getItemJSON=function(t,e){return JSON.parse(localStorage.getItem(t))},ManagerLoader.prototype.addResource=function(t,e,i){this.assetsList.push([t,e,i,"user"])},ManagerLoader.prototype.addStarterResource=function(t,e,i){this.assetsList.push([t,e,i,"starter"])},ManagerLoader.prototype.addImage=function(t,e){this.assetsList.push([t,e,"image","user"])},ManagerLoader.prototype.addAudio=function(t,e){this.assetsList.push([t,e,"audio","user"])},ManagerLoader.prototype.loading=function(){if(0==this.assetsList.length)return this.print(.99),void setTimeout(this.callback,2e3);for(var t=0;t<this.assetsList.length;t++)if("image"==this.assetsList[t][2]){this.assetsListLoaded.push(new Image);var e=this.assetsListLoaded[this.assetsListLoaded.length-1];e.onload=function(){this.checkAssetsList++,this.checkAssetsList==this.assetsList.length?(this.print(),setTimeout(this.callback,2e3)):this.print()}.bind(this),"user"==this.assetsList[t][3]?e.src=this.folder+this.assetsList[t][1]:e.src=this.starterfolder+this.assetsList[t][1]}else if("audio"==this.assetsList[t][2]){var i=null,s=function(){this.checkAssetsList++,this.checkAssetsList==this.assetsList.length?(this.print(),setTimeout(this.callback,2e3)):this.print()}.bind(this);i="user"==this.assetsList[t][3]?new Howl({src:[this.folder+this.assetsList[t][1]],onload:s}):new Howl({src:[this.starterfolder+this.assetsList[t][1]],onload:s}),this.assetsListLoaded.push(i)}else if("text"==this.assetsList[t][2]){(o=new XMLHttpRequest).open("GET",this.folder+this.assetsList[t][1],!1),o.onreadystatechange=function(){if(4===o.readyState)if(200===o.status||0==o.status){var t=o.responseText;this.assetsListLoaded.push(t.split("\n")),this.checkAssetsList++,this.checkAssetsList==this.assetsList.length?(this.print(),setTimeout(this.callback,2e3)):this.print()}else console.log("erro")}.bind(this),o.send(null)}else if("csv"==this.assetsList[t][2]){(o=new XMLHttpRequest).open("GET",this.folder+this.assetsList[t][1],!1),o.onreadystatechange=function(){if(4===o.readyState&&(200===o.status||0==o.status)){var e=[];o.responseText.split("\n").forEach(function(t){e.push(t.split(";"))}),this.assetsListLoaded.push(e),this.checkAssetsList++,this.checkAssetsList==this.assetsList.length?(this.print(),setTimeout(this.callback,2e3)):this.print()}}.bind(this),o.send(null)}else if("xml"==this.assetsList[t][2]){var o;(o=new XMLHttpRequest).open("GET",this.folder+this.assetsList[t][1],!1),o.onreadystatechange=function(){if(4===o.readyState)if(200===o.status||0==o.status){var t=(new DOMParser).parseFromString(o.responseText,"text/xml");this.assetsListLoaded.push(t),this.checkAssetsList++,this.checkAssetsList==this.assetsList.length?(this.print(),setTimeout(this.callback,2e3)):this.print()}else console.log("erro")}.bind(this),o.send(null)}},ManagerLoader.prototype.getAssets=function(t){for(var e=null,i=0;i<this.assetsList.length;i++)this.assetsList[i][0]==t&&(e=this.assetsListLoaded[i]);return e},ManagerLoader.prototype.print=function(t){var e=0;1==(e=null!=t?t:100*this.checkAssetsList/this.assetsList.length/100)&&(e=.99),ctx.fillStyle="#008080ff",ctx.fillRect(0,0,canvas.width,canvas.height),ctx.beginPath(),ctx.lineWidth="2",ctx.strokeStyle="#FFFFFF",ctx.beginPath(),x=canvas.width/2-160,y=canvas.height/2+200,ctx.moveTo(x,y),ctx.lineTo(x+300,y),ctx.quadraticCurveTo(x+310,y+15,x+300,y+30),ctx.lineTo(x,y+30),ctx.quadraticCurveTo(x-10,y+15,x,y),ctx.stroke(),x+=5,y+=5,ctx.beginPath(),ctx.moveTo(x,y),ctx.lineTo(e*x+290,y),ctx.lineTo(e*x+290,y+20),ctx.lineTo(x,y+20),ctx.quadraticCurveTo(x-10,y+10,x,y),ctx.fillStyle="#FFFFFF",ctx.fill(),img=document.getElementById("logohtml"),ctx.drawImage(img,canvas.width/2-150,canvas.height/2-220,300,350),ctx.font="15px Verdana",text=parseInt(100*e)+"%",ctx.textAlign="center",ctx.fillText("Loaded "+text,canvas.width/2,canvas.height/2+250)},ManagerInputs.prototype.start=function(){document.addEventListener("keydown",function(t){38==t.keyCode&&(this.CIMA=!0),40==t.keyCode&&(this.BAIXO=!0),37==t.keyCode&&(this.ESQUERDA=!0),39==t.keyCode&&(this.DIREITA=!0),32==t.keyCode&&(this.ESPACO=!0)}.bind(this)),document.addEventListener("keyup",function(t){38==t.keyCode&&(this.CIMA=!1),40==t.keyCode&&(this.BAIXO=!1),37==t.keyCode&&(this.ESQUERDA=!1),39==t.keyCode&&(this.DIREITA=!1),32==t.keyCode&&(this.ESPACO=!1)}.bind(this))},ManagerInputs.prototype.getKey=function(t){return"UP"==t?this.CIMA:"DOWN"==t?this.BAIXO:"RIGHT"==t?this.DIREITA:"LEFT"==t?this.ESQUERDA:void 0},ManagerMouse.prototype.start=function(){var s=this;canvas.addEventListener("click",function(t){for(var e=t.pageX-canvas.offsetLeft,i=t.pageY-canvas.offsetTop,s=se.mlevel.getObjectsCurrentScene(),o=0;o<s.length;o++){if(element=s[o],"dragdrop"!=element.classename||element.dragdroped){if("button"==element.classename&&i>element.y&&i<element.y+element.h&&e>element.x&&e<element.x+element.w){element.click();break}}else if(i>element.y&&i<element.y+element.h&&e>element.x&&e<element.x+element.w){element.click();break}o==s.length-1&&(se.mlevel.offDragdropFlag(),console.log("off"))}},!1),canvas.addEventListener("mousemove",function(t){s.x=t.pageX-canvas.offsetLeft,s.y=t.pageY-canvas.offsetTop;for(var e=se.mlevel.getObjetcsMovimentMouse(),i=0;i<e.length;i++)e[i].moveMouse(s.x,s.y)},!1)},ManagerMouse.prototype.getMousePosition=function(){return{x:this.x,y:this.y}},ManagerMouse.prototype.getMouseX=function(){return this.x},ManagerMouse.prototype.getMouseY=function(){return this.y},ManagerScene.prototype.addScene=function(t){this.scenes.push(t)},ManagerScene.prototype.loadScene=function(t){this.currentScene=t,this.getCurrentScene().setObjects([]),this.getCurrentScene().startFunction()},ManagerScene.prototype.nextScene=function(){this.currentScene++,this.getCurrentScene().setObjects([]),this.getCurrentScene().startFunction()},ManagerScene.prototype.priorScene=function(){this.currentScene--,this.getCurrentScene().setObjects([]),this.getCurrentScene().startFunction()},ManagerScene.prototype.getCurrentScene=function(){return this.scenes[this.currentScene]},ManagerScene.prototype.print=function(){this.scenes[this.currentScene].clean&&(ctx.save(),ctx.setTransform(1,0,0,1,0,0),ctx.clearRect(0,0,canvas.width,canvas.height),ctx.restore()),this.scenes[this.currentScene].print(ctx)},ManagerScene.prototype.getScene=function(t){return this.scenes[t]},ManagerScene.prototype.getObjectByScene=function(t){return this.scenes[t].getObjects()},ManagerScene.prototype.getObjectsCurrentScene=function(){return-1!=this.currentScene?this.scenes[this.currentScene].getObjects():[]},ManagerScene.prototype.removeObject=function(t){this.getObjectByScene(t.linklevel).splice(this.getObjectByScene(t.linklevel).indexOf(t),1)},ManagerScene.prototype.addScore=function(t){objs=this.getObjectByScene(this.currentScene);for(var e=0;e<objs.length;e++)objs[e].name==t&&objs[e].score++},ManagerScene.prototype.gameOver=function(){scores=se.storage.getItemJSON("score1");for(var t=0;t<scores.length;t++)if(scores[t].score<this.score){console.log("new score"),scores[t].name=this.nameplayer,scores[t].score=this.score,se.storage.setItemJSON("score1",scores);break}this.loadScene(0)},ManagerScene.prototype.offDragdropFlag=function(){for(var t=this.getObjectsCurrentScene(),e=0;e<t.length;e++)"dragdrop"==t[e].classename&&(t[e].dragdroped=!1)},ManagerScene.prototype.getObjetcsMovimentMouse=function(){return this.objectsMovimentMouse},ManagerScene.prototype.clearObjetcsMovimentMouse=function(){return this.objectsMovimentMouse},ManagerScene.prototype.addObjetcsMovimentMouse=function(t){this.objectsMovimentMouse.add(t)},ManagerScene.prototype.createNewEnemy=function(t){enemy=new Enemy("enemyred",500*Math.random(),-50,"enemy"),enemy.aceleration=t+.2,this.scenes[this.currentScene].objects.push(enemy)},ManagerScene.prototype.killEnemy=function(t){this.addScore("score"),this.removeObject(t),this.createNewEnemy(t.aceleration)},Button.prototype=Object.create(GameObject.prototype),Button.prototype.click=function(){null!=this.clickFunction&&this.clickFunction()},Button.prototype.setClick=function(t){this.clickFunction=t},DragDrop.prototype=Object.create(GameObject.prototype),DragDrop.prototype.print=function(){if(this.dragdroped){var t=ctx.globalAlpha;ctx.globalAlpha=.4,this.x=se.mmouse.getMouseX()+this.xoffset,this.y=se.mmouse.getMouseY()+this.yoffset,ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h),ctx.globalAlpha=t}else ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h)},DragDrop.prototype.click=function(){this.dragdroped?(this.dragdroped=!1,this.xoffset=0,this.yoffset=0):(this.dragdroped=!0,this.xoffset=this.x-se.mmouse.getMouseX(),this.yoffset=this.y-se.mmouse.getMouseY())},DragDrop.prototype.target=function(){this.targetFunction()},DragDrop.prototype.setTarget=function(t){this.targetFunction=t},InputText.prototype=Object.create(GameObject.prototype),InputText.prototype.start=function(){document.addEventListener("keydown",function(t){if(!this.blocked){if(this.blocked=!0,8==event.keyCode)return void(this.text=this.text.slice(0,-1));(65<=event.keyCode&&event.keyCode<90||97<=event.keyCode&&event.keyCode<122)&&(this.text+=String.fromCharCode(t.keyCode))}}.bind(this)),document.addEventListener("keyup",function(t){this.blocked=!1}.bind(this))},InputText.prototype.print=function(){ctx.textAlign=this.textaling,ctx.fillStyle=this.color,ctx.font=this.size+"px "+this.font,ctx.fillText(this.text,this.x,this.y),ctx.beginPath(),ctx.moveTo(this.x,this.y+2),ctx.lineTo(this.x+this.maxsize,this.y+2),ctx.stroke()},InputText.prototype.setText=function(t){this.text=t},InputText.prototype.setMaxSize=function(t){this.maxsize=t},InputText.prototype.setText=function(t){this.text=t},InputText.prototype.setAling=function(t){this.textaling=t},InputText.prototype.toCenter=function(t){this.textaling="center"},InputText.prototype.toEnd=function(t){this.textaling="end"},InputText.prototype.toStart=function(t){this.textaling="start"},InputText.prototype.toLeft=function(t){this.textaling="left"},InputText.prototype.toRight=function(t){this.textaling="right"},InputText.prototype.setMaxSize=function(t){this.maxsize=t},Score=function(t,e,i,s){this.name=t,this.score=0,this.alttext=text,this.sprite=null,this.text=null,this.sprite=new GameObject(e,i,s,"guiscore"),this.text=new Text(this.score,i+this.sprite.getWidth()+10,s+this.sprite.getHeight()/2)},Score.prototype.update=function(){},Score.prototype.print=function(){this.text.setText(this.score),this.text.print(),this.sprite.print()},Text.prototype=Object.create(GameObject.prototype),Text.prototype.print=function(){ctx.textAlign=this.textaling,ctx.fillStyle=this.color,ctx.font=this.size+"px "+this.font,ctx.fillText(this.text,this.x,this.y)},Text.prototype.setText=function(t){this.text=t},Text.prototype.setAling=function(t){this.textaling=t},Text.prototype.toCenter=function(){this.textaling="center"},Text.prototype.toEnd=function(){this.textaling="end"},Text.prototype.toStart=function(){this.textaling="start"},Text.prototype.toLeft=function(){this.textaling="left"},Text.prototype.toRight=function(){this.textaling="right"},Turtle.prototype.penDown=function(){this.stakemoviment.push([0,"pendown"])},Turtle.prototype.penUp=function(){this.stakemoviment.push([0,"penup"])},Turtle.prototype.changeToneFor=function(t){this.color.r+=t,this.color.g+=t,this.color.b+=t,255<this.color.r&&(this.color.r=this.color.r-255),255<this.color.g&&(this.color.g=this.color.g-255),255<this.color.b&&(this.color.b=this.color.b-255),this.stakemoviment.push(["rgb("+this.color.r+","+this.color.g+","+this.color.b+")","changecolor"])},Turtle.prototype.changeColorTo=function(t,e,i){this.color=null==e&&null==i?t:{r:t,g:e,b:i},255<this.color.r&&(this.color.r=this.color.r-255),255<this.color.g&&(this.color.g=this.color.g-255),255<this.color.b&&(this.color.b=this.color.b-255),this.stakemoviment.push(["rgb("+this.color.r+","+this.color.g+","+this.color.b+")","changecolor"])},Turtle.prototype.changeColorFor=function(t){this.changecolorup?("r"!=this.lastcolor&&255!=this.color.r?(this.color.r+=t,255<this.color.r&&(this.color.r=255,this.lastcolor="r")):"g"!=this.lastcolor&&255!=this.color.g?(this.color.g+=t,255<this.color.g&&(this.color.g=255,this.lastcolor="g")):"b"!=this.lastcolor&&255!=this.color.b&&(this.color.b+=t,255<this.color.b&&(this.color.b=255,this.lastcolor="b")),255==this.color.r&&255==this.color.g&&255==this.color.b&&(this.changecolorup=!1)):("r"!=this.lastcolor&&0!=this.color.r?(this.color.r-=t,this.color.r<0&&(this.color.r=0,this.lastcolor="r")):"g"!=this.lastcolor&&0!=this.color.g?(this.color.g-=t,this.color.g<0&&(this.color.g=0,this.lastcolor="g")):"b"!=this.lastcolor&&0!=this.color.b&&(this.color.b-=t,this.color.b<0&&(this.color.b=0,this.lastcolor="b")),0==this.color.r&&0==this.color.g&&0==this.color.b&&(this.changecolorup=!0)),this.stakemoviment.push(["rgb("+this.color.r+","+this.color.g+","+this.color.b+")","changecolor"])},Turtle.prototype.changeSizeTo=function(t){this.linew=t,this.stakemoviment.push([this.linew,"changesize"])},Turtle.prototype.changeSizeFor=function(t){this.linew+=t,this.stakemoviment.push([this.linew,"changesize"])},Turtle.prototype.print=function(){},Turtle.prototype.clean=function(){this.stakemoviment.push([this.stakemoviment.length,"clean"])},Turtle.prototype.forward=function(t){this.stakemoviment.push([t,"forward"])},Turtle.prototype.back=function(t){this.stakemoviment.push([t,"back"])},Turtle.prototype.left=function(t){this.stakemoviment.push([-t,"left"])},Turtle.prototype.right=function(t){this.stakemoviment.push([t,"right"])},Turtle.prototype.update=function(){this.pintaldline(),0<this.stakemoviment.length&&(movetox=this.x,movetoy=this.y,"pendown"==this.stakemoviment[0][1]?(this.stakealdlines.push(this.stakemoviment[0]),this.pendown=!0,this.stakemoviment.splice(0,1)):"penup"==this.stakemoviment[0][1]?(this.stakealdlines.push(this.stakemoviment[0]),this.pendown=!1,this.stakemoviment.splice(0,1)):"changecolor"==this.stakemoviment[0][1]?(this.stakealdlines.push(this.stakemoviment[0]),this.stakemoviment.splice(0,1)):"changesize"==this.stakemoviment[0][1]?(this.stakealdlines.push(this.stakemoviment[0]),this.stakemoviment.splice(0,1)):"clean"==this.stakemoviment[0][1]?(this.stakealdlines.push(this.stakemoviment[0]),this.stakemoviment.splice(0,1)):"right"==this.stakemoviment[0][1]||"left"==this.stakemoviment[0][1]?(this.stakealdlines.push([this.stakemoviment[0][0],this.stakemoviment[0][1],movetox,movetoy]),ctx.translate(movetox,movetoy),ctx.rotate(this.stakemoviment[0][0]*Math.PI/180),ctx.translate(-movetox,-movetoy),this.stakemoviment.splice(0,1)):"forward"!=this.stakemoviment[0][1]&&"back"!=this.stakemoviment[0][1]||("forward"==this.stakemoviment[0][1]?this.y-=this.velocity:"back"==this.stakemoviment[0][1]&&(this.y+=this.velocity),this.stepcurrent+=this.velocity,this.pendown&&(ctx.beginPath(),ctx.moveTo(movetox,movetoy),ctx.lineTo(this.x,this.y),ctx.strokeStyle="rgb("+this.color.r+","+this.color.g+","+this.color.b+")",ctx.stroke(),ctx.closePath()),this.stepcurrent>=this.stakemoviment[0][0]?(this.stakemoviment.splice(0,1),this.stepcurrent=0,this.stakealdlines[this.stakealdlines.length-1][2]=this.x,this.stakealdlines[this.stakealdlines.length-1][3]=this.y,this.isnewcommand=!0):this.isnewcommand?(this.isnewcommand=!1,this.stakealdlines.push([movetox,movetoy,this.x,this.y,this.stakemoviment[0][1]])):(this.stakealdlines[this.stakealdlines.length-1][2]=this.x,this.stakealdlines[this.stakealdlines.length-1][3]=this.y)),this.imgturtle.setPosition(this.x-this.imgturtle.getWidth()/2,this.y-this.imgturtle.getHeight()),this.imgturtle.print())},Turtle.prototype.pintaldline=function(){ctx.save(),ctx.setTransform(1,0,0,1,0,0);for(var t=0;t<this.stakealdlines.length;t++)"pendown"!=this.stakealdlines[t][1]?"penup"!=this.stakealdlines[t][1]?"changecolor"!=this.stakealdlines[t][1]?"changesize"!=this.stakealdlines[t][1]?"clean"!=this.stakealdlines[t][1]?"right"!=this.stakealdlines[t][1]&&"left"!=this.stakealdlines[t][1]?this.penolddown&&("forward"==this.stakealdlines[t][4]?(ctx.beginPath(),ctx.moveTo(this.stakealdlines[t][0],this.stakealdlines[t][1]),ctx.lineTo(this.stakealdlines[t][2],this.stakealdlines[t][3]),ctx.strokeStyle=this.stroke,ctx.stroke(),ctx.closePath()):"back"==this.stakealdlines[t][4]&&(ctx.beginPath(),ctx.moveTo(this.stakealdlines[t][2],this.stakealdlines[t][3]),ctx.lineTo(this.stakealdlines[t][0],this.stakealdlines[t][1]),ctx.strokeStyle=this.stroke,ctx.stroke(),ctx.closePath())):(ctx.translate(this.stakealdlines[t][2],this.stakealdlines[t][3]),ctx.rotate(this.stakealdlines[t][0]*Math.PI/180),ctx.translate(-this.stakealdlines[t][2],-this.stakealdlines[t][3])):this.stakealdlines.slice(0,this.stakealdlines[t][0]):ctx.lineWidth=this.stakealdlines[t][0]:ctx.strokeStyle=this.stakealdlines[t][0]:this.penolddown=!1:this.penolddown=!0;0==this.stakemoviment.length&&(this.imgturtle.setPosition(this.x-this.imgturtle.getWidth()/2,this.y-this.imgturtle.getHeight()),this.imgturtle.print()),ctx.restore()},Circle.prototype=Object.create(Geometric.prototype),Circle.prototype.print=function(){var t=this.x+this.radius/2,e=this.y+this.radius/2;ctx.save(),ctx.translate(t,e),ctx.rotate(this.r*Math.PI/180),ctx.translate(-t,-e),ctx.beginPath(),ctx.arc(this.x+this.radius/2,this.y+this.radius/2,this.radius,0,2*Math.PI),null!=this.fill&&(ctx.fillStyle=this.fill,ctx.fill()),null!=this.stroke&&(ctx.strokeStyle=this.stroke,ctx.stroke()),ctx.restore()},Rect.prototype=Object.create(Geometric.prototype),Rect.prototype.print=function(){this.x,this.w,this.y,this.h;ctx.save(),ctx.translate(this.x+this.w/2,this.y+this.h/2),ctx.rotate(this.r*Math.PI/180),null!=this.fill&&(ctx.fillStyle=this.fill,ctx.fillRect(-this.w/2,-this.h/2,this.w,this.h)),null!=this.stroke&&(ctx.strokeStyle=this.stroke,ctx.lineWidth=this.linew,ctx.strokeRect(-this.w/2,-this.h/2,this.w,this.h)),ctx.restore()},Triangle.prototype=Object.create(Geometric.prototype),Triangle.prototype.print=function(){var t=(this.p1[0]+this.p2[0]+this.p3[0])/3,e=(this.p1[1]+this.p2[1]+this.p3[1])/3;ctx.fillRect(t,e,10,10),ctx.save(),ctx.translate(t,e),ctx.rotate(this.r*Math.PI/180),ctx.translate(-t,-e),ctx.beginPath(),ctx.moveTo(this.p1[0],this.p1[1]),ctx.lineTo(this.p2[0],this.p2[1]),ctx.lineTo(this.p3[0],this.p3[1]),ctx.lineTo(this.p1[0],this.p1[1]),null!=this.fill&&(ctx.fillStyle=this.fill,ctx.fill()),null!=this.stroke&&(ctx.strokeStyle=this.stroke,ctx.stroke()),ctx.restore()},Triangle.prototype.translate=function(t,e){this.p1[0]+=t,this.p2[0]+=t,this.p3[0]+=t,this.p1[1]+=e,this.p2[1]+=e,this.p3[1]+=e},ReaderTextFile.prototype.nextLine=function(){return this.text[this.currentLine++]},ReaderTextFile.prototype.priorLine=function(){return this.text[--this.currentLine]},ReaderTextFile.prototype.getLine=function(t){if(t<this.text.length)return this.text[t]},StarterEngine=function(t,e){this.width=t,this.height=e,this.debugmode=!1,this.starterlogo=null,window.onload=function(){window.canvas=document.getElementById("gamecanvas"),window.ctx=canvas.getContext("2d"),this.mlevel=new ManagerScene,this.mmouse=new ManagerMouse,this.loader=new ManagerLoader(function(){this.gameReady(),this.startGame()}.bind(this)),this.teclado=new ManagerInputs,this.storage=new ManagerStorage,this.setResources(),this.beginLoad()}.bind(this),red={r:255,b:0,g:0},green={r:0,b:0,g:255},blue={r:0,b:255,g:0},yellow={r:255,b:0,g:255},cian={r:0,b:255,g:255},black={r:0,b:0,g:0},white={r:255,b:255,g:255},orange={r:255,b:0,g:150},purple={r:255,b:255,g:0},gray={r:255,b:0,g:0}},StarterEngine.prototype.beginLoad=function(){this.loader.loading()},StarterEngine.prototype.startGame=function(){(this.mlevel.currentScene=0)<this.mlevel.scenes.length&&this.mlevel.currentScene<this.mlevel.scenes.length?(this.mlevel.scenes[this.mlevel.currentScene].startFunction(),this.loopgame(ctx)):console.error("Você precisa adicionar ao menos um Level!")},StarterEngine.prototype.loopgame=function(t){this.mlevel.print(t),requestAnimFrame(function(){se.loopgame(t)})},StarterEngine.prototype.gameReady=function(){},StarterEngine.prototype.setResources=function(){},StarterEngine.prototype.startTurtle=function(){this.setResources=function(){this.loader.addStarterResource("turtle","turtle.png","image")},this.gameReady=function(){(new Scene).setFunctionStart(setTurtle)}},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};