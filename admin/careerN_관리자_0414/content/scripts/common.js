$(document).ready(function(){

    //side navbar
    var navMenu = $('div.nav-menu');
    var subNav = $('.subnav-list');
    navMenu.on('click', function(){
        $(this).toggleClass('on');
        $(this).next(subNav).slideToggle(150);
    });

    //mobile side navbar
    var navOpenBtn = $('.navopen-btn');
    navOpenBtn.on('click', function(){
        $(this).toggleClass('on');
        $('.left-sidebar').toggleClass('navon');
        $('header').toggleClass('navon');
        $('.page-area').toggleClass('navon');
    });

    //modal
    var modalArea = $('.modal-area');
    var modalWrap = $('.modal-wrap');
    var showModal = $('.show-modal');
    var closeModal = $('.close-modal');

    showModal.on('click', function(e) {
        e.preventDefault();
        modalArea.fadeIn(250);
        $('html').addClass('full');
    });
    
    closeModal.on('click', function(e) {
        e.preventDefault();
        modalArea.fadeOut(250);
        $('html').removeClass('full');
    });
    modalArea.on('click', function(e){
        if (!$(e.target).closest(modalWrap).length) {
            $('html').removeClass('full');
            $(this).fadeOut(150);
        }
    });

});