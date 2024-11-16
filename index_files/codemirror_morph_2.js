//three.js
var codemirrorCamera2, codemirrorScene2, codemirrorRender2er2, codemirrorLoadedSphere2;

var codemirrorTicking2 = false,
        codemirrorLastScrollPos2 = 0,
        codemirrorElForHeight2 = document.getElementById('codemirror-container2'),
        codemirrorElToMove2 = document.getElementById('codemirror-webgl-wrapper2'),
        codemirrorElToMove2Width2 = parseFloat(getComputedStyle(codemirrorElToMove2, null).width.replace("px", ""));

var codemirrorWindowHalfX2 = window.innerWidth / 2;
var codemirrorWindowHalfY2 = window.innerHeight / 2;

var codemirrorClock2 = new THREE.Clock();

codemirrorInit2();
codemirrorAnimate2();
codemirroMoveCloud2(window.scrollY);

//purple/pink blob
var codemirroMaterial2 = new THREE.MeshLambertMaterial({
    color: 0x2be3c6,
    transparent: true,
    opacity: 1.0
});



function codemirrorInit2() {
    // basic codemirrorScene2
    codemirrorRender2er2 = new THREE.WebGLRenderer({
        alpha: true,
    });
    var width = window.innerWidth;
    var height = window.innerHeight;

    codemirrorRender2er2.setSize(width, height);

    document.getElementById("codemirror-webgl-wrapper2").appendChild(codemirrorRender2er2.domElement);

    codemirrorScene2 = new THREE.Scene();

    codemirrorCamera2 = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    codemirrorCamera2.position.y = 0;
    codemirrorCamera2.position.z = 150;

    var manager = new THREE.LoadingManager();
    var loader = new THREE.OBJLoader(manager);

    // morph_script_params.theme_path +
    loader.load('/wp-content/themes/banxa/assets/js/half_sphere.obj', function (codemirroLoadedobject2) {
        codemirroLoadedobject2.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = codemirroMaterial2;
            }
        });

        // purple
        codemirrorLoadedSphere2 = codemirroLoadedobject2;
        codemirroLoadedobject2.scale.set(50, 50, 50);
        codemirroLoadedobject2.position.set(0, 40, 0);
        codemirroLoadedobject2.rotation.z = -90;

        codemirrorScene2.add(codemirroLoadedobject2);
    });

    var light = new THREE.AmbientLight(0xffffff, 1.0);
    codemirrorScene2.add(light);
}

function codemirroOnWindowResize2() {
    codemirrorWindowHalfX2 = window.innerWidth / 2;
    codemirrorWindowHalfY2 = window.innerHeight / 2;

    codemirrorCamera2.aspect = window.innerWidth / window.innerHeight;
    codemirrorCamera2.updateProjectionMatrix();
}

function codemirroOnDocumentScroll2(event) {
    codemirrorLastScrollPos2 = window.scrollY;

    if (!codemirrorTicking2) {
        window.requestAnimationFrame(function () {
            codemirroMoveCloud2(codemirrorLastScrollPos2);
            codemirrorTicking2 = false;
        })
    }

    codemirrorTicking2 = true;
}

function codemirroMoveCloud2(d) {
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

    var pa = ((d / codemirrorElForHeight2.offsetHeight) * 100) * 1.3;

    codemirrorElToMove2.style.transform = 'translatex(-' + rX + '%)';
    codemirrorElToMove2.style.width = (((codemirrorElToMove2Width2 / 100) * pa) + codemirrorElToMove2Width2) + 'px';
}

var windowWidth = window.innerWidth;
if (windowWidth > 540) {
    window.addEventListener('resize', codemirroOnWindowResize2, false);
}

function codemirrorAnimate2() {
    setTimeout(function () {
        requestAnimationFrame(codemirrorAnimate2);
    }, 1000 / 25);
    codemirrorRender2();
}

function codemirrorCloudShimy2() {
    d = window.scrollY;
    var minY = 1;
    var maxY = 4;
    var rY = (Math.floor(Math.random() * (maxY - minY + 1)) + minY) * 100;
    var minX = 0;
    var maxX = 70;
    var rX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    var x = ((d / codemirrorElForHeight2.offsetHeight) * 100) * 1.3;
    var y = d > 100 ? d + rY : d;

    codemirrorElToMove2.style.transform = 'translate(-' + rX + '%, ' + y + 'px)';
    codemirrorElToMove2.style.width = (((codemirrorElToMove2Width2 / 100) * x) + codemirrorElToMove2Width2) + 'px';
}

function codemirrorScrollStop2(callback, refresh = 66) {
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

function codemirrorRender2() {
    var delta = codemirrorClock2.getDelta();

    if (codemirrorLoadedSphere2)
        codemirrorLoadedSphere2.rotation.y -= 0.5 * delta;
    if (codemirrorLoadedSphere2)
        codemirrorLoadedSphere2.rotation.z += 0.3 * delta;


    document.addEventListener('scroll', codemirroOnDocumentScroll2, false);

    codemirrorCamera2.lookAt(codemirrorScene2.position);

    codemirrorRender2er2.render(codemirrorScene2, codemirrorCamera2);
}