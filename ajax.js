//use of 3 diffrent api keys:
//*Use of songkick API response object list of concert and based on geolocated upcoming events 
//*Use of songkick API response object reference on artist ID 
//*use of mailbox with  SENDGRID api?


const form = document.querySelector("form");
const artist_section = document.querySelector(".artist_section");
const venue_section = document.querySelector(".venue_section");
const date_section = document.querySelector(".date_section");
const metro_section = document.querySelector(".metro_section");
const locationElement = document.querySelector(".location p");
// Api key
const key = "udl9x9itvOgya1sx";


// check if browser supports geolocation
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);

} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}
// set user's position
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getCity(latitude, longitude);
}

// show error when there is an issue with geolocation service
function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}
// Get gig list from api provider

// function getLocation(latitude, longitude) {
//     let api = `https://api.songkick.com/api/3.0/search/locations.json?location=clientip&apikey=udl9x9itvOgya1sx`;
//     // console.log(api);
//     //use searchparagrams
//     fetch(api)
//         .then(function(response) {
//             let data = response.json();
//             return data;
//         })
//         .then(function(data) {
//             //write fuction to  return list of gigs based on geo location of clientIp
//             //use of apend child?
//         })
//         //display list
//         .then(function() {
//             displayList();
//         });}


$.getJSON("https://api.songkick.com/api/3.0/events.json?location=clientip&apikey=udl9x9itvOgya1sx&jsoncallback=?",
  function(data) {
    // data is JSON response object
  });



// Dislay concertlist to UI
