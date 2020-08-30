if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
}

var container;

var camera, controls, scene, renderer;
var lighting, ambient, keyLight, fillLight, backLight;
var dienteActivo;
var opcionTexto=0;

var object;
var objectdelete;
init();
animate();

function init() {

    container = document.getElementById("visor");


    /* Camera */

    camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 15;
    camera.position.y = -5;


    /* Scene */

    scene = new THREE.Scene();


    ambient = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambient);

    keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
    keyLight.position.set(-100, -100, 100);

    keyLight1 = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 0.5);
    keyLight1.position.set(-100, 100, 100);

    fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    fillLight.position.set(100, 0, 100);

    backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();

    //Luces siempre encendidas 

    ambient.intensity = 0.25;
    scene.add(keyLight);
    scene.add(keyLight1);
    scene.add(fillLight);
    scene.add(backLight);

    //Inicializacion de variables de los botones


    var btnIncisivoCentral = document.getElementById("btnIncisivoCentral");
    var btnIncisivoLateral = document.getElementById("btnIncisivoLateral");
    var btnCanino = document.getElementById("btnCanino");
    var btnPrimerPremolar = document.getElementById("btnPrimerPremolar");
    var btnSegundoPremolar = document.getElementById("btnSegundoPremolar");
    var btnPrimerMolar = document.getElementById("btnPrimerMolar");
    var btnSegundoMolar = document.getElementById("btnSegundoMolar");



    /* Model */
    btnIncisivoCentral.addEventListener("click", function () {

        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setBaseUrl('assets/Incisivocentral/');
        mtlLoader.setPath('assets/Incisivocentral/');



        mtlLoader.load('material.mtl', function (materials) {

            materials.preload();

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('assets/Incisivocentral/');
            objLoader.load("modelo.obj", function (object) {

                scene.remove(objectdelete);

                objectdelete = object;

                scene.add(object);
            });

        });
        dienteActivo="IncisivoCentral";
        opcionTexto=0;
    });


    btnCanino.addEventListener("click", function () {

        var mtlLoader = new THREE.MTLLoader();
        
        

        mtlLoader.setBaseUrl('assets/Canino/');
        mtlLoader.setPath('assets/Canino/');

        mtlLoader.load('material.mtl', function (materials) {

            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('assets/Canino/');
            objLoader.load("modelo.obj", function (object) {


                scene.remove(objectdelete);

                objectdelete = object;
                scene.add(object);
            });

        });

        dienteActivo="Canino";
        opcionTexto=1;

    });

    btnSegundoPremolar.addEventListener("click", function () {

        var mtlLoader = new THREE.MTLLoader();
        
        

        mtlLoader.setBaseUrl('assets/segundopremolar/');
        mtlLoader.setPath('assets/segundopremolar/');

        mtlLoader.load('material.mtl', function (materials) {

            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('assets/segundopremolar/');
            objLoader.load("modelo.obj", function (object) {


                scene.remove(objectdelete);

                objectdelete = object;
                scene.add(object);
            });

        });

        dienteActivo="SegundoPremolar";
        opcionTexto=2;

    });

    btnPrimerPremolar.addEventListener("click", function () {

        var mtlLoader = new THREE.MTLLoader();
        
        mtlLoader.setBaseUrl('assets/PrimerPremolar/');
        mtlLoader.setPath('assets/PrimerPremolar/');

        mtlLoader.load('material.mtl', function (materials) {

            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('assets/PrimerPremolar/');
            objLoader.load("modelo.obj", function (object) {


                scene.remove(objectdelete);

                objectdelete = object;
                scene.add(object);
            });

        });

        dienteActivo="PrimerPremolar";
        opcionTexto=3;

    });


    btnIncisivoLateral.addEventListener("click", function () {

        var mtlLoader = new THREE.MTLLoader();
        
        mtlLoader.setBaseUrl('assets/IncisivoLateral/');
        mtlLoader.setPath('assets/IncisivoLateral/');

        mtlLoader.load('material.mtl', function (materials) {

            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('assets/IncisivoLateral/');
            objLoader.load("modelo.obj", function (object) {

                scene.remove(objectdelete);

                objectdelete = object;
                scene.add(object);
            });

        });

        dienteActivo="IncisivoLateral";
        opcionTexto=4;

    });

    btnPrimerMolar.addEventListener("click", function () {

        var mtlLoader = new THREE.MTLLoader();
        
        mtlLoader.setBaseUrl('assets/primerMolar/');
        mtlLoader.setPath('assets/primerMolar/');

        mtlLoader.load('material.mtl', function (materials) {

            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('assets/primerMolar/');
            objLoader.load("modelo.obj", function (object) {

                scene.remove(objectdelete);

                objectdelete = object;
                scene.add(object);
            });

        });

        dienteActivo="PrimerMolar";
        opcionTexto=5;

    });

    btnSegundoMolar.addEventListener("click", function () {

        var mtlLoader = new THREE.MTLLoader();
        
        mtlLoader.setBaseUrl('assets/segundoMolar/');
        mtlLoader.setPath('assets/segundoMolar/');

        mtlLoader.load('Material.mtl', function (materials) {

            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('assets/segundoMolar/');
            objLoader.load("Modelo.obj", function (object) {

                scene.remove(objectdelete);

                objectdelete = object;
                scene.add(object);
            });

        });

        dienteActivo="SegundoMolar";
        opcionTexto=6;

    });

    //metodos para cargar los cortes tranversal y longitudinal
    btnLongitudinal.addEventListener("click", function () {

        var mtlLoader = new THREE.MTLLoader();

        if(dienteActivo=="IncisivoCentral"){

            direccion='assets/Incisivocentral/';

        }else if(dienteActivo=="Canino"){

            direccion='assets/Canino/';

        }else if(dienteActivo=="SegundoPremolar"){

            direccion='assets/segundopremolar/';

        }else if(dienteActivo=="PrimerPremolar"){

            direccion='assets/PrimerPremolar/';

        }else if(dienteActivo=="IncisivoLateral"){

            direccion='assets/IncisivoLateral/';

        }else if(dienteActivo=="PrimerMolar"){

            direccion='assets/primerMolar/';

        }else if(dienteActivo=="SegundoMolar"){

            direccion='assets/segundoMolar/';

        }

        mtlLoader.setBaseUrl(direccion);
        mtlLoader.setPath(direccion);

        mtlLoader.load('LongitudinalMaterial.mtl', function (materials) {

            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath(direccion);
            objLoader.load("Longitudinal.obj", function (object) {


                scene.remove(objectdelete);

                objectdelete = object;
                scene.add(object);
            });

        });

    });


    btnTransversal.addEventListener("click", function () {

        var mtlLoader = new THREE.MTLLoader();

        if(dienteActivo=="IncisivoCentral"){

            direccion='assets/Incisivocentral/';

        }else if(dienteActivo=="Canino"){

            direccion='assets/Canino/';

        }else if(dienteActivo=="SegundoPremolar"){

            direccion='assets/segundopremolar/';

        }else if(dienteActivo=="PrimerPremolar"){

            direccion='assets/PrimerPremolar/';

        }else if(dienteActivo=="IncisivoLateral"){

            direccion='assets/IncisivoLateral/';

        }else if(dienteActivo=="PrimerMolar"){

            direccion='assets/primerMolar/';

        }else if(dienteActivo=="SegundoMolar"){

            direccion='assets/segundoMolar/';

        }

        mtlLoader.setBaseUrl(direccion);
        mtlLoader.setPath(direccion);

        mtlLoader.load('TransversalMaterial.mtl', function (materials) {

            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath(direccion);
            objLoader.load("Transversal.obj", function (object) {


                scene.remove(objectdelete);

                objectdelete = object;
                scene.add(object);
            });

        });

    });


    /* Cargar texto */

    btnIncisivoCentral.addEventListener("click", loadDoc);
    btnCanino.addEventListener("click", loadDoc);
    btnSegundoPremolar.addEventListener("click", loadDoc);
    btnPrimerPremolar.addEventListener("click", loadDoc);
    btnIncisivoLateral.addEventListener("click", loadDoc);
    btnPrimerMolar.addEventListener("click", loadDoc);
    btnSegundoMolar.addEventListener("click", loadDoc);


    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "dientesInfo.xml", true);
        
        xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            cargaXML(xhttp);
          }
        };
        
        xhttp.send();
    }

    function cargaXML(xml) {
        var xmlDoc = xml.responseXML;
        var dientes = xmlDoc.getElementsByTagName("DIENTE");
        console.log("opcion texto ",opcionTexto);
        //OBTENEMOS EL TEXTO CORRESPONDIENTE DEL DOCUMENTO XML
        var detalle=dientes[opcionTexto].getElementsByTagName("DETALLES")[0].textContent;
        var cara_vestibular=dientes[opcionTexto].getElementsByTagName("CARA_VESTIBULAR")[0].textContent;
        var cara_lingual=dientes[opcionTexto].getElementsByTagName("CARA_LINGUAL")[0].textContent;
        var cara_mesial=dientes[opcionTexto].getElementsByTagName("CARA_MESIAL")[0].textContent;
        var cara_distal=dientes[opcionTexto].getElementsByTagName("CARA_DISTAL")[0].textContent;
        var cara_incisal=dientes[opcionTexto].getElementsByTagName("CARA_INCISAL")[0].textContent;

        //INSERTAMOS EL TEXTO EXTRAIDO EN EL ELEMENTO DEL DOM SELECCIONADO
        document.getElementById("detalle").innerHTML = detalle;
        document.getElementById("cara_vestibular").innerHTML = cara_vestibular;
        document.getElementById("cara_lingual").innerHTML = cara_lingual;
        document.getElementById("cara_mesial").innerHTML = cara_mesial;
        document.getElementById("cara_distal").innerHTML = cara_distal;
        document.getElementById("cara_incisal").innerHTML = cara_incisal;
      }


    /* Renderer */

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));

    container.appendChild(renderer.domElement);

    /* Controls */

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;


    /* Events */

    window.addEventListener('resize', onWindowResize, false);

}

function deleteObj() {



    scene.remove(lastObj);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}


function animate() {

    requestAnimationFrame(animate);

    controls.update();

    render();

}

function render() {

    renderer.render(scene, camera);

}