var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 20000);
var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
camera.position.z = 0;
camera.position.y = 25;
camera.lookAt(new THREE.Vector3(0,0,0));

function render(){
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

initGameEnvironment(scene, camera, renderer);
render();
