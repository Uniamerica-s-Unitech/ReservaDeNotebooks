let show = false;
let blur = false;
let openBtn = document.getElementById("btn-relatorio");
let closeBtn = document.getElementById("close-relatorio");
let itemsBehindModal = document.getElementsByClassName("behind-modal");
let btnGo = document.getElementById("gerar-relatorio");



openBtn.addEventListener('click',openAndBlur);

closeBtn.addEventListener('click',xcloseAll);

btnGo.addEventListener('click',xcloseAll);



function xcloseAll(){
    xcloseModal();
    unblurBackground();
}

function openAndBlur(){
    showModal();
    blurBackground();
}

function blurBackground(){
    for(let i=0;i<itemsBehindModal.length;i++){
        itemsBehindModal[i].style.webkitFilter = "blur(5px)";
    }
}

function unblurBackground(){
    for(let i=0;i<itemsBehindModal.length;i++){
        itemsBehindModal[i].style.webkitFilter = "blur(0px)";
    }
}

function showModal(){

    document.getElementById('modal-relatorio').style.display = "block";
}

function xcloseModal(){
    document.getElementById('modal-relatorio').style.display = "none";
}