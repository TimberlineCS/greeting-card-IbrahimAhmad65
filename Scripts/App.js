//Your name
//Period
//Date

/*Provide a description about what this program does here*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */
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

function createTree() {
  var tree = document.createElement("div");
  var tri1 = createTriangle("green solid 100px");
  var tri2 = createTriangle("green solid 100px");
  var tri3 = createTriangle("green solid 100px");
  var tri4 = createTriangle("green solid 100px");
  tri1.style.top = "150px";
  tri3.style.top = "-150px";
  tree.append(tri1);
  tree.append(tri2);
  tree.append(tri3);

  return tree;
}

function snow(num) {
  for (i = 0; i < num; i++) {
    var snowParticle = document.createElement("div");
    snowParticle.style.borderRadius = "100%";
    snowParticle.style.backgroundColor = "#FAF9F6";
    snowParticle.style.borderColor = "#FAF9F6";
    snowParticle.style.position = "fixed";
    var randPosX = Math.random() * 600;
    var randPosY = Math.random() * 600;
    snowParticle.style.top = randPosX + "px";
    snowParticle.style.left = randPosY + "px";
    //   console.log(randPosX);
    snowParticle.style.width = "10px";
    snowParticle.style.height = "10px";

    document.body.append(snowParticle);
  }
}
function snow() {
  snow(10);
}

function createButton(onClick) {
  var button = document.createElement("button");
  button.onclick = onClick;
  return button;
}
document.body.style.backgroundColor = "#87CEEB";
var au = new Audio("Music/AllIWantForChristmas.mp3");
au.controls = true;
document.body.appendChild(au);
var tree = createTree();
document.body.append(tree);
tree.style.position = "fixed";
tree.style.left = "100px";
tree.style.top = "200px";

var tree2 = createTree();
document.body.append(tree2);
tree2.style.position = "fixed";
tree2.style.left = "1000px";
tree2.style.top = "200px";

var button = createButton("snow(10)");
button.innerHTML = "Press Me for a Snowy Suprise";
document.body.append(button);
snow(10);
