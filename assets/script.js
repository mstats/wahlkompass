/*jslint browser: true*/
/*global $, jQuery, alert*/

/* Reacts on mousehover over first headline and closes Navigation on click */

//function suggestHideNavigation() {
//    $('#filter .label-text').text('Themenauswahl einklappen');
//    $('.collapsed #filter .label-text').text('Themen ändern');
//}
//
//function suggestHideNavigationOut() {
//    $('#filter .label-text').text('Ausgewählte Themen');
//}
//


/* ============================================== DOCUMENT READY ========================================== */

$(function () {
    
    /* Hides first headline once filter is clicked */
    
    //$('#topAndSubCategories').click(
    //    function () {
    //        $('#navigationHeader').slideUp();
    //    }
    //);
    
    /* Reacts on mousehover over filter and closes Top And Sub Categories on click */
    //$('#filter').mouseenter(
    //    function () {
    //        suggestHideNavigation();
    //    }
    //);
    //
    //$('#filter').mouseleave(
    //    function () {
    //        suggestHideNavigationOut();
    //    }
    //);
    //
    $('#filter').click(
        function (event) {
            var target = $(event.target);
            if (target.is('div') || target.is('p')) {
                $(".navbar-toggle").click();
            }
        }
    );
    
    /* Hides second headline once party is clicked + removes Debug Parties */
    
    $('content #parties .btn').click(
        function () {
            $('#contentHeader').slideUp();
            $('content').contents().filter(function () {
                return this.nodeType === Node.TEXT_NODE;
            }
                                          )[1].nodeValue = '';
        }
    );
    
    
    /* Hides Columns if no content under Subheadline */
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
    
    $('app-root').css('background','none #fff');
    
    /* ============================================== Make headings clickable and labels sticky ======================== */
    
    /* Shows little-labels on click */
    $('.wrapper-sentence').click(
        function(){
            $(this).toggleClass('expandTag');
        }
    );
    
    /* toggles wrapper-content with click on header */
    $(':header').click(
        function(){
            $(this).next('.wrapper-inner').slideToggle();
        }
    );
    
    setTimeout(function () {
        //hide Loading Animation
        $('#loadingOverlay').fadeOut();
    }, 1000);
    
    $("body").on(
      "click",
      ":header",
      function(){
        $(this).toggleClass("hidden-inner");
        $(this).next(".wrapper-inner").toggle();
      }
    );

    szEmbedService.setHeight("800px");

});
