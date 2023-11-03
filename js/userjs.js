$(document).ready(function () {
    $("#input").on("keyup",function () {
        var value=$(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
    })
})

const add_new_user=document.getElementById("new_user");
add_new_user.addEventListener("click",()=>{
    window.location.href="../pages/index.html";
})


const update=document.getElementById("new1");
update.addEventListener("click",()=>{
    $('#model-container').css({display:"block"});
})

const can=document.getElementById("cancelBtn");
can.addEventListener("click",()=>{
    $('#model-container').css({display:"none"});
})