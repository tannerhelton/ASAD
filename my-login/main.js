var profile;
var authResponse;

function onSignIn(googleUser) {
  authResponse = googleUser.getAuthResponse();
  profile = googleUser.getBasicProfile();

  console.log("google user =", googleUser);
  console.log("authResponse =", authResponse);
  console.log("profile", profile);
  console.log("idToken =", authResponse.id_token);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5500/idtoken");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-url-encoded");
  xhr.onload = function() {
    console.log("response recieved:", xhr.responseText);
  };
  xhr.send("idtoken=", authResponse.id_token);
}

function onFailure(error) {
  console.log("error", error);
}
