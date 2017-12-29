/* Google Maps API */
function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

/* Contact form Notification */
if(document.getElementById("Submit")){
  document.getElementById("Submit").addEventListener("click", alertContact);
}

function alertContact() {
  window.alert("Thank you for getting in touch. We will be back with you shortly. (Usually 24-48 hours)");
}
