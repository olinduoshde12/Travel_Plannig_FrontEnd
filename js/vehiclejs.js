const new1 =document.getElementById("new1");
new1.addEventListener("click",function () {
    $('#model-container').css({display: 'block'});
});

const cancel =document.getElementById("cancelBtn");
cancel.addEventListener("click",function () {
    $('#model-container').css({display: 'none'});
});

