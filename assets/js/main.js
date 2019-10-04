var NavbarSticky = (function () {
    // Variables
    var $nav = $('.top-sticky'),
        navOffsetTop = 0,
        scrolling = false;
    // Methods
    function init($this) {
        // our current vertical position from the top
        var scrollTop = $(window).scrollTop(),
            navHeight = $this.outerHeight();
        if (scrollTop > (navOffsetTop + 200)) {
            $this.addClass('sticky');
            $("body").css("padding-top", navHeight + "px");
        } else {
            $this.removeClass('sticky');
            $("body").css("padding-top", "0");
        }
    }
    // Events
    if ($nav.length) {
        navOffsetTop = $nav.offset().top;
        $(window).on({
            'scroll': function () {
                scrolling = true;
                setInterval(function () {
                    if (scrolling) {
                        scrolling = false;
                        // Sticky navbar init
                        init($nav);
                    }
                }, 250);
            }
        })
    }
})();
$('[data-toggle="search"]').on('click', function () {
    $('.search-area-wrapper').show();
});

$('.search-area-wrapper .close-btn').on('click', function () {
    $('.search-area-wrapper').hide();
});
$('.intro-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        992:{
            items:3
        }
    }
})