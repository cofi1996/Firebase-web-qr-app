
firebase.auth().onAuthStateChanged(function(user) {

    var user = firebase.auth().currentUser;

    if (user) {
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        
    } else {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
    
    if (user != null){
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome "+email_id;
    }
  });

function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
 
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Error : "  + errorMessage);
      });
}
function logout(){
    firebase.auth().signOut().then(function() {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }).catch(function(error){
        window.alert("Error")
    });
};
