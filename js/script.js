$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });

    // THe Idotope function is called here, just to prevent the image overlaping in the portfolio section, sometimes, while pageload

    // Isotope is called when the page loads
    $(".items").isotope({
        filter: '*', // Isotope is called with the 'all' filter, when the page loads
        animationOptions:{
            duration: 1500,
            easing: 'linear',
            queue: false
        },
    });

})



$(document).ready(() => {
    $('#slides').superslides({
        animate: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Web Developer.","Software Engineer.","UI Designer.","Blockchain Developer.","Nature Lover."],
        typeSpeed:70,
        loop: true,
        startDelay: 800,
        showCursor: false,
        shuffle: true
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 5,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:5
            }
        }
    });

    

    var skillsTopOffset =  $('.skills-section').offset().top; //offset gets the position horizontally and vertically, .top() gets the top position
    var statsTopOffset =  $('.stats-section').offset().top; 
    var countUpFinished = false;

    $(window).scroll(function(){ // The callback function gets executed, whenever the window is scrolled

        
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            // If the scroll position is greater than the pageYOffset => if the user has scrolled into the box
            // the +200 is to mentioned the JS engine to start the animation after scrolling down 200px in the box
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152
                // onStep: function(from, to, percentage){
                //     $(this.el).find('.percent').text(Math.round(percent))
                // }
            });
        }
        if(!countUpFinished && window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.counter').each(function(){
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            });
            countUpFinished = true; // Var to make sure the countup() is not called repeatedly when the user is currently on the stats section
        }
    });

    $("[data-fancybox]").fancybox();


    $("#filters  a").click(function(){
        $("#filters .current").removeClass("current");// find the element under the <ul id="filters"> with the class 'current' and remove it
        $(this).addClass("current"); // add the class 'current' to the element on which the click event was called upon(this)

        var selector = $(this).attr("data-filter");

        // Isotope is called when the item is clicked
        $(".items").isotope({
            filter: selector, // Isotope is called for the data-filter value of the element that has been clicked
            animationOptions:{
                duration: 1500,
                easing: 'linear',
                queue: false
            },
        });
        return false; //Instructing the JS compiler not to do anthing else after the above chunk of code completes
    });

    //  Scroll Navigation with NavBar links
    $("#navigator li a").click(function(e){

        e.preventDefault(); // instructing JS engine not to navigate to the element

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top; // creating a jQuery obj for an element with it's #id and getting its top offset
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
        // Calling this fn() on html and the body tag - the -50 is an offset saying not to go there completely - animation speed => slow or--
        //-- can specify in milli secs
    });

    //Sticky Nav Bar
    const nav = $("#navigator");
    const navTop = nav.offset().top; // The position of the navbar, right from the start

    $(window).on("scroll", stickyNavigationBar); // Function that gets executed on page scroll

    function stickyNavigationBar(){
        
        var body =  $("body");

        if($(window).scrollTop() >= navTop){
            // When the page is scrolled up, and the navBar becomes fixed, the height of the navBar is not taken into acc, as it's not there,--
            //-- by the about section
            body.css("padding-top", nav.outerHeight() + "px"); //nav.outerHeight() => height of the Navbar => To prevent the page jitter or jump
            body.addClass("stickyNav"); // If scrolled downwards, below the NavBar
        }
        else{
            body.css("padding-top", 0); //nav.outerHeight() => height of the Navbar
            body.removeClass("stickyNav"); // If scrolled upwards, above the NavBar
        }
    }
    
});