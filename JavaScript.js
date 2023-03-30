

/*القائمة الجانبية الرئيسية*/
function openFunction(){
    document.getElementById('menu').style.width='250px';
}

function closeFunction(){
    document.getElementById('menu').style.width='0px';
}

window.addEventListener('mouseup' , function(event){
    var box=document.getElementById('menu');
    if(event.target!=box){
        box.style.width='0px';
    }
});


/*لوحة الاعلانات*/

var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });

