let wid = window.innerWidth;
let btn = document.querySelectorAll(".cart-user img")[0];
let btnIncrementar = document.querySelectorAll(".controls div")[2];
let btnDiminuir = document.querySelectorAll(".controls div")[0];
let product = document.querySelectorAll("#mini-products img");
let count = 0;
let opCl = 0;
btn.addEventListener("click", openCart);
btnIncrementar.addEventListener("click", adicionar);
btnDiminuir.addEventListener("click", subtrair);
for(let i = 0;i<product.length; i++){
    product[i].addEventListener("click", showProduct);
    // product[i].addEventListener("click", styleItem);
}
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
//FUNÇÃO ABRE E FECHA O CARRINHO
function openCart(){
    let cart = document.getElementById("cart");
    if(cart.style.display=="none"){
        cart.style.display="flex";
    }
    else{
        cart.style.display="none";
    }
}
//FUNÇÃO ADICIONAR AO CARRINHO
//adicionar a numeração de quantos itens foram adicionados
function addToCart(){
    let qtd = document.querySelectorAll(".controls div")[1];
    if(qtd.innerText!="0"){
        let basket = document.querySelector("#cart-contents");
     let empty = document.querySelector("#empty");
     empty.style.display="none";
     let details = document.createElement("div");
     let img = document.createElement("img");
     let title = document.createElement("h2");
     let trash = document.createElement("i");
     trash.setAttribute("class","fa-solid fa-trash");
     let button = document.createElement("button");
     button.innerHTML="CheckOut"
     title.innerHTML="Fall Limited Edition Sneakers";
     img.src="images/image-product-1-thumbnail.jpg";
     for(let i =0;i<=4;i++){
        basket.appendChild(details);
        details.appendChild(img);
        details.appendChild(title);
        details.appendChild(trash);
        basket.appendChild(button);
     }
    }  
 }
 function showProduct(product){
    let show = document.querySelectorAll("#show-product img")[0];
    let source = product.target.src;
    show.src=source;
 }

//APLICAR BORDA E DESFOQUE NO ITEM E CLICADO E AO CLICAR EM OUTRO DESFAZER ESTA ESTILIZAÇÃO
//  function styleItem(item){
//     if(item==true){
//         item.target.style.border="2px solid var(--orange)";
//         item.target.style.opacity="0.7";
//     }
//     else{
//         item.target.style.border="5px solid green";
//         item.target.style.opacity="1";
//     }
//  }

//CRIAR O CARROUSELL DE EXIBIÇÃO
// function slide(){
//     if(wid<=680){
//         let btnNext = document.querySelectorAll("#product-show img:after")[0];
//         console.log(btnNext);
//     }
// }