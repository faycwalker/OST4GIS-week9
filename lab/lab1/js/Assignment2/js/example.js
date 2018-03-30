/* =====================
  Global Variables
===================== */
var data;  // for holding data
var stringFilter = "";
var selectValue = 'All';
var currentSlide = 1;
var numSlides = 6;
$('#Previous').hide()
$('#Slide2').hide()
$('#Slide3').hide()
$('#Slide4').hide()
$('#Slide5').hide()
$('#Slide6').hide()
/* =====================
  Map Setup
===================== */
var mapOpts = {
  center: [40.8973, -98.5140],
  zoom: 4
};
var map = L.map('map', mapOpts);

// Another options object
var tileOpts = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}) .addTo(map);

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
  if (currentSlide==1) {
    $('#Slide1').show()
  }
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
