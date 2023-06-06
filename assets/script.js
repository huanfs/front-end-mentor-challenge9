let wid = window.innerWidth;
let btnIncrementar = document.querySelectorAll(".select-qtd span")[1];
let btnDiminuir = document.querySelectorAll(".select-qtd span")[0];
let count = 0;
btnIncrementar.addEventListener("click", adicionar);
btnDiminuir.addEventListener("click", subtrair);
//-----
let btn = document.querySelector("button").addEventListener("click", menu);
//FUNÇÃO DE MOSTRAR E APAGAR MENU HAMBURGUER
function menu(){
    if(wid<=680){
       let menu = document.querySelector(".nav-links article");
       let menuHamburguer = document.createElement("img");
       menu.appendChild(menuHamburguer);
       menuHamburguer.src="./images/icon-menu.svg";
       menuHamburguer.addEventListener("click",openClose);
    }
}
//FUNÇÃO ABRIR E FECHAR O MENU
function openClose(icon){
    let menuHamburguer = document.querySelectorAll("article img")[1];
    let slideMenu = document.querySelector(".slide-menu");
    if(menuHamburguer.src="./images/icon-menu.svg"){
        console.log(menuHamburguer.src);
        slideMenu.style.left="0px";
        menuHamburguer.src="";//AQUI
    }
    else if(menuHamburguer.src="./images/icon-close.svg"){
        slideMenu.style.left="-300px";
        menuHamburguer.src="";//AQUI
    }
}
// FUNÇÕES DE ADIÇÃO E SUBTRAÇÃO
function adicionar(){
    let qtd = document.querySelectorAll(".select-qtd div");
    console.log(typeof(qtd));
        count++;
        qtd[0].innerHTML=count;
}
function subtrair(){
    let qtd = document.querySelectorAll(".select-qtd div");
    if(qtd.innerHTML!=0){
        count--;
        qtd[0].innerHTML=count;
        
    }
    else{
        qtd.innerHTML=0;
    }
}


// MUDAR O SRC DA IMAGEM MENU DE ACORDO COM O MENU
// FECHADO OU ABERTO