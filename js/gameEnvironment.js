
function initGameEnvironment(scene, camera, renderer){
  //three updates
  THREEx.WindowResize(renderer, camera);

  //model updates
  drawFloor(scene);
  drawSkyBox(scene);
  drawLights(scene);
  drawCube(scene);
}

function drawFloor(scene){
  var floorTexture = new THREE.ImageUtils.loadTexture('img/grass.png');
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set(10,10);
  var floorMaterial = new THREE.MeshBasicMaterial({map:floorTexture, side:THREE.DoubleSide});
  var floorGeometry = new THREE.PlaneBufferGeometry(5000,5000,10,10);
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.position.z=-1;
  floor.rotation.x=Math.PI/2;
  scene.add(floor);
}

function drawSkyBox(scene){
  var directions = ['xpos','xneg','ypos','yneg','zpos','zneg'];
  var skyGeometry = new THREE.BoxGeometry(5000, 5000, 5000);
  var materialArray = [];
  for(var i in directions){
    materialArray.push(new THREE.MeshBasicMaterial({
      map:THREE.ImageUtils.loadTexture('img/sky-'+directions[i]+'.png'),
      side:THREE.BackSide
    }));
  }
  var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
  var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
  scene.add(skyBox);
}

function drawLights(scene){
  var light = new THREE.PointLight(0xffffff);
  light.position.set(100,2650,100);
  scene.add(light);
}

function drawCube(scene){
  var geometry = new THREE.BoxGeometry(1,1,1);
  var material = new THREE.MeshBasicMaterial({color:0xff0000});
  var cube = new THREE.Mesh(geometry, material);
  cube.position.y = 5;
  scene.add(cube);
}