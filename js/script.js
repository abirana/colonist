var breakPoint_width_sm = 576;
var breakPoint_width_md = 768;
var breakPoint_width_lg = 992;
var breakPoint_width_xl = 1200;

var breakPoint_height_sm = 375;
var breakPoint_height_md = 670;
var breakPoint_height_lg = 876;
var breakPoint_height_xl = 1030;

var negative_space_sm = 345;
var negative_space_onlinePlayers = 550;
var negative_space_chatBox = 328;
var negative_space_roomsGamesBlock = 428;

function mobileMenu_trigger() {
    $(".res_block").toggleClass("active");
}
$( "#mm_trigger-open" ).on( "click", mobileMenu_trigger);
$( "#mm_trigger-close" ).on( "click", mobileMenu_trigger);

function responsiveFixes() {
    if($(window).width() < breakPoint_width_lg){
        $( "header .res_block" ).append( $( "footer" ) );
    }
    if($(window).width() >= breakPoint_width_lg){
        $( "body" ).append( $( "footer" ) );
    }
    if($(window).width() >= breakPoint_width_sm && $(window).width() < breakPoint_width_md){
        $( ".chat_box" ).parent().prepend( $( "header" ) );
    }
    else if($(window).width() < breakPoint_width_lg && $(window).height() < breakPoint_height_sm){
        $( ".chat_box" ).parent().prepend( $( "header" ) );
    }
    else{
        $( "body" ).prepend( $( "header" ) );
    }
}
$(window).on("load resize", responsiveFixes);

$(window).on("load resize", function( event ) {
    var windoHeight = $(window).height() - negative_space_sm;
    if($(window).width() < breakPoint_width_sm && $(window).height() > $(window).width()){
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
    if($(window).height() > breakPoint_height_md && $(window).height() < breakPoint_height_lg){
        $(".online_players_list").height(windoHeight-negative_space_onlinePlayers);
        $(".chat_box .message_list").height(windoHeight-negative_space_chatBox);
        $(".rooms_games_tabs_block .tab-content .dataTables_scrollBody").css( "height", windoHeight-negative_space_roomsGamesBlock);
    }
    else if($(window).height() > breakPoint_height_lg && $(window).height() < breakPoint_height_xl){
        $(".online_players_list").height(windoHeight-(negative_space_onlinePlayers+90));
        $(".chat_box .message_list").height(windoHeight-(negative_space_chatBox+90));
        $(".rooms_games_tabs_block .tab-content .dataTables_scrollBody").css( "height", windoHeight-(negative_space_roomsGamesBlock+90));
    }
    else if($(window).height() > breakPoint_height_xl){
        $(".online_players_list").height(windoHeight-(negative_space_onlinePlayers+264));
        $(".chat_box .message_list").height(windoHeight-(negative_space_chatBox+264));
        $(".rooms_games_tabs_block .tab-content .dataTables_scrollBody").css( "height", windoHeight-(negative_space_roomsGamesBlock+264));
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