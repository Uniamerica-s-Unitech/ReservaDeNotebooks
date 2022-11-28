let exhibit = false;
let unfocus = false;
let btnOpen = document.getElementById("btn-novaEntrega");
let btnClose = document.getElementById("close-novaEntrega");
let screenBehindModal = document.getElementsByClassName("behind-modal");
let goBtn = document.getElementById("entrega-nova");

btnOpen.addEventListener('click',openAndBlur);

btnClose.addEventListener('click',closeAll);

goBtn.addEventListener('click',closeAll);


function closeAll(){
    closeModal();
    unblurBackground();
}

function openAndBlur(){
    exhibitModal();
    blurBackground();
}

function blurBackground(){
    for(let i=0;i<screenBehindModal.length;i++){
        screenBehindModal[i].style.webkitFilter = "blur(5px)";
    }
}

function unblurBackground(){
    for(let i=0;i<screenBehindModal.length;i++){
        screenBehindModal[i].style.webkitFilter = "blur(0px)";
    }
}

function exhibitModal(){

    document.getElementById('modal-novaEntrega').style.display = "block";
}

function closeModal(){

    document.getElementById('modal-novaEntrega').style.display = "none";
}