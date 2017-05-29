$(document).ready(function() {

    $('.block_slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
         responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
    });

    $('.about_our_equip__item_slide.owl-carousel').owlCarousel({
        animateOut: 'flipOutX',
        animateIn: 'flipInX',
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<div class="slide-prev"></div>', '<div class="slide-next"></div>']
    });

    $('img.zoom').click(function() {
        $('.z-shadow').toggleClass('zoomed')
        $('img.zoom').toggleClass('zoomify')
    });

    $('.z-shadow').click(function() {
        $('.z-shadow').toggleClass('zoomed')
    });

    $("#tabs").tabs();

    $('#a1').click(function() {
        $('#t1').toggleClass('display_on');
        $('#' + $(this).attr('id') + '.title_arrow').toggleClass('rotate');
    })

    $('#a2').click(function() {
        $('#t2').toggleClass('display_on');
        $('#' + $(this).attr('id') + '.title_arrow').toggleClass('rotate');
    })

    $('#a3').click(function() {
        $('#t3').toggleClass('display_on');
        $('#' + $(this).attr('id') + '.title_arrow').toggleClass('rotate');
    })

    $('#a4').click(function() {
        $('#t4').toggleClass('display_on');
        $('#' + $(this).attr('id') + '.title_arrow').toggleClass('rotate');
    })

    $('.menu_320').click(function() {
        $('.menu_320_list').toggle();
    })

});
