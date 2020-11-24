// PASTE YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBIR0U7iKeBN8MvR76rvvlxGeNRJzHZ7r4",
    authDomain: "social-website-b581a.firebaseapp.com",
    databaseURL: "https://social-website-b581a.firebaseio.com",
    projectId: "social-website-b581a",
    storageBucket: "social-website-b581a.appspot.com",
    messagingSenderId: "1065688368511",
    appId: "1:1065688368511:web:5bcdad1938dc7b17bbc64a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}