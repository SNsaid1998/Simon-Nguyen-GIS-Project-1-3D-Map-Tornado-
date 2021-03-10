require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      // initial camera 
      var camera = new Camera({
        position: [
           -71.060217,
          42.358,
          1500// elevation in meters
        ],
        tilt:45,
        heading: 0
      })
      
      // add camera for a more centered downtown view
      var camera2 = new Camera({
        position: [
           -71.060217,
          42.329,
          2000// elevation in meters
        ],
        tilt:30,
        heading: 10
      })
      
      // add camera to view downtown Boston from Ocean
      var camera3 = new Camera({
        position: [
           -71.00,
          42.335,
          1000// elevation in meters
        ],
        tilt:70,
        heading: -60
      })
      
      // add camera for home button
      var homecamera = new Camera({
        position: [
           -71.1167,
          42.3770,
          150000// elevation in meters
        ],
        tilt:0,
        heading: 0
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global", //an error would pop up saying Boston major projects - MajorProjectsBuildings cannot be added, Geographic coordinate systems are not supported for a Scene Layer in local scenes.
        camera: homecamera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [bos, bos2, bosDT].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    bos.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
  
    bos2.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
      
   bosDT.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
      });
    }); 


    });
