// console.log("Cookies: " + navigator.cookieEnabled);
// console.log("Browser Language: " + navigator.browserLanguage);
// console.log("Language: " + navigator.language);
// console.log("Platform: " + navigator.platform);
// console.log("Connection Speed: " + navigator.connectionSpeed);
// console.log("User Agent: " + navigator.userAgent);
// console.log("Webdriver: " + navigator.webdriver);
// console.log("Geolocation: " + navigator.geolocation);


'use strict';

(function ($) {

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


    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    //language switch
    $('[lang="bm"]').hide();
    $('#switch-lang').click(function() {
        $('[lang="bm"]').toggle();
        $('[lang="en"]').toggle();
        alert("Language Changed");
    });

    // Onload modal
    $(window).on('load', function() {
        console.log(document.cookie + "pre modal fire");

        console.log(listCookies());

        document.cookie = "lawwaAsiaVisitCookie=true";




        var visitorCounter = 0;
        if(navigator.cookieEnabled){
            console.log("Cookies Are Enabled");
            
            console.log("test: " + document.cookie);
        
            //read cookies, check for lawwa cookie
            var visitCheck = getCookie("lawwaAsiaVisitCookie");
        
            // append if not existing
            if(!visitCheck){
                document.cookie = "lawwaAsiaVisitCookie=true";
                // update tracekr
                visitorCounter =+ 1;
                console.log(visitorCounter);
                $('#myModal').modal('show');
            }else{
                var returningUser = true;
            }
        
        }

        // if(!returningUser){
        //     $('#myModal').modal('show');
        // }
    });

    // Isotppe Filter
    $(".filter-controls li").on('click', function() {
        var filterData = $(this).attr("data-filter");

        $(".portfolio-filter, .gallery-filter").isotope({
            filter: filterData,
        });

        $(".filter-controls li").removeClass('active');
        $(this).addClass('active');
    });

    $(".portfolio-filter, .gallery-filter").isotope({
        itemSelector: '.pf-item, .gf-item',
        percentPosition: true,
        masonry: {
        // use element for option
        columnWidth: '.pf-item, .gf-item',
        horizontalOrder: true,
      }
    });

    //Masonary
    $('.portfolio-details-pic').masonry({
        itemSelector: '.pdp-item',
        columnWidth: '.pdp-item'
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".categories-slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        dots: false,
        nav: true,
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        stagePadding: 120,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 2,
                stagePadding: 0
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

})(jQuery);