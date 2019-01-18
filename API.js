// Spotify API
// 1b20fe021bbf4664894a68f046f7f941
log = console.log();

//endpoints https://api.spotify.com/v1/search
//HTTP method "GET"

// value is the search bar with the id search
const value = $('#search').val();
log('value', value);
var queryURL = "https://api.spotify.com/v1/search?q=" + value + "&type=track";

$.ajax({
    url: queryURL,
    method: "GET",
    header: {
        autorization: 'Bearer ' + TOKEN
    } 
})
.then(function(rdata){
    log('Data', rdata);
})