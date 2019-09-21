function mobileMenu_trigger() {
    $(".res_block").toggleClass("active");
}
$( "#mm_trigger-open" ).on( "click", mobileMenu_trigger);
$( "#mm_trigger-close" ).on( "click", mobileMenu_trigger);

function responsiveFixes() {
    if($(window).width() < 992){
        $( "header .res_block" ).append( $( "footer" ) );
    }
    if($(window).width() > 991){
        $( "body" ).append( $( "footer" ) );
    }
    if($(window).width() > 575 && $(window).width() < 768){
        $( ".chat_box" ).parent().prepend( $( "header" ) );
    }
    else if($(window).width() < 992 && $(window).height() < 375){
        $( ".chat_box" ).parent().prepend( $( "header" ) );
    }
    else{
        $( "body" ).prepend( $( "header" ) );
    }
}
$(window).on("load resize", responsiveFixes);

$(window).on("load resize", function( event ) {
    var windoHeight = $(window).height() - 345;
    if($(window).width() < 576 && $(window).height() > $(window).width()){
        $(".online_players_list").height(windoHeight*.5);
        $(".chat_box .message_list").height(windoHeight*.5);
    }
    else{
        $(".online_players_list").removeAttr("style");
        $(".chat_box .message_list").removeAttr("style");
    }
});

$(window).on("load resize", function( event ) {
    var windoHeight = $(window).height();
    if($(window).height() > 670 && $(window).height() < 876){
        $(".online_players_list").height(windoHeight-550);
        $(".chat_box .message_list").height(windoHeight-328);
        // $(".rooms_games_tabs_block .tab-content .dataTables_scrollBody").height(windoHeight-298);
        $(".rooms_games_tabs_block .tab-content .dataTables_scrollBody").css( "height", windoHeight-428 );
    }
    else{
        $(".online_players_list").removeAttr("style");
        $(".chat_box .message_list").removeAttr("style");
        $(".rooms_games_tabs_block .tab-content .tab-pane").removeAttr("style");
    }
});

// Rooms Games tabs
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

$(document).ready(function() {
    $('table.table').DataTable( {
        paging:         false,
        searching:      false,
        ordering:       false,
        scrollY:        "auto",
        "info":         false
    } );
} );