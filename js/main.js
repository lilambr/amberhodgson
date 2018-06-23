$('.navi').click(function() {
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});


$( "#show" ).click(function() {
  $( "#aboutme" ).toggleClass("visible animated fadeInUp");
});

$('.js-tilt').tilt({
    axis: y
})