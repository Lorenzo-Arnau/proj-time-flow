require('./bootstrap');

    $( '#home' ).click(function() {
        $( '.page-content').removeClass('hide');
        $( '.page-content').addClass('flex');
        $( '.page-content-likes').removeClass('flex');
        $( '.page-content-likes').addClass('hide');
        $( '.page-content-socials').removeClass('flex');
        $( '.page-content-socials').addClass('hide');
        $( '.page-content-contacts').removeClass('flex');
        $( '.page-content-contacts').addClass('hide');
        $( '.page-content-about').removeClass('flex');
        $( '.page-content-about').addClass('hide');
       });
   $( '#about-me' ).click(function() {
    $( '.page-content').removeClass('flex');
    $( '.page-content').addClass('hide');
    $( '.page-content-likes').removeClass('flex');
    $( '.page-content-likes').addClass('hide');
    $( '.page-content-socials').removeClass('flex');
    $( '.page-content-socials').addClass('hide');
    $( '.page-content-contacts').removeClass('flex');
    $( '.page-content-contacts').addClass('hide');
    $( '.page-content-about').removeClass('hide');
    $( '.page-content-about').addClass('flex');
   });

   $( '#likes' ).click(function() {
    $( '.page-content').removeClass('flex');
    $( '.page-content').addClass('hide');
    $( '.page-content-about').removeClass('flex');
    $( '.page-content-about').addClass('hide');
    $( '.page-content-socials').removeClass('flex');
    $( '.page-content-socials').addClass('hide');
    $( '.page-content-contacts').removeClass('flex');
    $( '.page-content-contacts').addClass('hide');
    $( '.page-content-likes').removeClass('hide');
    $( '.page-content-likes').addClass('flex');
   });
   $( '#socials' ).click(function() {
    $( '.page-content').removeClass('flex');
    $( '.page-content').addClass('hide');
    $( '.page-content-likes').removeClass('flex');
    $( '.page-content-likes').addClass('hide');
    $( '.page-content-about').removeClass('flex');
    $( '.page-content-about').addClass('hide');
    $( '.page-content-contacts').removeClass('flex');
    $( '.page-content-contacts').addClass('hide');
    $( '.page-content-socials').removeClass('hide');
    $( '.page-content-socials').addClass('flex');
   });
   $( '#contact-me' ).click(function() {
    $( '.page-content').removeClass('flex');
    $( '.page-content').addClass('hide');
    $( '.page-content-likes').removeClass('flex');
    $( '.page-content-likes').addClass('hide');
    $( '.page-content-socials').removeClass('flex');
    $( '.page-content-socials').addClass('hide');
    $( '.page-content-about').removeClass('flex');
    $( '.page-content-about').addClass('hide');
    $( '.page-content-contacts').removeClass('hide');
    $( '.page-content-contacts').addClass('flex');
   });



;
