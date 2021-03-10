 require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "esri/widgets/Legend",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home, Legend) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"6092871122084a38936bfef10e118653" 
        }
      });
      
      var camera = new Camera({
        position: [
         -90.20, // lon
         38.65, // lat
          8000000// elevation in meters
        ],
        tilt:0,
        heading: 0
      }) 

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
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
      }); //Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [MO, FL].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    MO.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -91.83,
          y: 37.96,
          z: 2500000
        },
        tilt: 0,
        heading: 0
      });
    }); 
   
     FL.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -81.51,
          y: 27.66,
          z: 2500000
        },
        tilt: 0,
        heading: 0
      });
    });

  view.when(function() {
     
    var featureLayer = scene.layers.getItemAt(0);

          var legend = new Legend({
            view: view,
            layerInfos: [{
              layer: featureLayer,
              title: "Tornado"
            }]
          });

          // Add widget to the bottom right corner of the view
          view.ui.add(legend, "bottom-right");
        });

    });
