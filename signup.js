
/* Signup database*/

$(document).ready(function(){
    const APIKEY = "63d37ccd3bc6b255ed0c4356";
    
    //event listener
    $("#submit-button").on("click", function(e){
        e.preventDefault();

        var username = $("#username").val();
        $("#username").val("")
        var email = $("#email").val();
        $("#email").val("")
        var password = $("#password").val();
        $("#password").val("")
        $("#confirmPassword").val("")

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
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            
          });
    })

})

function showSubmitmessage() {
    alert("Account created successfully!");
}


