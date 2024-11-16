//three.js
var worldMapCamera, worldMapScene, worldMapRenderer, worldMapLoadedSphere;

var worldMapTicking = false,
        worldMapLastScrollPos = 0,
        worldMapElForHeight = document.getElementById('world-map-container'),
        worldMapElToMove = document.getElementById('world-map-webgl-wrapper'),
        worldMapElToMoveWidth = parseFloat(getComputedStyle(worldMapElToMove, null).width.replace("px", ""));

var worldMapWindowHalfX = window.innerWidth / 2;
var worldMapWindowHalfY = window.innerHeight / 2;

var clock1 = new THREE.Clock();

worldMapInit();
worldMapAanimate();
worldMapMoveCloud(window.scrollY);

//blue blob
var worldMapMaterial = new THREE.MeshLambertMaterial({
    color: 0x184cce,
    transparent: true,
    opacity: 1.0
});



function worldMapInit() {
    // basic worldMapScene
    worldMapRenderer = new THREE.WebGLRenderer({
        alpha: true,
    });
    var width = window.innerWidth;
    var height = window.innerHeight;

    worldMapRenderer.setSize(width, height);

    document.getElementById("world-map-webgl-wrapper").appendChild(worldMapRenderer.domElement);

    worldMapScene = new THREE.Scene();

    worldMapCamera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    worldMapCamera.position.y = 0;
    worldMapCamera.position.z = 150;

    var manager = new THREE.LoadingManager();
    var loader = new THREE.OBJLoader(manager);

    // morph_script_params.theme_path +
    loader.load('/wp-content/themes/banxa/assets/js/half_sphere.obj', function (worldMapLoadedobject) {
        worldMapLoadedobject.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = worldMapMaterial;
            }
        });

        // purple
        worldMapLoadedSphere = worldMapLoadedobject;
        worldMapLoadedobject.scale.set(50, 50, 50);
        worldMapLoadedobject.position.set(0, 40, 0);
        worldMapLoadedobject.rotation.z = -90;

        worldMapScene.add(worldMapLoadedobject);
    });

    var light = new THREE.AmbientLight(0xffffff, 1.0);
    worldMapScene.add(light);
}

function worldMapOnWindowResize() {
    worldMapWindowHalfX = window.innerWidth / 2;
    worldMapWindowHalfY = window.innerHeight / 2;

    worldMapCamera.aspect = window.innerWidth / window.innerHeight;
    worldMapCamera.updateProjectionMatrix();
}

function worldMapOnDocumentScroll(event) {
    worldMapLastScrollPos = window.scrollY;

    if (!worldMapTicking) {
        window.requestAnimationFrame(function () {
            worldMapMoveCloud(worldMapLastScrollPos);
            worldMapTicking = false;
        })
    }

    worldMapTicking = true;
}

function worldMapMoveCloud(d) {
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

    var pa = ((d / worldMapElForHeight.offsetHeight) * 100) * 1.3;

    worldMapElToMove.style.transform = 'translatex(-' + rX + '%)';
    worldMapElToMove.style.width = (((worldMapElToMoveWidth / 100) * pa) + worldMapElToMoveWidth) + 'px';
}

var windowWidth = window.innerWidth;
if (windowWidth > 540) {
    window.addEventListener('resize', worldMapOnWindowResize, false);
}

function worldMapAanimate() {
    setTimeout(function () {
        requestAnimationFrame(worldMapAanimate);
    }, 1000 / 25);
    worldMapRender();
}

function worldMapCloudShimy() {
    d = window.scrollY;
    var minY = 1;
    var maxY = 4;
    var rY = (Math.floor(Math.random() * (maxY - minY + 1)) + minY) * 100;
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    var x = ((d / worldMapElForHeight.offsetHeight) * 100) * 1.3;
    var y = d > 100 ? d + rY : d;

    worldMapElToMove.style.transform = 'translate(-' + rX + '%, ' + y + 'px)';
    worldMapElToMove.style.width = (((worldMapElToMoveWidth / 100) * x) + worldMapElToMoveWidth) + 'px';
}

function worldMapScrollStop(callback, refresh = 66) {
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

function worldMapRender() {
    var delta = clock1.getDelta();

    if (worldMapLoadedSphere)
        worldMapLoadedSphere.rotation.y -= 0.5 * delta;
    if (worldMapLoadedSphere)
        worldMapLoadedSphere.rotation.z += 0.3 * delta;


    document.addEventListener('scroll', worldMapOnDocumentScroll, false);

    worldMapCamera.lookAt(worldMapScene.position);

    worldMapRenderer.render(worldMapScene, worldMapCamera);
}