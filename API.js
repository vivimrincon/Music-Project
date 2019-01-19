// Spotify API
// Client Credentials Flow
$(document).ready(function(){

    var log = console.log;
    
    $("#searchbtn").on('click',function(event){
        event.preventDefault();
        
        const value = $('#searchbar').val().trim();
        log('value', value);
        var spotURL = "https://api.spotify.com/v1/search?q=" + value + "&type=track%2Cartist&limit=5";
        
        $.ajax({
            url: spotURL,
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + 'BQA_oUbPqHxUqVm5Ha5mWus3ghpHdJ2nvgSUk1paaD32AwVZbKSb6qja53pTXzDYvwnRvtqNtBy_3C6MSg9HBAbyM4Q2MH3-itgdOlQ-seVeboINLC5g74u-7O0PE4dgM83BGBQprmi_C5ecgFliLKbccw'
            },

        })
        .then(function(rdata){
            log('Data', rdata);
            // hides the albums on the homepage if the user searches for an artist in the search bar.
            $('#loadedhp').addClass('hidden');
            $('#newdatadisplay').addClass('active');
            const firstartist = rdata.artists.items[0]; //data.artist
            const firsttrack = rdata.tracks.items[0] //data.track
            log('1track', firstartist);
            var albumlogo = firstartist.images[1].url;
            var imgheight = firstartist.images[1].height;
            var imgwidth = firstartist.images[1].width;

            var artistname = firstartist.name;

            var audio = firsttrack.preview_url;

            $('#newdataimgdisplay img:first-child').attr("src", albumlogo);
            $('#newdataimgdisplay img:first-child').attr("height", imgheight);
            $('#newdataimgdisplay img:first-child').attr("width", imgwidth);
            $('#newdataimgdisplay img:first-child').attr("alt", artistname);

            $('#headername').text(artistname);

            $('audio#myAudio source:first-child').attr("src", audio);

            log('artisitname',artistname);
            log('img1',albumlogo);
            log('musictrack',firsttrack);
            
        })
        .catch(function(error){
            log('Error', error);
        })
    });
});


// $(document).ready(function(){
//     $.ajax({
//         url: "https://accounts.spotify.com/authorize",
//         method: "GET",
//         grant_type: TOKEN,
//         client_id: CLIENTID,
//         response_type: 'code',
//         redirect_uri: URI,
//         show_dialog: true,
//     })
// });

// $(document).ready(function(){
//     $('#searchimg').on('click',function(){
//         $.ajax({
//             url: "https://accounts.spotify.com/api/token",
//             method: "POST",
//             header: {
//                 'Authorization': Basic <base64 encoded CLIENTID:CLIENTSECRET>
//             },
//             body: {
//                 grant_type: client_credentials,
//             },
//         })
//     })
// });

// //Bandcamp API
// $(document).ready(function(){

//     $('#searchimg').on('click',function(){
//         const source = $(this).val();
//         log('source',source);
//         var bandURL = 
//     })
// })
