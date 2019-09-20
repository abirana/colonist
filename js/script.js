function mobileMenu_trigger() {
    $(".res_block").toggleClass("active");
}
$( "#mm_trigger-open" ).on( "click", mobileMenu_trigger);
$( "#mm_trigger-close" ).on( "click", mobileMenu_trigger);

$(window).on("load resize" ,function( event ){
    var windoHeight = $(window).height() - 345;
    if($(window).width() < 576){
        $(".online_players_list").height(windoHeight*.5);
        $(".chat_box .message_list").height(windoHeight*.5);
    }
    if($(window).width() < 992){
        $( "header .res_block" ).append( $( "footer" ) );
    }
    if($(window).width() > 991){
        $( "body" ).append( $( "footer" ) );
    }
    if($(window).width() > 575 && $(window).width() < 768){
        $( ".chat_box" ).parent().prepend( $( "header" ) );
    }
    else{
        $( "body" ).prepend( $( "header" ) );
    }
});

$("#rooms_games-tabs a").on("click", function (e) {
    e.preventDefault()
    var tab_id = $(this).attr("id");
    var tab_pane = $(".tab-pane[aria-labelledby="+tab_id+"]");
    
    $("#rooms_games-tabs a").removeClass("active");
    $(this).addClass("active");
    $(".tab-pane[aria-labelledby]").removeClass("show active");

    tab_pane.addClass("active");
    setTimeout(function(){
        tab_pane.addClass("show")
    }, 200);
})
