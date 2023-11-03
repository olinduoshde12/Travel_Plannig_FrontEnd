let profilePic = document.getElementById("pro-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0])
}

let profilePic2 = document.getElementById("pro-pic2");
let inputFile1 = document.getElementById("input-file1");

inputFile1.onchange = function () {
    profilePic2.src = URL.createObjectURL(inputFile1.files[0])
}

let profilePic3 = document.getElementById("pro-pic3");
let inputFile2 = document.getElementById("input-file2");

inputFile2.onchange = function () {
    profilePic3.src = URL.createObjectURL(inputFile2.files[0])
}