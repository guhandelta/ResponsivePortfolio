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
        startDelay: 1000,
        showCursor: false,
        shuffle: true
    });

});