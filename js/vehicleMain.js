const next =document.getElementById("nextBtn1");
next.addEventListener("click",function () {
    $('.first').css({display: "none"});
    $('.second').css({display: "block"});
    $('.second').css({opacity: 1});
    $('.second').css({pointerEvents: "auto"});

});

const next2 =document.getElementById("ne1");
next2.addEventListener("click",function () {
    $('.first').css({display: "none"});
    $('.second').css({display: "none"});
    $('.third').css({display: "block"});
    $('.third').css({opacity: 1});
    $('.third').css({pointerEvents: "auto"});

});


const next3 =document.getElementById("ne2");
next3.addEventListener("click",function () {
    $('.third').css({display: "none"});
    $('.forth').css({display: "block"});
    $('.forth').css({opacity: 1});
    $('.forth').css({pointerEvents: "auto"});
});

/*
const dash=document.getElementById("ne5");
dash.addEventListener("click",()=>{
    window.location.href="../pages/vehicle_DashBoard.html";
});
*/
