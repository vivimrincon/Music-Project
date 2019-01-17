$(document).ready(function () {
  $('#btnLogIn').on("click", function (event) {
    event.preventDefault();

    const email = $('input[type = "email"]').val();
    const password = $('input[type = "password"]').val();
    console.log('Email', email);
    console.log('Password', password);

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...

      modal();
      $('#exampleModalLabel').html(error.message);
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

  $('form').get(0).reset();

  function modal() {
    $("#exampleModal").modal("show")
  }
 
});
