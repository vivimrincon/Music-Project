// Spotify API
$(document).ready(function(){

    var log = console.log;
    
    $("#searchbtn").on('click',function(event){
        event.preventDefault();
        
        const value = $('#searchbar').val().trim();
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
        .catch(function(error){
            log('Error', error);
        });
    });
});