$(document).ready(function(){

    //pc navigation
    $('.navmenu').hover(function(){
        $('.btm-hd').show();
    });
    $('header').mouseleave(function(){
        $('.btm-hd').hide();
    });

    //mobile navigation
    var moNavBtn = $('.monav-btn');
    var moNav = $('.monav-area');
    moNavBtn.on('click', function(){
        $('html').toggleClass('full');
        $(this).toggleClass('on');
        moNav.slideToggle(150);
    });

    //footer familysite
    $('.famsite-btn').on('click', function(){
        $(this).parents('.familysite').toggleClass('on');
    });
    $('.famsite-menu').on('click', function(){
        $(this).parents('.familysite').removeClass('on');
    });

    //share button
    var shareOpen = $('.sharebtn.open');
    shareOpen.on('click', function(){
        $(this).siblings('.sharebtn-box').toggleClass('on');
    });

    /*=====================================================
    form event
    =====================================================*/
    //load file name
    $('.form-file').find('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $(this).parents().siblings('.form-input').val(fileName);
    });

    //FAQ List
    var faqQ = $('.faq-list .q');
    var faqA = $('.faq-list .a');

    faqQ.on('click',function(){
        faqQ.not($(this)).removeClass('on');
        faqA.not($(this).next('.a')).slideUp(150);
        $(this).toggleClass('on');
        $(this).next('.a').slideToggle(150);
    });

    //cerfify tip
    var loginBtn = $('.login-input').next('.btn');
    loginBtn.on('click', function(){
        $(this).parents('.form-field').next('.login-tip-box').show();
    });

    //textarea counter
    $('.keyup1500').on('keyup', function(e) {
        var content = $(this).val();
        var counter = $(this).next().find('.counter');

        counter.html(content.length + "/1500");

        if (content.length > 1500){
            $(this).val(content.substring(0, 1500));
            counter.html("1500/1500");
        }
    });

    //tab list wrap event
    var windowW = $(window).innerWidth();
    if(windowW < 576.98) {
        tabWidth();
    } else {
        $('.comntag-box').width('auto');
    }

    $(window).resize(function(){

        var windowW = $(window).innerWidth();
        if(windowW < 576.98) {
            tabWidth();
        } else {
            $('.comntag-box').width('auto');
        }
    });

    function tabWidth() {
        $('.comntag-box').each(function(){  
            var tabItems = $(this);
            var tabW = 0;
            if(tabItems.children('.comntag').length >= 1){
                $(this).children('.comntag').each(function(i, e){
                    tabW += $(e).outerWidth(true);
                });
                $(this).width(tabW + 20);
            } 
        });
    }

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