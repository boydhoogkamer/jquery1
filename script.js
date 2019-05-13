$(document).ready( function() {

    //Muis Events
    $('figure img').mouseenter( function() {
        $(this).fadeTo(600, .01);
    }).mouseleave( function() {
        $(this).fadeTo(1000, 1);
    }).click( function() {
        $(this).next().toggle(700);
    });

    //Footer
    $('footer').click( function() {
        $(this).animate({
            top: '-=50px',
            opacity: '-=.2'
        }, 900)
    }).dblclick ( function() {
        $(this).animate( {
            top: '0',
            opacity: '1'
        }, 900)
    });

    $('#wrapper').tubular({videoId: 'r6zIGXun57U'});
});