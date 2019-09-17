var mobile_btn_open = document.getElementById("mm_trigger-open");
var mobile_btn_close = document.getElementById("mm_trigger-close");
var mobile_block = document.getElementsByClassName("res_block");

function mobileMenu_trigger() {
    for (var i=0; i < mobile_block.length; i++) {
        if (mobile_block[i].classList.contains('active') == false) {
            mobile_block[i].classList.add("active");
        } else if (mobile_block[i].classList.contains('active') == true) {
            mobile_block[i].classList.remove("active");
        }
    }    
}
// console.log(mobile_block);
mobile_btn_open.addEventListener('click', mobileMenu_trigger);
mobile_btn_close.addEventListener('click', mobileMenu_trigger);

