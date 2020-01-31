$(document).ready(function () {

    $(".scrollup").on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});

    $(window).scroll(function () {
        if ($("html").scrollTop() >= 70) {
            $("#start").addClass("fixed-top").css("background-color", "white");
        } else {
            $("#start").removeClass("fixed-top");
        }
    });

    $("#start .nav-item").hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
    });

    // Deleting Sale Section
    var myIcon = document.querySelector(".iconSale");
    myIcon.addEventListener("click", function () {
        var sectionSale = document.querySelector("#get_sale");
        sectionSale.classList.toggle("d-none");
    });
    // End

    // Slider Start
    $('#slider .items').owlCarousel({
        loop: true,
        autoWidth: false,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,

        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    ResetText();
    TetxAnimation();
    var owl = $('#slider .owl-carousel');
    owl.owlCarousel();

    owl.on('translated.owl.carousel', function (event) {
        TetxAnimation();
    });
    owl.on('change.owl.carousel', function (event) {
        ResetText();
    });

    function ResetText() {
        $("#slider h1").css({
            top: '20%',
            opacity: '0'
        });
        $("#slider h4").css({
            top: '35%',
            opacity: '0'
        });
        $("#slider ul").css({
            top: '45%',
            opacity: '0'
        });
    }

    function TetxAnimation() {

        $("#slider .items .active h1").animate({
            top: '30%',
            opacity: '1'
        }, 800);
        $("#slider .items .active h4").animate({
            top: '45%',
            opacity: '1'
        }, 900);
        $("#slider .items .active ul").animate({
            top: '55%',
            opacity: '1'
        }, 900);
    }
    // Slider End


    //carousel start 
    $('#most_popular .item_links').owlCarousel({
        dots: false,
        loop:true,
        margin:10,
        nav:false,
        // navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:5
            },
            600:{
                items:5
            },
            1000:{
                items:5
            }
        }
    });
    //carousel end

    // Counter Start
    $('.counter').animationCounter({
        start: 220,
        end: 260,
        step: 1,
        delay: 20
      });

      $('.counter_second').animationCounter({
        start: 112,
        end: 152,
        step: 1,
        delay: 20
      });

      $('.count_parts .c1').animationCounter({
        start: 1500,
        end: 1800,
        step: 1,
        delay: 5,
        txt: "+"
      });

      $('.count_parts .c2').animationCounter({
        start: 40,
        end: 70,
        step: 1,
        delay: 5
      });

      $('.count_parts .c3').animationCounter({
        start: 450,
        end: 700,
        step: 1,
        delay: 5,
        txt: "+"
      });

      $('.count_parts .c4').animationCounter({
        start: 900,
        end: 1200,
        step: 1,
        delay: 5,
        txt: "+"
      });

    // Counter End


    // Gallery Start
    var photo = $("#our_gallery .photo")
    var titleBtn = $("#our_gallery .photo .title-btn")
    for (let i = 0; i < photo.length; i++) {
        $(photo[i]).mouseover(function () {
            $(titleBtn[i]).stop();
            $(titleBtn[i]).animate({ top: "50%" });
        })

        $(photo[i]).mouseout(function () {
            $(titleBtn[i]).stop();
            $(titleBtn[i]).animate({ top: "100%" });
        })

    }


    $("#our_gallery .isotop_item").click(function(){

   
        var category = $(this).attr("id");
        // alert(category)
    
        if(category == "all"){
             $("#our_gallery .photo").addClass("hide");
             setTimeout(function(){
                $(".photo").removeClass("hide")
             }, 200)
        }
        else {
            $("#our_gallery .photo").addClass("hide");
            setTimeout(function(){
                $("." + category).removeClass("hide")
            }, 200)
        }
    })
    // Gallery End


    // Our Teachers End
    var imgGrid = $("#our_teachers .img_grid");
    var social = $("#our_teachers .img_grid .social");
    for (let i = 0; i < imgGrid.length; i++) {
        $(imgGrid[i]).mouseover(function () {
            $(social[i]).stop();
            $(social[i]).animate({ top: "120px" });
        })

        $(imgGrid[i]).mouseout(function () {
            $(social[i]).stop();
            $(social[i]).animate({ top: "300px" });
        })

    }
    // Our Teachers End


    // Student Say Carousel start
    $(".students").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 2,
        autoWidth: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    })
    // Student Say Carousel End

    $(".clients").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 5,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 5
            }
        }

    })
    

    $('.sidebar .countdown_time').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            $(this).html(tm.strftime('<span class="countdown_box"><span class="countdown days">%D </span><span class="cd_text">Days</span></span><span class="countdown_box"><span class="countdown hours">%H</span><span class="cd_text">Hours</span></span><span class="countdown_box"><span class="countdown minutes">%M</span><span class="cd_text">Minutes</span></span><span class="countdown_box"><span class="countdown seconds">%S</span><span class="cd_text">Seconds</span></span>'));
        });
    });

});