let wid = window.innerWidth;
let btnIncrementar = document.querySelectorAll(".controls div")[2];
let btnDiminuir = document.querySelectorAll(".controls div")[0];
let count = 0;
let opCl = 0;
btnIncrementar.addEventListener("click", adicionar);
btnDiminuir.addEventListener("click", subtrair);
//FUNÇÃO DE MOSTRAR E APAGAR MENU HAMBURGUER
function menu(){
    if(wid<=680){
       let menu = document.querySelector(".nav-links article");
       let menuHamburguer = document.createElement("img");
       menu.appendChild(menuHamburguer);
       menuHamburguer.src="./images/icon-menu.svg";
       menuHamburguer.style.zIndex="1000";
       menuHamburguer.addEventListener("click",openClose);
    }
}
function childTo(){
    let navigation = document.querySelectorAll(".nav-links a");
    let menuSlide= document.querySelector(".slide-menu");
    if(wid<=680){
        let menuList = document.createElement("div");
        navigation.forEach(function(navItem) {
            menuSlide.appendChild(navItem);
            navItem.style.color="var(--veryDarkBlue)";
        });
    }
}
// function childTo(){
//     let navigation = document.querySelectorAll(".nav-links a");
//     let menuSlide= document.querySelector(".slide-menu");
//     if(wid<=680){
//         let menuList = document.createElement("div");
//         for(i in navigation){
//             menuSlide.appendChild(navigation[i]);
//             navigation[i].style.color="var(--veryDarkBlue)";
//         }
//     }
// }
//FUNÇÃO ABRIR E FECHAR O MENU
function openClose(){
    let menuHamburguer = document.querySelectorAll("article img")[1];
    let slideMenu = document.querySelector(".slide-menu");
    //adicionar o efeito de escurecimento do plano de fundo
    //ao abrir o menu
    if(opCl==0){
        slideMenu.style.left="0px";
        menuHamburguer.src="./images/icon-close.svg";
        opCl++;
        slideMenu.addEventListener("click", menuBlur);
    }
    else if(opCl==1){
        slideMenu.style.left="-300px";
        menuHamburguer.src="./images/icon-menu.svg";
        opCl--;
    }
}
function menuBlur(){
        let menuHamburguer = document.querySelectorAll("article img")[1];
        let slideMenu = document.querySelector(".slide-menu");
        slideMenu.style.left="-300px";
        menuHamburguer.src="./images/icon-menu.svg";
        opCl--;
}
// FUNÇÕES DE ADIÇÃO E SUBTRAÇÃO
function adicionar(){
    let qtd = document.querySelectorAll(".controls div");
        count++;
        qtd[1].innerHTML=count;
        console.log(qtd[1]);
}
function subtrair(){
    let qtd = document.querySelectorAll(".controls div");
    if(qtd[1].innerHTML!=0){
        count--;
        qtd[1].innerHTML=count;
    }
    else{
        qtd.innerHTML=0;
    }
}


//CRIAR O CARROUSELL DE EXIBIÇÃO