var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","c4e310e0-8174-4127-a46e-0cbcc94b488b","f00a4595-1be7-47a8-9130-270ad2af304a","efda5755-34fa-41b1-bef7-624c790fb675","be0eaa0a-1d6f-4622-9dd4-a7e8d9404395","a10d6d3e-790d-4967-a803-fa1ccc07e52b","d6c56026-1322-423c-8fa6-3473aedcf846","f2c21d8c-e29b-4946-a738-4474d547a565"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"uCsvOjGnXlN6cC3bU.hGuE9CgX9o7KSN","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"cCSgSKL0hI9m4bDHbZAXQ6pXKvjtDM0Z","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"qHn9ELn6IML7M8e670zEKhbFZsNypt1M","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"f00a4595-1be7-47a8-9130-270ad2af304a":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"efda5755-34fa-41b1-bef7-624c790fb675":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/XA3.aTe37caWTDIkZhc4pq8ueAwsYaFN/category_retro/spacebattle_03.png","frameSize":{"x":260,"y":140},"frameCount":1,"looping":true,"frameDelay":2,"version":"XA3.aTe37caWTDIkZhc4pq8ueAwsYaFN","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":140},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XA3.aTe37caWTDIkZhc4pq8ueAwsYaFN/category_retro/spacebattle_03.png"},"be0eaa0a-1d6f-4622-9dd4-a7e8d9404395":{"name":"enemy","sourceUrl":null,"frameSize":{"x":260,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"_7BoDa8UKRdAJzhdwEy3VB8hufY6djXG","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":200},"rootRelativePath":"assets/be0eaa0a-1d6f-4622-9dd4-a7e8d9404395.png"},"a10d6d3e-790d-4967-a803-fa1ccc07e52b":{"name":"enemy3","sourceUrl":"assets/v3/animations/SO9vMOsZYUWOD28mStZRh_650fxyQvSfqUWBXQLheUw/a10d6d3e-790d-4967-a803-fa1ccc07e52b.png","frameSize":{"x":260,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"2XEQGCyF5E65Teh6Tmn5OHSbCpIk_sga","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":200},"rootRelativePath":"assets/v3/animations/SO9vMOsZYUWOD28mStZRh_650fxyQvSfqUWBXQLheUw/a10d6d3e-790d-4967-a803-fa1ccc07e52b.png"},"d6c56026-1322-423c-8fa6-3473aedcf846":{"name":"enemy2","sourceUrl":"assets/v3/animations/SO9vMOsZYUWOD28mStZRh_650fxyQvSfqUWBXQLheUw/d6c56026-1322-423c-8fa6-3473aedcf846.png","frameSize":{"x":260,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"AJwWqEEN2W8lBf4aoxaFWoBUHk76wtIo","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":200},"rootRelativePath":"assets/v3/animations/SO9vMOsZYUWOD28mStZRh_650fxyQvSfqUWBXQLheUw/d6c56026-1322-423c-8fa6-3473aedcf846.png"},"f2c21d8c-e29b-4946-a738-4474d547a565":{"name":"net1","sourceUrl":"assets/api/v1/animation-library/gamelab/aw7_doB10ItjDSWSmC1QfTPY7OeE566d/category_retro/spacebattle_10.png","frameSize":{"x":216,"y":290},"frameCount":1,"looping":true,"frameDelay":2,"version":"aw7_doB10ItjDSWSmC1QfTPY7OeE566d","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":290},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aw7_doB10ItjDSWSmC1QfTPY7OeE566d/category_retro/spacebattle_10.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var b = createSprite(200,200);
 b.setAnimation("b")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0


net.setAnimation("net1")
net.scale=.2,5;
hero.setAnimation("hero1");
hero.scale=.1,7;
enemy1.setAnimation("enemy");
enemy1.scale=.1;
enemy2.setAnimation("enemy2");
enemy2.scale=.1;
enemy3.setAnimation("enemy3");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//plano de fundo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-5
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+5
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-5
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+5
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_explosion/8bit_explosion.mp3")
  hero.x=200
  hero.y=350
  death = death+1
 

}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
  
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
