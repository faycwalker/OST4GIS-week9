//WHAT WORKED
/* =====================
  Global Variables
===================== */
var data;  // for holding data
var stringFilter = "";
var selectValue = 'All';
var currentSlide = 1;
var numSlides = 6;
$('#Previous').hide()

/* =====================
  Map Setup
===================== */
var mapOpts = {
  center: [40.8973, -98.5140],
  zoom: 4
};
var map = L.map('map', mapOpts);

// Another options object
var tileOpts = {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
};

//Add Data
$(document).ready(function() {
function addDataToMap(data, map) {
    var dataLayer = L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            var popupText = "<strong>State: </strong>" + feature.properties.STATE
            +  "<strong><br>Electoral College Votes:</strong> " + feature.properties['ECVOTES']
            +  "<strong><br>Percent Imprisoned: </strong>" + feature.properties['PERPRISON'];
            console.log(feature.properties['ECVOTES'])
            console.log (feature.properties['PERPRISON'])
            layer.bindPopup(popupText); }
        });
    dataLayer.addTo(map);
};

$.getJSON("https://raw.githubusercontent.com/faycwalker/prisons2/master/statepop2", function(data) { addDataToMap(data, map); });
});

function displaySlide(currentSlide) {
  $('.slide').hide();
  $(`#Slide${currentSlide}`).show();
}

$('#Previous').click(function() {
    if (currentSlide > 1) {
    currentSlide -= 1;
    }
    if (currentSlide == 1) { $("#Previous").hide();
    }
    else if (currentSlide < numSlides) {
     $('#Next').show();
    }
    if (currentSlide ==1) map.setView ([40.8973, -98.5140], 4)
    if (currentSlide ==2) map.setView ([40.8973, -98.5140], 4)
    if (currentSlide ==3) map.setView ([43.3267, -84.5361], 7)
    if (currentSlide ==4) map.setView ([44.2685, -89.6165], 7)
    if (currentSlide ==5) map.setView ([40.5906, -77.2098], 7)
    if (currentSlide ==6) map.setView ([40.8973, -98.5140], 4)
    displaySlide(currentSlide);
    console.log(currentSlide);
});

$('#Next').click(function() {
  if (currentSlide < numSlides) {
  currentSlide += 1;
    }
  if (currentSlide == numSlides) {
  $( "#Next" ).hide();
    }
   else if (currentSlide > 1) {
    $('#Previous').show();
    }
    if (currentSlide ==1) map.setView ([40.8973, -98.5140], 4)
    if (currentSlide ==2) map.setView ([40.8973, -98.5140], 4)
    if (currentSlide ==3) map.setView ([43.3267, -84.5361], 7)
    if (currentSlide ==4) map.setView ([44.2685, -89.6165], 7)
    if (currentSlide ==5) map.setView ([40.5906, -77.2098], 7)
    if (currentSlide ==6) map.setView ([40.8973, -98.5140], 4)
    displaySlide(currentSlide)
    console.log(currentSlide);
});

//ADD DATA 2
$(document).ready(function() {
function stateDatatoMap (stateData, map) {
    var dataLayer = L.geoJson(stateData, {
        onEachFeature: function(feature, layer) {
            var popupText = "State: " + feature.properties.STATE
            +  "<br>Electoral College Votes: " + feature.properties['ECVOTES']
            +  "<br>Percent Imprisoned: " + feature.properties['PERPRISON']
            "<br> 2016 Electoral Margin: " + feature.properties['VOTEMARGIN'];
            console.log(feature)
            console.log (feature.properties['PERPRISON'])
            layer.bindPopup(popupText); }
        });

    dataLayer.addTo(map);
};

$.getJSON("https://raw.githubusercontent.com/faycwalker/prisons2/master/statepop2", function(stateData) { stateDatatoMap(stateData, map); });

function PrisonDatatoMap (prisonData, map) {
  var dataLayer2 = L.geoJson (prisonData, {
    onEachFeature: function (feature, layer) {
      var popupText2 = "Facility Name" + feature.properties['Facility_N']
      + "<br> Prisoners: " + feature.properties['Prisoners']
      + "<br> Type: " + feature.properties['Type'];
      layer.bindPopup (popupText2); }
  });
  dataLayer2.addTo(map);
};

$.getJSON ("https://raw.githubusercontent.com/faycwalker/prisons2/master/convertcsv.geojson"), function(prisonData) { prisonDatatoMap(prisonData, map) };
});

// Ajax to grab json
var dataset = $.ajax("https://raw.githubusercontent.com/faycwalker/prisons2/master/prisonlatlong3.geojson")
var getAndParseData = function (data){return JSON.parse(data)}

//LAYERTOPOINT
L.geoJson(data, {
    onEachFeature: function (feature, layer) {
                           layer.bindPopup(feature.properties.Name);
                       },

                       /*
                        * When each feature is loaded from the GeoJSON this
                        * function is called. Here we create a cicle marker
                        * for the feature and style the circle marker.
                        */
                        pointToLayer: function (feature, latlng) {
                            return L.circleMarker(latlng, {
                                // Stroke properties
                                color: '#5EA4D4',
                                opacity: 0.75,
                                weight: 2,

                                // Fill properties
                                fillColor: '#5EA4D4',
                                fillOpacity: 0.25,

                                radius: 2
                            });
                        }
                    }).addTo(map);
                });
                
                function stylize (points, map) {
                  var dataPoints = L.circleMarker (latlng) {
                          pointToLayer: function (feature, latlng) {
                              return L.circleMarker(latlng)
                                  // Stroke properties
                                  color: '#5EA4D4',
                                  opacity: 0.75,
                                  weight: 2,
                                  // Fill properties
                                  fillColor: '#5EA4D4',
                                  fillOpacity: 0.25,
                                  radius: 2
                              });
                          }
                      })pointToLayer.addTo(map);
                  });

           });

           prisonData.features.geometry.coordinates

             $.getJSON("https://raw.githubusercontent.com/faycwalker/prisons2/master/convertcsv.geojson", function(data) { addDataToMap(data, map); });

             var prisonPoints = function (geJSONPoint,latlng) {return L.marker (latlng).bindPopup (geoJSONPoint.properties.Type)}
             $(document).ready(function () {
             $.ajax(locations).done(function(data) {
             })
             })


             L.circleMarker([filtered_data[i].Y, filtered_data[i].X], pathOpts)
                 .bindPopup(filtered_data[i].FACILNAME_LABEL)
                 .addTo(map);
             }
                 var addMarkers = function(map) {
                   for (i=0; i<data.length; i++) {
                     if (features[i].Prisoners  >= 100) {
                     L.marker([]).addTo(map).bindPopup(features.properties.Name);
                   }
                   else  {
                   L.marker([healthCenters[i].LAT, healthCenters[i].LNG],{icon: Tooth}).addTo(map).bindPopup(healthCenters[i].NAME);
                 }
                 }
                 }
                 addMarkers(map);

                 var data = prisonData;
                 L.geoJSON(data).addTo(map);
                 var myLayer = L.geoJSON().addTo(map);
                 myLayer.addData(geojsonFeature);

                 function addDataToMap(data, map) {
                     var dataLayer = L.geoJson(data, {
                         onEachFeature: function(feature, layer) {
                             var popupText = "Name:" + feature.properties.Facility_N;
                                 + "<br> Type:" + feature.properties.Type;
                                 + "<br> Number of Prisoners" + feature.properties.Prisoners;
                             layer.bindPopup(popupText); }
                         });
                     dataLayer.addTo(map);
                 };

               };
               var markers = new L.geoJson(data, {
                   pointToLayer: function (feature, latlng) {
                     if (feature.properties.Prisoners >= 250)
                       return L.marker(latlng, {})
                   }
               });

               markers.on('click', function() {
                   map.fitBounds(markers.getBounds());
               });
               markers.addTo(map);
