//three.js
var camera2, scene2, renderer2, loadedSphere03;

var ticking2 = false,
    lastScrollPos2 = 0,
    elForHeight2 = document.getElementById('page-container2'),
    elToMove2 = document.getElementById('webgl_wrapper2'),
    elToMoveWidth2 = parseFloat(getComputedStyle(elToMove2, null).width.replace("px", ""));

var windowHalfX2 = window.innerWidth / 2;
var windowHalfY2 = window.innerHeight / 2;

var clock2 = new THREE.Clock();

init2();
animate2();
moveCloud2(window.scrollY);

//purple/pink blob
var material03 = new THREE.MeshLambertMaterial({
  color: 0xd726f8,
    transparent: true,
    opacity: 1.0
});



function init2() {
    // basic scene2
    renderer2 = new THREE.WebGLRenderer({
        alpha: true,
    });
    var width = window.innerWidth;
    var height = window.innerHeight;

    renderer2.setSize(width, height);

    document.getElementById("webgl_wrapper2").appendChild(renderer2.domElement);

    scene2 = new THREE.Scene();

    camera2 = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera2.position.y = 0;
    camera2.position.z = 150;

    var manager = new THREE.LoadingManager();
    var loader = new THREE.OBJLoader(manager);

    // morph_script_params.theme_path +
    loader.load('/wp-content/themes/banxa/assets/js/half_sphere.obj', function(loadedobject03) {
        loadedobject03.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = material03;
            }
        });

        // purple
        loadedSphere03 = loadedobject03;
        loadedobject03.scale.set(50, 50, 50);
        loadedobject03.position.set(0, 40, 0);
        loadedobject03.rotation.z = -90;

        scene2.add(loadedobject03);
    });

    var light = new THREE.AmbientLight(0xffffff, 1.0);
    scene2.add(light);
}

function onWindowResize2() {
    windowHalfX2 = window.innerWidth / 2;
    windowHalfY2 = window.innerHeight / 2;

    camera2.aspect = window.innerWidth / window.innerHeight;
    camera2.updateProjectionMatrix();
}

function onDocumentScroll2(event) {
    lastScrollPos2 = window.scrollY;

    if (!ticking2) {
        window.requestAnimationFrame(function(){
            moveCloud2(lastScrollPos2);
            ticking2 = false;
        })
    }

    ticking2 = true;
}

function moveCloud2(d) {
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

    var pa = ( (d / elForHeight2.offsetHeight) * 100 ) * 1.3;

    elToMove2.style.transform = 'translatex(-' + rX + '%)';
    elToMove2.style.width = ( ( (elToMoveWidth2 / 100) * pa ) + elToMoveWidth2 ) + 'px';
}

var windowWidth = window.innerWidth;
if (windowWidth > 540) {
    window.addEventListener('resize', onWindowResize2, false);
}

function animate2() {
    setTimeout(function() {
        requestAnimationFrame(animate2);
    }, 1000 / 25);
    render2();
}

function cloudShimy2() {
    d = window.scrollY;
    var minY = 1;
    var maxY = 4;
    var rY = (Math.floor(Math.random() * (maxY - minY + 1)) + minY) * 100;
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    var x = ( (d / elForHeight2.offsetHeight) * 100 ) * 1.3;
    var y = d > 100 ? d + rY : d;

    elToMove2.style.transform = 'translate(-' + rX + '%, ' + y + 'px)';
    elToMove2.style.width = ( ( (elToMoveWidth2 / 100) * x ) + elToMoveWidth2 ) + 'px';
}

function scrollStop2 (callback, refresh = 66) {
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

function render2() {
    var delta = clock2.getDelta();

    if (loadedSphere03) loadedSphere03.rotation.y -= 0.5 * delta;
    if (loadedSphere03) loadedSphere03.rotation.z += 0.3 * delta;


    document.addEventListener('scroll', onDocumentScroll2, false);

    camera2.lookAt(scene2.position);

    renderer2.render(scene2, camera2);
}