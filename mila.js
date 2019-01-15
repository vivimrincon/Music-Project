 $(document).ready(function(){
    // Get the modal
    var modal = document.getElementById('myModal');
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
       modal.style.display = "block";
     }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // // When the user clicks anywhere outside of the modal, close it
   //  window.onclick = function(event) {
   //    if (event.target == modal) {
   //      modal.style.display = "none";
   //    }
   //  }
    $('#btnSignUp').on("click", function(event){
       event.preventDefault();
       



       const email = $('input[type = "email"]').val();
       const password = $('input[type = "password"]').val();
       console.log('Email', email);
       console.log ('Password', password);
      

firebase.auth().createUserWithEmailAndPassword(email, password)
.then (function(data){
   console.log('Data', data);
})
.catch(function(error){
   console.log('Error', error);


});

// $('form').get(0).reset();

dataRef().ref().push({
   email: email,
   password: password
});
dataRef().ref().on('child_added', function(addRow){
let email = addRow.val().email;
let password = addRow.val().password;

});


});

});