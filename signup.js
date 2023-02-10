/* Signup database*/
$(document).ready(function(){
    const APIKEY = "63d37ccd3bc6b255ed0c4356";
    //event listener
    $("#submit-button").on("click", function(e){
        e.preventDefault();		

        var username = $("#username").val();
        $("#username").val("")
        if (username == ""){
            alert("Username is required.")
        }
        var email = $("#email").val();
        $("#email").val("")
        if (email == ""){
            alert("Email is required.")
        }
        var password = $("#password").val();
        $("#password").val("")
        if (password == ""){
            alert("Password is required.")
        }
        $("#confirmPassword").val("")

        var accountSettings = {
            "async": true,
            "crossDomain": true,
            "url": "https://learnwithblook-2399.restdb.io/rest/login",
            "method": "GET",
            "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
            }
        }
        
        $.ajax(accountSettings).done(function (accountResponse) {
            console.log(accountResponse);
            //checking if username and password matched database
            var i = 0;

            for (var i = 0; i < accountResponse.length; i++) {
                console.log(accountResponse[i].username);
                if(accountResponse[i].username == username){
                        alert("There's a username already registered to the database.")
                }
            }
        });

        var jsondata = {"username": username,"email": email,"password": password};
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://learnwithblook-2399.restdb.io/rest/login",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
        }
        alert("Account created successfully!");
        
        $.ajax(settings).done(function (response) {           
            // if (response.length > 0){
            //     alert("Account created successfully!");
            // }
          });
    })
})



