/*$(document).ready(function() {
  $('#loginForm').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
      
      var username = $('#username').val();
      var password = $('#password').val();
      
      $.ajax({
          type: 'POST',
          url: 'Login.php', // Your server-side script
          //contentType: "application/json; charset=utf-8",
          //dataType: "json",
          data: {
              username: username,
              password: password
          },
          success: function(response) {
              $('#result').html(response); // Display the response
          }
      });
  });
});*/

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "Login.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;
            if (response == "success") {
                alert("Login successful");
            } else {
                alert("Login failed");
            }
        }
    };
    //xhr.send("username=" + username + "&password=" + password);
}
