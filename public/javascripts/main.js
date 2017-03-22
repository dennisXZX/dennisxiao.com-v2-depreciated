$(function() {

    // an Easter egg
	$(".avatar").click(function() {
		$("body").addClass("animated wobble").delay(3000).queue(function(){
			$(this).removeClass("animated wobble");
			$(this).dequeue();
		}); 
	});    

    // above-the-fold typing animation
    $("#introduction").typed({
        strings: [" Hi, I'm Dennis Xiao. <br> <span style='font-size:30px;'> I'm a front-end developer living in Sydney.<span> " ],
        typeSpeed: -5,
        showCursor: false
    });

    // fade in message
    setTimeout(function(){
        $(".message").css('visibility', 'visible').hide().fadeIn(1500)
    }, 1000);

    // smooth scroll
    $('.page-scroll').click(function(){
        // Toggle Class
        $(".active1").removeClass("active1");
        $(this).closest('li').addClass("active1");
        let theClass = $(this).attr("class");
        $('.' + theClass).parent('li').addClass('active1');
        // Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 0
        }, 500);

        return false;
    });

    // slider picture
    $('.my-slider').unslider({
        keys: false
    });

    //wow animation
    new WOW().init();

});


