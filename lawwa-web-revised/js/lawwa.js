

    document.cookie = "lawwaAsiaVisitCookie=true";
    document.cookie = "randomCookie=randdomomomasdoad";

    function listCookies() {
        var theCookies = document.cookie.split(';');
        var aString = '';
        for (var i = 1 ; i <= theCookies.length; i++) {
            aString += i + ' ' + theCookies[i-1] + "\n";
        }
        return aString;
    }

    listCookies();

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }

    //language switch
    $('[lang="bm"]').hide();
    $('.switch-lang').click(function() {
        $('[lang="bm"]').toggle();
        $('[lang="en"]').toggle();
        alert("Language Changed");
    });

    
    // Onload modal
    $(window).on('load', function() {
        // console.log(document.cookie + "pre modal fire");

        // console.log(listCookies());

        // document.cookie = "lawwaAsiaVisitCookie=true";

        // var visitorCounter = 0;
        // if(navigator.cookieEnabled){
        //     console.log("Cookies Are Enabled");
            
        //     console.log("test: " + document.cookie);
        
        //     //read cookies, check for lawwa cookie
        //     var visitCheck = getCookie("lawwaAsiaVisitCookie");
        
        //     // append if not existing
        //     if(!visitCheck){
        //         document.cookie = "lawwaAsiaVisitCookie=true";
        //         // update tracekr
        //         visitorCounter =+ 1;
        //         console.log(visitorCounter);
        //         $('#myModal').modal('show');
        //     }else{
        //         var returningUser = true;
        //     }
        
        // }

        // // if(!returningUser){
        // //     $('#myModal').modal('show');
        // // }
    });
