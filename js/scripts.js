/*-----------------------------------------------------------------------------------

    Theme Name: Moka
    Description: The Multi-Purpose Onepage Template
    Author: ui-themez
    Author URI: http://themeforest.net/user/ui-themez
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function() {

    "use strict";

    var wind = $(window);



/* ----------------------------------------------------------------
                [ Navbar ( scrollIt ) ]
-----------------------------------------------------------------*/

    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });



/* ----------------------------------------------------------------
                [ Navbar ( Change Background & Logo ) ]
-----------------------------------------------------------------*/

    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".nav-transpernt .logo> img");

        if(bodyScroll > 100){

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');

        }else{

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });


    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });


/* ----------------------------------------------------------------
                [ Progress Bar ]
-----------------------------------------------------------------*/

    wind.on('scroll', function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });



/* ----------------------------------------------------------------
                [ Sections Background Image With Data ]
-----------------------------------------------------------------*/

    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


/* ----------------------------------------------------------------
                [ Owl-Carousel ]
-----------------------------------------------------------------*/

    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop:true,
        items: 1,
        margin: 30,
        autoplay:true,
        smartSpeed:500,
        dotsEach: true,
        center: true,
        responsiveClass:true,
        responsive:{
            0:{
                center: false,
                items:1
            },
            600:{
                center: false,
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop:true,
        margin: 60,
        mouseDrag:true,
        autoplay:true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                margin: 10,
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });

    // === End owl-carousel === //

/* ----------------------------------------------------------------
                [ YouTubePopUp ]
-----------------------------------------------------------------*/

    $("a.vid").YouTubePopUp();


/* ----------------------------------------------------------------
                [ Accordion ]
-----------------------------------------------------------------*/

    $(".accordion").on("click",".title", function () {

        $(this).next().slideDown();

        $(".accordion-info").not($(this).next()).slideUp();

    });

    $(".accordion").on("click",".item", function () {

        $(this).addClass("active").siblings().removeClass("active");

    });


});





// === window When Loading === //

$(window).on("load",function (){

    var wind = $(window);

/* ----------------------------------------------------------------
                [ Preloader ]
-----------------------------------------------------------------*/ 

    $(".loading").fadeOut(500);


/* ----------------------------------------------------------------
                [ stellar ( Parallax ) ]
-----------------------------------------------------------------*/

    wind.stellar();

/* ----------------------------------------------------------------
                [ contact form validator ]
-----------------------------------------------------------------*/
    
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});