(function($){

    $(window).load(function(){
        
        // Page loader
        
        $("body").imagesLoaded(function(){
            $(".page-loader div").fadeOut();
            $(".page-loader").delay(200).fadeOut("slow");
        });
        initWorkFilter();
    });


})(jQuery);

var portfolio = $("#project-grid, #isotope");

function initWorkFilter(){
    (function($){
     portfolio.imagesLoaded(function(){
         portfolio.isotope();
     });

    })(jQuery);
}




