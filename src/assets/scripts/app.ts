// javascript
const toggleSiteMenu = () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuSite = document.getElementById('site-nav');
    menuSite.classList.toggle('site-nav--open');
    menuToggle.classList.toggle('open');
}

$(document).ready(function () {
    $(window).scroll(windowScrolled);
    var scrollLink = $('.scroll');

    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - 82
        }, 1000);
    });
});

function windowScrolled() {
    var scrolled = $(window).scrollTop();
    var scrollLink = $('.scroll');

    scrollLink.each(function () {
        var sectionOffset = $(this.hash).offset().top - 85;

        if (sectionOffset <= scrolled) {
            $(this).parent('.site-nav__item').addClass('active');
            $(this).parent('.site-nav__item').siblings().removeClass('active');
        }
    })

    if (scrolled >= 82) {
        $('#sheader').addClass('sheader--scrolled');
    } else {
        $('#sheader').removeClass('sheader--scrolled');
    }
}

/* window.addEventListener('scroll', (ev) => {
    const header = document.querySelector('.sheader')
    if(this.scrollY >= 50) {
        header.classList.add('sheader--scrolled')
    } else if(this.scrollY == 0) {
        header.classList.remove('sheader--scrolled')
    }
}) */

/* $(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // get all slides
    var slides = document.querySelectorAll("section.ssection");

    // create scene for every slide
    for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
            .setPin(slides[i])
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
}); */
