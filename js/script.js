$(document).ready(function(){
  $('.block_slider.owl-carousel').owlCarousel({
    items:5,
    loop:true,
    margin:0,
    dots: false,
  });
  $('.about_our_equip__item_slide.owl-carousel').owlCarousel({
    animateOut: 'flipOutX',
    animateIn: 'flipInX',
    items:1,
    loop:true,
    dots: false,
    nav:true,
    navText: ['<div class="slide-prev"></div>','<div class="slide-next"></div>']
  });
  $('img.myImage1').zoomify({ scale: 1 });
});

