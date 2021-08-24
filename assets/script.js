/*jslint browser: true*/
/*global $, jQuery, alert*/

/* ================================================== DOCUMENT READY ================================================== */

$(function () {
    
    /* ============================================== Collapsing #topAndSubCategories ================================= */

    $('#filter').click(
        function (event) {
            var target = $(event.target);
            if (target.is('div') || target.is('p')) {
                $(".navbar-toggle").click();
            }
        }
    );

    $(".navbar-toggle").click(
        function () {
            $navbar = $(".navbar");
            if ($navbar.attr("open")) {
                $navbar.removeAttr("open");
            } else {
                $navbar.attr("open", "true");
            }
        }
    );
    
    // collapse on scroll

    //FF
    document.addEventListener('DOMMouseScroll', function (event) {
        if ($('#topAndSubCategories[aria-expanded="true"]').length > 0
                && $('#topAndSubCategories').parent().css('display') !== 'none'
                && window.innerHeight > 600) {
            $(".navbar-toggle").click();
        }
    }, true); /*Capture event*/

    // Chrome and Safari
    document.addEventListener('mousewheel', function (event) {
        if ($('#topAndSubCategories[aria-expanded="true"]').length > 0
                && $('#topAndSubCategories').parent().css('display') !== 'none'
                && window.innerHeight > 600) {
            $(".navbar-toggle").click();
        }
    }, true); /*Capture event*/

    
    
    /* ============================================== Hides Columns if no content under Subheadline =================== */
    $('#subCategories .col-md-3:not(:has(p))').hide();
    $('#topCategories nav li').click(
        function () {
            $('#subCategories .col-md-3:not(:has(p))').hide();
        }
    );
    
    /* Removes alert on click */
    $('.wrapper-alert').click(
        function () {
            $('.wrapper-alert').hide();
        }
    );
    
    $('app-root').css('background', 'none #fff');
    


    /* ============================================== Make headings clickable and labels sticky ======================= */
    
    /* Shows little-labels on click */
//    $('.wrapper-sentence').click(
//        function () {
//            $(this).toggleClass('expandTag');
//        }
//    );
    
    /* toggles wrapper-content with click on header */
//    $(':header').click(
//        function () {
//            $(this).next('.wrapper-inner').slideToggle();
//        }
//    );

    $("body").on(
        "click",
        ":header",
        function () {
            $(this).toggleClass("hidden-inner");
            $(this).next(".wrapper-inner").toggle();
        }
    );
    
    /* ============================================== Keeps loading gif a moment after page is loaded ================= */

    setTimeout(function () {
        //hide Loading Animation
        $('#loadingOverlay').fadeOut();
    }, 2000);

    /* ============================================== for SZ EMBED script to adjust height ============================ */
    szEmbedService.setHeight("800px");

});
