$(document).ready(function () {
  $('#btnLogIn').on("click", function (event) {
    event.preventDefault();

    const email = $('input[type = "email"]').val();
    const password = $('input[type = "password"]').val();
    console.log('Email', email);
    console.log('Password', password);

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...


    });
  });
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("signed in")
      // User is signed in.
    } else {
      console.log("signed out")
      // No user is signed in.
    }
  });



   $("#btnLogIn").on("click", function(){
    modal.style.display = "block";
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
   });
});