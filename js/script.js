/* Google Maps API */
function myMap() {
  /* Define the variable with map value */
  var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
  };

  /* set the map to fill the googleMap ID (in this case it's a DIV) */
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

/* Contact form Notification */

/* Event listener checks if the button has been clicked */
  document.getElementById("Submit").addEventListener("click", alertContact);

/* Function shows an alert to the user once the button has been pressed */

function alertContact() {
  window.alert("Thank you for getting in touch. We will be back with you shortly. (Usually 24-48 hours)");
}
