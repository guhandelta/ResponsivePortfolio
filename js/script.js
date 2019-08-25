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

    $(".items").isotope({
        filter: '*',
        animationOptions:{
            duration: 1500,
            easing: 'linear',
            queue: false
        },
    });

    
});