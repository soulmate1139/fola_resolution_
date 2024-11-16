//three.js
var camera, scene, renderer, loadedSphere01;

var ticking = false,
    lastScrollPos = 0,
    elForHeight = document.getElementById('page-container'),
    elToMove = document.getElementById('webgl_wrapper'),
    elToMoveWidth = parseFloat(getComputedStyle(elToMove, null).width.replace("px", ""));

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var clock = new THREE.Clock();

init();
animate();
moveCloud(window.scrollY);

// green blob
var material01 = new THREE.MeshLambertMaterial({
      color: 0x2be3c6,
    transparent: true,
    opacity: 1.0
});


function init() {
    // basic scene
    renderer = new THREE.WebGLRenderer({
        alpha: true,
    });
    var width = window.innerWidth;
    var height = window.innerHeight;

    renderer.setSize(width, height);

    document.getElementById("webgl_wrapper").appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.y = 0;
    camera.position.z = 150;

    var manager = new THREE.LoadingManager();
    var loader = new THREE.OBJLoader(manager);

    // morph_script_params.theme_path +
    loader.load('/wp-content/themes/banxa/assets/js/half_sphere.obj', function(loadedobject01) {
        loadedobject01.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = material01;
            }
        });

        // purple
        loadedSphere01 = loadedobject01;
        loadedobject01.scale.set(50, 50, 50);
        loadedobject01.position.set(0, 40, 0);
        loadedobject01.rotation.z = -90;

        scene.add(loadedobject01);
    });

    var light = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(light);
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

function onDocumentScroll(event) {
    lastScrollPos = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function(){
            moveCloud(lastScrollPos);
            ticking = false;
        })
    }

    ticking = true;
}

function moveCloud(d) {
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

    var pa = ( (d / elForHeight.offsetHeight) * 100 ) * 1.3;

    elToMove.style.transform = 'translatex(-' + rX + '%)';
    elToMove.style.width = ( ( (elToMoveWidth / 100) * pa ) + elToMoveWidth ) + 'px';
}

var windowWidth = window.innerWidth;
if (windowWidth > 540) {
    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    setTimeout(function() {
        requestAnimationFrame(animate);
    }, 1000 / 25);
    render();
}

function cloudShimy() {
    d = window.scrollY;
    var minY = 1;
    var maxY = 4;
    var rY = (Math.floor(Math.random() * (maxY - minY + 1)) + minY) * 100;
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    var x = ( (d / elForHeight.offsetHeight) * 100 ) * 1.3;
    var y = d > 100 ? d + rY : d;

    elToMove.style.transform = 'translate(-' + rX + '%, ' + y + 'px)';
    elToMove.style.width = ( ( (elToMoveWidth / 100) * x ) + elToMoveWidth ) + 'px';
}

function scrollStop (callback, refresh = 66) {
    // Make sure a valid callback was provided
    if (!callback || typeof callback !== 'function') return;

    // Setup scrolling variable
    let isScrolling;

    // Listen for scroll events
    window.addEventListener('scroll', function (event) {

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(callback, refresh);

    }, false);
}

function render() {
    var delta = clock.getDelta();

    if (loadedSphere01) loadedSphere01.rotation.y -= 0.5 * delta;
    if (loadedSphere01) loadedSphere01.rotation.z += 0.3 * delta;


    document.addEventListener('scroll', onDocumentScroll, false);

    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}