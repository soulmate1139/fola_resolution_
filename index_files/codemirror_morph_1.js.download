//three.js
var codemirrorCamera, codemirrorScene, codemirrorRenderer, codemirrorLoadedSphere;

var codemirrorTicking = false,
        codemirrorLastScrollPos = 0,
        codemirrorElForHeight = document.getElementById('codemirror-container'),
        codemirrorElToMove = document.getElementById('codemirror-webgl-wrapper'),
        codemirrorElToMoveWidth = parseFloat(getComputedStyle(codemirrorElToMove, null).width.replace("px", ""));

var codemirrorWindowHalfX = window.innerWidth / 2;
var codemirrorWindowHalfY = window.innerHeight / 2;

var codemirrorClock = new THREE.Clock();

codemirrorInit();
codemirrorAnimate();
codemirroMoveCloud(window.scrollY);

//purple/pink blob
var codemirroMaterial = new THREE.MeshLambertMaterial({
    color: 0xd726f8,
    transparent: true,
    opacity: 1.0
});



function codemirrorInit() {
    // basic codemirrorScene
    codemirrorRenderer = new THREE.WebGLRenderer({
        alpha: true,
    });
    var width = window.innerWidth;
    var height = window.innerHeight;

    codemirrorRenderer.setSize(width, height);

    document.getElementById("codemirror-webgl-wrapper").appendChild(codemirrorRenderer.domElement);

    codemirrorScene = new THREE.Scene();

    codemirrorCamera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    codemirrorCamera.position.y = 0;
    codemirrorCamera.position.z = 150;

    var manager = new THREE.LoadingManager();
    var loader = new THREE.OBJLoader(manager);

    // morph_script_params.theme_path +
    loader.load('/wp-content/themes/banxa/assets/js/half_sphere.obj', function (codemirrorLoadedobject) {
        codemirrorLoadedobject.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = codemirroMaterial;
            }
        });

        // purple
        codemirrorLoadedSphere = codemirrorLoadedobject;
        codemirrorLoadedobject.scale.set(50, 50, 50);
        codemirrorLoadedobject.position.set(0, 40, 0);
        codemirrorLoadedobject.rotation.z = -90;

        codemirrorScene.add(codemirrorLoadedobject);
    });

    var light = new THREE.AmbientLight(0xffffff, 1.0);
    codemirrorScene.add(light);
}

function codemirroOnWindowResize() {
    codemirrorWindowHalfX = window.innerWidth / 2;
    codemirrorWindowHalfY = window.innerHeight / 2;

    codemirrorCamera.aspect = window.innerWidth / window.innerHeight;
    codemirrorCamera.updateProjectionMatrix();
}

function codemirroOnDocumentScroll(event) {
    codemirrorLastScrollPos = window.scrollY;

    if (!codemirrorTicking) {
        window.requestAnimationFrame(function () {
            codemirroMoveCloud(codemirrorLastScrollPos);
            codemirrorTicking = false;
        })
    }

    codemirrorTicking = true;
}

function codemirroMoveCloud(d) {
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

    var pa = ((d / codemirrorElForHeight.offsetHeight) * 100) * 1.3;

    codemirrorElToMove.style.transform = 'translatex(-' + rX + '%)';
    codemirrorElToMove.style.width = (((codemirrorElToMoveWidth / 100) * pa) + codemirrorElToMoveWidth) + 'px';
}

var windowWidth = window.innerWidth;
if (windowWidth > 540) {
    window.addEventListener('resize', codemirroOnWindowResize, false);
}

function codemirrorAnimate() {
    setTimeout(function () {
        requestAnimationFrame(codemirrorAnimate);
    }, 1000 / 25);
    codemirrorRender();
}

function codemirrorCloudShimy() {
    d = window.scrollY;
    var minY = 1;
    var maxY = 4;
    var rY = (Math.floor(Math.random() * (maxY - minY + 1)) + minY) * 100;
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    var x = ((d / codemirrorElForHeight.offsetHeight) * 100) * 1.3;
    var y = d > 100 ? d + rY : d;

    codemirrorElToMove.style.transform = 'translate(-' + rX + '%, ' + y + 'px)';
    codemirrorElToMove.style.width = (((codemirrorElToMoveWidth / 100) * x) + codemirrorElToMoveWidth) + 'px';
}

function codemirrorScrollStop(callback, refresh = 66) {
    // Make sure a valid callback was provided
    if (!callback || typeof callback !== 'function')
        return;

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

function codemirrorRender() {
    var delta = codemirrorClock.getDelta();

    if (codemirrorLoadedSphere)
        codemirrorLoadedSphere.rotation.y -= 0.5 * delta;
    if (codemirrorLoadedSphere)
        codemirrorLoadedSphere.rotation.z += 0.3 * delta;


    document.addEventListener('scroll', codemirroOnDocumentScroll, false);

    codemirrorCamera.lookAt(codemirrorScene.position);

    codemirrorRenderer.render(codemirrorScene, codemirrorCamera);
}