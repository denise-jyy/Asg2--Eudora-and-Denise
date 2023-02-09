/*Login database*/
$(document).ready(function(){
    $("#submit-button").on("click", function(e){
        e.preventDefault();
        const APIKEY = "63d37ccd3bc6b255ed0c4356";
            
        var username = $("#username").val();
            $("#username").val("")
        var password = $("#password").val();
            $("#password").val("")
        var settings = {
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
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            //checking if username and password matched database
            var i = 0;

            for (var i = 0; i < response.length; i++) {
                if(response[i].username == localStorage.getItem(username)){
                    if(response[i].password == localStorage.getItem(password)){
                        alert("Login Successful.")
                    }
                    else{
                        alert("Incorrect username or password.")
                        break;
                    }
                }
                else{
                    alert("Incorrect username or password.")
                    break;
                }
             
                
            }
        });
    })
})

