let profilePic = document.getElementById("pro-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0])
}


///////
let next = document.querySelector(".nextBtn");

next.addEventListener("click",()=>{
    $('.first').css({display: 'none'});
    $('.second').css({display: 'block'});
    $('.second').css({opacity: 1});
    $('.second').css({pointerEvents:'auto'});

})

const back2 = document.querySelector("#ne1");

back2.addEventListener("click",()=>{
    $('.second').css({display: 'none'});
    $('.first').css({display: 'block'});

})




const next2=document.getElementById("ne2");
next2.addEventListener("click",()=>{
    $('.second').css({display: 'none'});
    $('.third').css({display:'block'});
    $('.third').css({opacity: 1});
    $('.third').css({pointerEvents:'auto'});

})



/*const search = document.querySelector('.input-group input'),
    table_rows=document.querySelectorAll('tbody tr');


search.addEventListener('input',()=>{
    table_rows.forEach((row,i) =>{
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide',table_data.indexOf(search_data)< 0);
        row.style.setProperty('--delay',i/25 + 's');
    })

});*/

$(document).ready(function () {
    $("#input1").on("keyup",function () {
        var value=$(this).val().toLowerCase();
        $("#mytable tr").filter(function () {
$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
    })
})



$('#add_new').on("click",function () {
    console.log("hiii");
})

