// Ibrahim Ahmad
// 1
//Dat 12/13/2023

/*Provide a description about what this program does here*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */

var santaPos = 0;
var welcomePos = 300;
var welcomeRight = true;
/**
 * Creates an audio slider and binds it to the DOM at the correct position
 */
function createAndBindAudio() {
  var au = new Audio("Music/AllIWantForChristmas.mp3");
  au.controls = true;
  au.style.position = "fixed";
  au.style.top = "550px";
  au.style.left = "480px";
  document.body.appendChild(au);
}
/**
 * Triangle Factory
 */
function createTriangle(border) {
  var triangle = document.createElement("div");
  triangle.style.border = border;
  triangle.style.width = "0px";
  triangle.style.height = "0px";
  triangle.style.borderLeftColor = "transparent";
  triangle.style.borderRightColor = "transparent";
  triangle.style.borderTopColor = "transparent";
  triangle.style.position = "relative";
  return triangle;
}
/**
 * Circle Factory
 */
function createCircle() {
  var circle = document.createElement("div");
  circle.style.borderRadius = "100%";
  circle.style.backgroundColor = "#FAF9F6";
  circle.style.borderColor = "#FAF9F6";
  circle.style.position = "relative";
  circle.style.width = "10px";
  circle.style.height = "10px";

  return circle;
}
/**
 * @param {String} color Color of the ornament
 * @param {integer} x x position of the ornament
 * @param {integer} y y position of the ornament
 * @param  parent The DOM parent of the element
 */
function createOrnament(x, y, color, parent) {
  var ornament1 = createCircle();
  ornament1.style.left = x + "px";
  ornament1.style.top = y + "px";
  ornament1.style.backgroundColor = color;
  parent.append(ornament1);
}
/**
 * Factory for trees
 */
function createTree() {
  var tree = document.createElement("div");
  var tri1 = createTriangle("green solid 100px");
  var tri2 = createTriangle("green solid 100px");
  var tri3 = createTriangle("green solid 100px");
  tri1.style.top = "150px";
  tri3.style.top = "-150px";
  tree.append(tri1);
  tree.append(tri2);
  tree.append(tri3);
  var ornaments = ["red", "red", "blue", "blue", "darkgeen", "darkgreen"];
  ornaments.forEach((element) => {
    createOrnament(
      80 + Math.random() * 40,
      -200 - Math.random() * 130,
      element,
      tree
    );
  });
  return tree;
}

/**
 * @param {integer} num The number of snow particles to generate
 * generates num snow particles at random positions and binds them to the dom
 */
function createSnow(num) {
  for (i = 0; i < num; i++) {
    var snowParticle = document.createElement("div");
    snowParticle.style.borderRadius = "100%";
    snowParticle.style.backgroundColor = "#FAF9F6";
    snowParticle.style.borderColor = "#FAF9F6";
    snowParticle.style.position = "fixed";
    var randPosX = Math.random() * 1270;
    var randPosY = Math.random() * 650;
    snowParticle.style.top = randPosY + "px";
    snowParticle.style.left = randPosX + "px";
    //   console.log(randPosX);
    snowParticle.style.width = "10px";
    snowParticle.style.height = "10px";

    document.body.append(snowParticle);
  }
}
/**
 * Moves santa 3px to the right and resets his position if he hits the end.
 */
function iterateSanta() {
  var santa = document.getElementById("santa");
  santaPos += 3;

  if (santaPos > 1300) {
    santaPos = -200;
    santa.style.top = Math.random() * 200 + "px";
  }
  santa.style.left = santaPos + "px";
}
/**
 * Single iteration of Welcome element greeting animation. Also animates the snow button to be in sync.
 */
function iterateWelcome() {
  var welcome = document.getElementById("welcome");
  var button = document.getElementById("button");

  if (welcomeRight) {
    welcomePos += 1;
  } else {
    welcomePos -= 1;
  }
  if (welcomePos > 400) {
    welcomeRight = false;
  } else if (welcomePos < 200) {
    welcomeRight = true;
  }
  welcome.style.left = welcomePos + "px";
  button.style.left = welcomePos + 100 + "px";
}
/**
 * creates 10 random snow particles and binds them to the DOM.
 */
function snowEnd() {
  createSnow(10);
}
/**
 * General button factory
 */
function createButton(onClick) {
  var button = document.createElement("button");
  button.onclick = onClick;
  return button;
}
/**
 * creates a button for snow generation, binds it, and adds it to the DOM.
 */
function createAndBindSnowButton() {
  var button = createButton(() => snowEnd());
  button.innerHTML = "Press Me for a Snowy Suprise";
  button.id = "button";
  button.style.position = "fixed";
  button.style.top = "400px";
  document.body.append(button);
}
/**
 * creates a santa image at a random height and starts the left to right animation
 */
function createAndBindSanta() {
  var santa = document.createElement("img");
  santa.src = "Images/santa.webp";
  santa.style.position = "fixed";

  santa.id = "santa";
  santa.style.width = "100px";
  santa.style.top = Math.random() * 200 + "px";
  document.body.append(santa);

  setInterval(() => iterateSanta(), 30);
}
/**
 * creates a sun at a predifined position and binds it to the dom
 */
function createAndBindSun() {
  var sun = createCircle();
  sun.position = "fixed";
  sun.style.top = "-200px";
  sun.style.left = "1150px";
  sun.style.width = "200px";
  sun.style.height = "200px";

  sun.style.backgroundColor = "yellow";
  sun.style.borderColor = "yellow";
}
/**
 * creates a Welcome Message at a fixed height and starts the left and right animation
 */
function createAndBindWelcomeMessage() {
  var welcome = document.createElement("div");
  welcome.innerHTML = "Happy Holidays!";
  welcome.style.color = "gold";
  welcome.id = "welcome";
  welcome.style.position = "fixed";
  welcome.style.fontFamily = "cursive";
  welcome.style.fontSize = "120px";
  welcome.style.left = "300px";
  welcome.style.top = "150px";

  document.body.append(welcome);
  setInterval(() => iterateWelcome(), 100);
}
/**
 * Styles the document body
 */
function styleDocumentBody() {
  document.body.style.backgroundColor = "#87CEEB";
  document.body.style.height = "550px";
  document.body.style.width = "1200px";
  document.body.style.border = "thick dotted white";
  document.body.style.borderWidth = "40px";
  document.body.style.overflow = "hidden";
}

createAndBindAudio();
var tree = createTree();
document.body.append(tree);
tree.style.position = "fixed";
tree.style.left = "100px";
tree.style.top = "100px";

var tree2 = createTree();
document.body.append(tree2);
tree2.style.position = "fixed";
tree2.style.left = "1000px";
tree2.style.top = "100px";

createAndBindSnowButton();

createAndBindSanta();

createAndBindSun();
createAndBindWelcomeMessage();
styleDocumentBody();
