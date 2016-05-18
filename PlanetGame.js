// Render in gameport element
var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x000033});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var coinStar = new PIXI.Sprite(PIXI.Texture.fromImage("assets/YELLOW_COIN.png"));
var planet = new PIXI.Sprite(PIXI.Texture.fromImage("assets/planet_purple.png"));
var moon = new PIXI.Sprite(PIXI.Texture.fromImage("assets/moon.png"));

// Create the Solar system and add it to the stage
var solar_system = new PIXI.Container();
solar_system.position.x = 200;
solar_system.position.y = 200;
stage.addChild(solar_system);

// Add the sun to the Solar system
solar_system.addChild(coinStar);
coinStar.anchor.x = 0.5;
coinStar.anchor.y = 0.5;
coinStar.position.x = 0;
coinStar.position.y = 0;

// Create the first planet system and add it to the stage
var purple_planet_system = new PIXI.Container();
purple_planet_system.position.x = 100;
purple_planet_system.position.y = 75;
solar_system.addChild(purple_planet_system);
// Add the first planet to the system
purple_planet_system.addChild(planet);
planet.anchor.x = 0.5;
planet.anchor.y = 0.5;
planet.position.x = 0;
planet.position.y = 0;
// Add a moon to orbit the first planet in the system
purple_planet_system.addChild(moon);
moon.anchor.x = 0.5;
moon.anchor.y = 0.5;
moon.position.x = 40;
moon.position.y = 30;

function animate() {
  requestAnimationFrame(animate);

  //Rotate the planets
  purple_planet_system.rotation += 0.025;
  moon.rotation += 0.05;

  // Rotate the Solar system
  solar_system.rotation += 0.01;

  renderer.render(stage);
}
animate();
