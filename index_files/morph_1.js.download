//three.js
var camera1, scene1, renderer1, loadedSphere02;

var ticking1 = false,
    lastScrollPos1 = 0,
    elForHeight1 = document.getElementById('page-container1'),
    elToMove1 = document.getElementById('webgl_wrapper1'),
    elToMoveWidth1 = parseFloat(getComputedStyle(elToMove1, null).width.replace("px", ""));

var windowHalfX1 = window.innerWidth / 2;
var windowHalfY1 = window.innerHeight / 2;

var clock1 = new THREE.Clock();

init1();
animate1();
moveCloud1(window.scrollY);

//blue blob
var material02 = new THREE.MeshLambertMaterial({
  color: 0x184cce,
  transparent: true,
   opacity: 1.0
});



function init1() {
    // basic scene1
    renderer1 = new THREE.WebGLRenderer({
        alpha: true,
    });
    var width = window.innerWidth;
    var height = window.innerHeight;

    renderer1.setSize(width, height);

    document.getElementById("webgl_wrapper1").appendChild(renderer1.domElement);

    scene1 = new THREE.Scene();

    camera1 = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera1.position.y = 0;
    camera1.position.z = 150;

    var manager = new THREE.LoadingManager();
    var loader = new THREE.OBJLoader(manager);

    // morph_script_params.theme_path +
    loader.load('/wp-content/themes/banxa/assets/js/half_sphere.obj', function(loadedobject02) {
        loadedobject02.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = material02;
            }
        });

        // purple
        loadedSphere02 = loadedobject02;
        loadedobject02.scale.set(50, 50, 50);
        loadedobject02.position.set(0, 40, 0);
        loadedobject02.rotation.z = -90;

        scene1.add(loadedobject02);
    });

    var light = new THREE.AmbientLight(0xffffff, 1.0);
    scene1.add(light);
}

function onWindowResize1() {
    windowHalfX1 = window.innerWidth / 2;
    windowHalfY1 = window.innerHeight / 2;

    camera1.aspect = window.innerWidth / window.innerHeight;
    camera1.updateProjectionMatrix();
}

function onDocumentScroll1(event) {
    lastScrollPos1 = window.scrollY;

    if (!ticking1) {
        window.requestAnimationFrame(function(){
            moveCloud1(lastScrollPos1);
            ticking1 = false;
        })
    }

    ticking1 = true;
}

function moveCloud1(d) {
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

    var pa = ( (d / elForHeight1.offsetHeight) * 100 ) * 1.3;

    elToMove1.style.transform = 'translatex(-' + rX + '%)';
    elToMove1.style.width = ( ( (elToMoveWidth1 / 100) * pa ) + elToMoveWidth1 ) + 'px';
}

var windowWidth = window.innerWidth;
if (windowWidth > 540) {
    window.addEventListener('resize', onWindowResize1, false);
}

function animate1() {
    setTimeout(function() {
        requestAnimationFrame(animate1);
    }, 1000 / 25);
    render1();
}

function cloudShimy1() {
    d = window.scrollY;
    var minY = 1;
    var maxY = 4;
    var rY = (Math.floor(Math.random() * (maxY - minY + 1)) + minY) * 100;
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    var x = ( (d / elForHeight1.offsetHeight) * 100 ) * 1.3;
    var y = d > 100 ? d + rY : d;

    elToMove1.style.transform = 'translate(-' + rX + '%, ' + y + 'px)';
    elToMove1.style.width = ( ( (elToMoveWidth1 / 100) * x ) + elToMoveWidth1 ) + 'px';
}

function scrollStop1 (callback, refresh = 66) {
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

function render1() {
    var delta = clock1.getDelta();

    if (loadedSphere02) loadedSphere02.rotation.y -= 0.5 * delta;
    if (loadedSphere02) loadedSphere02.rotation.z += 0.3 * delta;


    document.addEventListener('scroll', onDocumentScroll1, false);

    camera1.lookAt(scene1.position);

    renderer1.render(scene1, camera1);
}