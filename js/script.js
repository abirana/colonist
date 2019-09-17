function mobileMenu_trigger() {
    $(".res_block").toggleClass("active");
}
$( "#mm_trigger-open" ).on( "click", mobileMenu_trigger);
$( "#mm_trigger-close" ).on( "click", mobileMenu_trigger);

jQuery(window).on("load resize" ,function( event ){
    var windoHeight = $(window).height() -400;
    if(jQuery(window).width() < 576){
        $('.online_players_list').height(windoHeight*.5);
        $('.chat_box .message_list').height(windoHeight*.5);
    }
});

$('#rooms_games-tabs a').on('click', function (e) {
    e.preventDefault()
    var tab_id = $(this).attr('id');
    var tab_pane = $(".tab-pane[aria-labelledby="+tab_id+"]");
    $(".tab-pane[aria-labelledby]").removeClass("show active");
    tab_pane.addClass("active");
    setTimeout(function(){
        tab_pane.addClass("show")
    }, 200);
})