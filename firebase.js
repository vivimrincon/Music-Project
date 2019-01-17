// Initialize Firebase
var config = {
  apiKey: "AIzaSyBIoPqH9dh1XcCJPrnDzsfvPRAviCnD_9Q",
  authDomain: "music-project-1bd3b.firebaseapp.com",
  databaseURL: "https://music-project-1bd3b.firebaseio.com",
  projectId: "music-project-1bd3b",
  storageBucket: "music-project-1bd3b.appspot.com",
  messagingSenderId: "90566983225"
};
firebase.initializeApp(config);

var dataRef = firebase.database;
    var auth = firebase.auth;