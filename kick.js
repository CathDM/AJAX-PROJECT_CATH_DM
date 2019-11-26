// callback used to process the JSONP object
var genConcertHTML = function(json) {
    var myHTML = ''

    // iterate through the entries in the results
    for (var entry = 0, entries = json.resultsPage.totalEntries; entry < entries; entry++) {
        // grab the elements we are interested in
        var event = json.resultsPage.results.calendarEntry[entry].event;
        var reason = json.resultsPage.results.calendarEntry[entry].reason;
        var date = event.start.date;
        var venue = event.venue.displayName;
        var uri = event.uri;
        var status = reason.attendance == 'im_going' ? "I'm going" : "Maybe";

        // put these elements into our generated HTML
        myHTML += '<div class="page-header"><h3>'
        myHTML += '<a href="' + uri + '">' + date + ' at ' + venue + '</a> - ' + status + '</h3>';

        // further iterate through the artists at a concert and generate an unordered list
        myHTML += '<ul>'
        for (var perf = 0, perfs = event.performance.length; perf < perfs; perf++) {
            var artist = event.performance[perf].artist;
            var name = artist.displayName;
            var band_uri = artist.uri;
            myHTML += '<li><a href="' + band_uri + '">' + name + '</a></li>';
        }
        myHTML += '</ul></div>'; 
    }
    document.getElementById('songkick').innerHTML = myHTML;
}

// setup Songkick API call
var sk_base     = "https://api.songkick.com/api/3.0/users/<user>/";
var sk_method   = "calendar.json?reason=attendance";
var sk_apikey   = "<apikey>";
var sk_callback = "&jsoncallback=genConcertHTML"; 
var sk_call     = sk_base + sk_method + "&apikey=" + sk_apikey + sk_callback;

// create script element, point at API call, and attach to page
var script = document.createElement('script');
script.src = sk_call;
document.getElementsByTagName('head')[0].appendChild(script);