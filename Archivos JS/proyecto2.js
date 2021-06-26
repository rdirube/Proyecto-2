

//====================VARIABLES A UTILIZAR============================
 const barra = document.getElementById("barra");
 const logoMobile = document.getElementById("logo-mobile");
 const logoD = document.getElementById("logo-d");
 const burga = document.getElementById("burga");
 const burger = document.getElementById("burger");
 const burgerN = document.getElementById("burguer-n");
 const closeD = document.getElementById("close-d");
 const closeN = document.getElementById("close-n");
 const closeH = document.getElementById("close-h");
 const menu = document.getElementById("menu");
 const menuInt = document.getElementById("menu-int");
 const modo = document.getElementById("modo");
 const linkF = document.getElementById("link-f");
 const linkG = document.getElementById("link-g");
 const crearD = document.getElementById("crear-d");
const buscador = document.getElementById("buscador");
const busc = document.getElementById("busc");
const buscCont = document.getElementById("busc-cont");
const buscar = document.getElementById("buscar");
const lupitaD = document.getElementById("search-d");
const lupitaN = document.getElementById("search-n");
const trending = document.getElementById("trending");
 const botonIzqD = document.getElementById("boton-izq-d");
 const botonDerH= document.getElementById("boton-der-h");
 const botonIzqH= document.getElementById("boton-izq-h");
 const botonDerD = document.getElementById("boton-der-d");
 const facebook = document.getElementById("facebook-d");
 const twitter = document.getElementById("twitter-d");
 const flechas = document.getElementById("flechas");
 const instagram = document.getElementById("instagram-d");
 const header = document.getElementById("header");
 const imgFav0 = document.getElementById("fav-s");
 const contenedorGif0 = document.getElementById("gif-0");
 const imgGif0 = document.getElementById("gif-s");
 const gifTrending = document.getElementById("gif-trending");
const fav0 = document.getElementById("fav-0");
 const footer = document.getElementById("footer");
const h1 = document.getElementsByTagName("h1");
const p = document.getElementsByTagName("p");
const h2 = document.getElementsByTagName("h2");
const h4 = document.getElementsByTagName("h4");
const link = document.getElementsByClassName("link");
const ApiKey = "og2cGOovwMy2VkjKm8PCJRTApTXFM8BJ";
const gifosEncontrados= document.getElementById("gifos-encontrados");
const categorias = document.getElementById("categorias");
const trendingsN = document.getElementById("trendings-n");
 const verMasCont = document.getElementById("ver-mas-cont");
 const divFantasma = document.getElementsByClassName("div-fantasma");
 const verMas = document.getElementById("ver-mas");
 const botones = document.getElementsByClassName("botones");
 const verMasH = document.getElementById("ver-mas-h");
 const contenedorTrending = document.getElementsByClassName("contenedor-trending");
 const violeta = document.getElementsByClassName("violeta");
const trendingGif = document.getElementsByClassName("trending_gifs");
 const container = document.getElementsByClassName("container");
const matchList = document.getElementById("matchList");
const resultado= document.getElementsByClassName("resultado");
const contTituloF = document.getElementById("contTituloF"); 
const closeLup = document.getElementById("close-lup");
const download= document.getElementsByClassName("download");
const favor = document.getElementsByClassName("favor");
const max = document.getElementsByClassName("max");
const titulo = document.getElementsByClassName("titulo");
const contTituloBusc = document.getElementById("trendings");
const body = document.getElementById("body");
const icono1 = document.getElementsByClassName("icono");
const linkDescarga = document.getElementsByClassName("link-descarga");
const GIFOSMEGA = document.getElementById("GIFOS");
const contPalabra = document.getElementById("contPalabra");
const tituloBusqueda = document.getElementById("palabra-buscada");
const contenedorMatch = document.getElementById("contenedor-match");
let lupitaRes = document.getElementsByClassName("lupitaRes");
let divResultado = document.getElementsByClassName("divResultado");
const lupitaPrincipal = document.getElementById("lupitaPrincipal");
const buscCont2 = document.getElementById("busc-cont2");
let modosToggle = false;
var dataFavoritos=[];
let limit = 13;
var count_2 = 3;
var position = 1;
var imgData = {};
let gifosSearchF = [];




//=========================HOVERS Y EVENTOS DE DISEÑO GENERAL==============================

botonIzqD.addEventListener("mouseover", ()=> {
botonIzqD.removeAttribute("src");
botonIzqD.setAttribute("src", "../assets/button-slider-left-hover.svg");
botonIzqD.style.cursor= "pointer";})


botonIzqD.addEventListener("mouseout", ()=> {
    botonIzqD.removeAttribute("src");
    botonIzqD.setAttribute("src", "../assets/button-slider-left.svg");
    
} )

botonDerD.addEventListener("mouseover", ()=> { 
    botonDerD.style.display="none";
    botonDerH.style.display="block";
    

  }
)

botonDerH.addEventListener("mouseover", ()=> {
    botonDerH.style.cursor= "pointer";
    
} )

botonDerH.addEventListener("mouseout", ()=> {
    botonDerH.style.display="none";
    botonDerD.style.display="block";
    
} )


crearD.addEventListener("mouseover", ()=> {
    crearD.removeAttribute("src");
    crearD.setAttribute("src", "../assets/CTA-crear-gifo-hover.svg");
})

crearD.addEventListener("mouseout", ()=> {
    crearD.removeAttribute("src");
    crearD.setAttribute("src", "../assets/button-crear-gifo.svg");
})

crearD.addEventListener("mousedown", ()=> {
    crearD.removeAttribute("src");
    crearD.setAttribute("src", "../assets/CTA-crear-gifo-active.svg");
    
})

crearD.addEventListener("mouseup", ()=> {
    crearD.removeAttribute("src");
    crearD.setAttribute("src", "../assets/button-crear-gifo.svg");
})


twitter.addEventListener("mouseover", ()=> {
    twitter.removeAttribute("src");
    twitter.setAttribute("src", "../assets/icon-twitter-hover.svg");
})

twitter.addEventListener("mouseout", ()=> {
    twitter.removeAttribute("src");
    twitter.setAttribute("src", "../assets/icon-twitter.svg");
})


facebook.addEventListener("mouseover", ()=> {
    facebook.removeAttribute("src");
    facebook.setAttribute("src", "../assets/icon_facebook_hover.svg");

})

facebook.addEventListener("mouseout", ()=> {
    facebook.removeAttribute("src");
    facebook.setAttribute("src", "../assets/icon_facebook.svg");

})

instagram.addEventListener("mouseover", ()=> {
    instagram.removeAttribute("src");
    instagram.setAttribute("src", "../assets/icon_instagram-hover.svg")
})

instagram.addEventListener("mouseout", ()=> {
    instagram.removeAttribute("src");
    instagram.setAttribute("src", "../assets/icon_instagram.svg");
})



logoD.addEventListener("click", ()=> {
    window.location.reload();
})


verMas.addEventListener("mouseover", ()=> {
    verMas.removeAttribute("src");
    verMas.setAttribute("src", "../assets/CTA-ver-mas-hover.svg");
    verMas.style.cursor="pointer";
})

verMas.addEventListener("mouseout", ()=> {
    verMas.removeAttribute("src");
    verMas.setAttribute("src", "../assets/CTA-ver-mas.svg");
})


if(buscar.innerHTML="") {
    matchList.style.display="none";
}

  
burger.addEventListener("click", ()=> {
    menu.style.display="block";
    closeD.style.display="block";
    burger.style.display="none";

    })
     
closeD.addEventListener("click", ()=> {
    menu.style.display="none";
    closeD.style.display="none";
    burger.style.display="block"
      })
      



//====================MODO NOCTURNO========================


modo.addEventListener('click', nightMode);
modo.addEventListener('click', () => {
    if (nightmode_check !== "true") {
        nightmode_check = "true";
        localStorage.setItem("nightmode-status", "true");
    } else {
        nightmode_check = "false";
        localStorage.setItem("nightmode-status", "false");
    }
})

let b = true;
function nightMode() {
    menu.classList.toggle("menuNoct");
    buscador.classList.toggle("buscadorNoct");
    barra.classList.toggle("noctBarra");
    menuInt.classList.toggle("menu-intNoct");
    trending.classList.toggle("trendingNoct");
    footer.classList.toggle("footerNoct");
    buscCont.classList.toggle("busc-contNoct");
    buscCont2.classList.toggle("busc-contNoct2");
    header.classList.toggle("headerNoct");
    for (let i = 0; i < link.length; i++) {
        link[i].classList.toggle("linkNoct");
    }
    for(let i =0 ; i<5;i++) {
        divResultado[i].classList.toggle("divResultadoNoct");
        
    }
    // toggle logo + menú icons
    if (b) {
        buscCont2.style.backgroundColor="#37383C";
        logoD.removeAttribute("src");
        logoD.setAttribute("src", "../assets/logo-mobile-modo-noct.svg");
        lupitaD.removeAttribute("src");
        lupitaD.setAttribute("src", "../assets/icon-search-mod-noc.svg");
        closeLup.removeAttribute("src");
        closeLup.setAttribute("src", "../assets/close-modo-noct.svg");
        burger.removeAttribute("src");
        burger.setAttribute("src", "../assets/burger-modo-noct.svg");
        botonDerD.removeAttribute("src");
        botonDerD.setAttribute("src", "../assets/button-slider-right-md-noct.svg");
        botonIzqD.removeAttribute("src");
        buscador.removeAttribute("id");
        buscador.setAttribute("id", "buscadorNoct");
        botonIzqD.removeAttribute("src");
        botonIzqD.setAttribute("src", "../assets/button-slider-left-md-noct.svg");
        botonIzqD.addEventListener("mouseover", ()=>{
           botonIzqD.removeAttribute("src");
           botonIzqD.setAttribute("src", "../assets/button-slider-left-md-noct.svg")
        })
        verMas.removeAttribute("src");
        verMas.setAttribute("src", "../assets/CTA-ver+-modo-noc.svg");
        closeD.removeAttribute("src");
        closeD.setAttribute("src", "../assets/close-modo-noct.svg");
        crearD.removeAttribute("src");
        crearD.setAttribute("src", "../assets/CTA-crear-gifo-modo-noc.svg");
        crearD.addEventListener("mouseover", ()=> {
            crearD.removeAttribute("src");
            crearD.setAttribute("src", "../assets/CTA-crear-gifo-hover-modo-noc.svg")
        })
        crearD.addEventListener("mouseout", ()=> {
            crearD.removeAttribute("src");
            crearD.setAttribute("src", "../assets/CTA-crear-gifo-modo-noc.svg")
        })
        crearD.addEventListener("mousedown", ()=> {
            crearD.removeAttribute("src");
            crearD.setAttribute("src", "../assets/CTA-crear-gifo-active-modo-noc.svg");
            
        })
        
        crearD.addEventListener("mouseup", ()=> {
            crearD.removeAttribute("src");
            crearD.setAttribute("src", "../assets/CTA-crear-gifo-modo-noc.svg");
        })
        for(let i=0; i<6; i++){
            p[i].style.color="white";
        }
        modo.innerHTML="Modo Diurno";

        h1[0].style.color="white";
        h4[0].style.color="white";
        h2[0].style.color="white";
        buscar.style.backgroundColor="#37383C";
        buscar.style.color="white";
        b = false;
        for(let i =0 ; i<5;i++) {
            lupitaRes[i].removeAttribute("src");
            lupitaRes[i].setAttribute("src", "../assets/icon-search-mod-noc.svg");
        }
        verMas.addEventListener("mouseover", ()=> {
            verMas.removeAttribute("src");
            verMas.setAttribute("src", "../assets/CTA-ver+hover-modo-noc.svg");
            verMas.style.cursor="pointer";
        })
        verMas.addEventListener("mouseout", ()=> {
            verMas.removeAttribute("src");
            verMas.setAttribute("src", "../assets/CTA-ver+-modo-noc.svg");
        })
        lupitaPrincipal.removeAttribute("src");
        lupitaPrincipal.setAttribute("src", "../assets/icon-search-mod-noc.svg")

        tituloBusqueda.style.color="white";  
    }
    
       
    else if (!b) {
    buscCont2.style.backgroundColor="white";
    logoD.removeAttribute("src");
    logoD.setAttribute("src", "../assets/logo-mobile.svg");
    closeLup.removeAttribute("src");
    closeLup.setAttribute("src", "../assets/close.svg"); 
    lupitaD.removeAttribute("src");
    lupitaD.setAttribute("src", "../assets/icon-search.svg");
    closeD.removeAttribute("src");
    closeD.setAttribute("src", "../assets/close.svg");
    burger.removeAttribute("src");
    burger.setAttribute("src", "../assets/burger.svg");
    botonDerD.removeAttribute("src");
    botonDerD.setAttribute("src", "../assets/Button-Slider-right.svg");
    botonIzqD.removeAttribute("src");
    botonIzqD.setAttribute("src", "../assets/button-slider-left.svg");
    verMas.removeAttribute("src");
    verMas.setAttribute("src", "../assets/../assets/CTA-ver-mas.svg"); 
    lupitaPrincipal.removeAttribute("src");
    lupitaPrincipal.setAttribute("src", "../assets/icon-search.svg");
    crearD.removeAttribute("src");
    crearD.setAttribute("src", "../assets/button-crear-gifo.svg");
    crearD.addEventListener("mouseover", ()=> {
        crearD.removeAttribute("src");
        crearD.setAttribute("src", "../assets/CTA-crear-gifo-hover.svg")
    })
    crearD.addEventListener("mouseout", ()=> {
        crearD.removeAttribute("src");
        crearD.setAttribute("src", "../assets/button-crear-gifo.svg");
    })
    crearD.addEventListener("mousedown", ()=> {
        crearD.removeAttribute("src");
        crearD.setAttribute("src", "../assets/CTA-crear-gifo-active.svg");
        
    })
    
    crearD.addEventListener("mouseup", ()=> {
        crearD.removeAttribute("src");
        crearD.setAttribute("src", "../assets/button-crear-gifo.svg");
    })
    verMas.addEventListener("mouseover", ()=> {
        verMas.removeAttribute("src");
        verMas.setAttribute("src", "../assets/CTA-ver-mas-hover.svg");
        verMas.style.cursor="pointer";
    })
    
    verMas.addEventListener("mouseout", ()=> {
        verMas.removeAttribute("src");
        verMas.setAttribute("src", "../assets/CTA-ver-mas.svg");
    })
    for(let i=0; i<2; i++){
        p[i].style.color="#6742E7";
    }

    for(let i=2; i<6; i++){
        p[i].style.color="black";
    }
    for(let i =0 ; i<5;i++) {
        lupitaRes[i].removeAttribute("src");
        lupitaRes[i].setAttribute("src", "../assets/icon-search.svg");
    }
        h1[0].style.color="#6742E7";
        h4[0].style.color="#6742E7";
        h2[0].style.color="#6742E7";
        buscar.style.backgroundColor="white";
        buscar.style.color="black";
        modo.innerHTML="Modo Nocturno";

        tituloBusqueda.style.color="#6742E7";
        tituloBusqueda.style.color="white";

        b = true;
    }
}




// ===========================FUNCION BUSCADOR=========================================

function autocompletar() {
    async function autocompletar(resultado) {
        let url = `https://api.giphy.com/v1/gifs/search/tags?api_key=${ApiKey}&q=${resultado}&limit=5&offset=0`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
     let datos = autocompletar(buscar.value);
     datos.then(response=> {
         for(let i=0; i<6 ; i++) {
           contenedorMatch.style.display="flex";
           contenedorMatch.style.flexDirection="column";
           contenedorMatch.style.alignItems="flex-start";
           buscCont.style.height="220px";
           buscCont.style.marginBottom="20px";
           matchList.style.display="flex";
           matchList.style.flexDirection="column";
           matchList.style.marginTop="15px";
           matchList.style.width="95%";
           buscCont2.style.marginTop="15px";
           matchList.style.paddingBottom="15px";
           lupitaPrincipal.style.display="block";
           lupitaPrincipal.setAttribute("src", "../assets/icon-search.svg");
           lupitaPrincipal.style.width="20px";
           lupitaPrincipal.style.height="20px";
           lupitaPrincipal.style.transform="translateX(-9px)";
           lupitaRes[i].setAttribute("src", "../assets/icon-search.svg");
           lupitaRes[i].style.width="20px";
           lupitaRes[i].style.height="20px";
           lupitaRes[i].style.transform="translateX(-25px)";
           resultado[i].innerHTML= response.data[i].name;
           
         } searchF();
         gifoEncontrados();
        }).catch(e=>console.log(e)) 
}


for (let i=0 ; i<5 ; i++) {

    resultado[i].addEventListener("click", ()=> {
        matchList.style.display="none";
        buscar.value=resultado[0].innerHTML;
        matchList.style.display="none";
        buscCont.style.height="50px";
        searchF();
        gifoEncontrados();
    }) 
}




//=====================AGRANDAR (MAX Y MIN)=============================
function agrandar(gif, titulo,fav) {
    let contenedorImgBig = document.createElement("div");
    body.appendChild(contenedorImgBig);
    contenedorImgBig.style.width="100%";
    contenedorImgBig.style.height="700px";
    contenedorImgBig.style.backgroundColor="white";
    contenedorImgBig.style.display="flex";
    contenedorImgBig.style.flexDirection="column";
    contenedorImgBig.style.zIndex="1000";
    contenedorImgBig.style.position="fixed";
    contenedorImgBig.style.top="0";
    contenedorImgBig.style.bottom="0";
    contenedorImgBig.style.alignItems="flex-end";
    contenedorImgBig.style.justifyContent="center";
    contenedorImgBig.style.transform="translateY(-10px)";
    contenedorImgBig.style.paddingTop="70px";
    contenedorImgBig.style.paddingBottom="150px";
    let closeD1 = document.createElement("img");
    contenedorImgBig.style.overflow= "auto";
    closeD1.setAttribute("src", "../assets/close.svg");
    closeD1.style.width="20px";
    closeD1.style.height="20px";
    closeD1.style.marginTop="90px";
    closeD1.style.marginRight="180px";
    closeD1.style.marginBottom="100px";
    closeD1.addEventListener("click", ()=> {
        contenedorImgBig.style.display="none";
    })
    closeD1.addEventListener("mouseover", ()=> {
        closeD1.style.cursor="pointer";
    })
    window.addEventListener("keyup", (e)=> {
        if(e.keyCode===27) { 
    
            contenedorImgBig.style.display="none";
        }
    })
    
    contenedorImgBig.appendChild(closeD1);
    let contcompleto = document.createElement("div");
    contcompleto.style.display="flex";
    contcompleto.style.flexDirection="column";
    contcompleto.style.width="95%";
    contcompleto.style.height="95%";
    contcompleto.style.margin="auto";
    contcompleto.style.justifyContent="center";
    contcompleto.style.alignItems="center";
    contcompleto.style.marginRight="95px";
    contcompleto.style.marginBottom="10px";
    contenedorImgBig.appendChild(contcompleto);
    let contflechas = document.createElement("div");
    contflechas.style.display="flex";
    contflechas.style.flexDirection="row";
    contflechas.style.margin="0 auto";
    contflechas.style.width="100%";
    contflechas.style.height="100%";
    contflechas.style.justifyContent="center";
    contflechas.style.alignItems="center";
    contcompleto.appendChild(contflechas);
    let contenedorgifmax = document.createElement("div");
    contenedorgifmax.style.width="700px";
    contenedorgifmax.style.height="400px";
    contflechas.appendChild(contenedorgifmax);

    const gifomaxi = document.createElement("img");
    gifomaxi.setAttribute("src", gif);
    gifomaxi.style.width="100%";
    gifomaxi.style.height="100%";
    contenedorgifmax.appendChild(gifomaxi);
    let titulo_botones = document.createElement("div");
    titulo_botones.style.width="700px";
    titulo_botones.style.height="200px";
    titulo_botones.style.display="flex";
    titulo_botones.style.flexDirection="row";
    titulo_botones.style.justifyContent="space-between";
    contcompleto.appendChild(titulo_botones);
    let titulosmax = document.createElement("div");
    titulosmax.style.width="50%";
    titulosmax.style.height="100%";
    titulo_botones.appendChild(titulosmax);
    let usermax = document.createElement("h4");
    usermax.innerHTML="User";
    usermax.style.fontWeight="100";
    usermax.style.padding="25px 0 5px";
    titulosmax.appendChild(usermax);
    let titulogifmax = document.createElement("h3");
    titulogifmax.innerHTML= titulo;
    titulosmax.appendChild(titulogifmax);
    titulosmax.style.display="flex";
    titulosmax.style.flexDirection="column";
    titulosmax.style.alignItems="flex-start";
    let botonesmax = document.createElement("div");
    botonesmax.style.width="50%";
    botonesmax.style.display="flex";
    botonesmax.style.alignItems="center";
    botonesmax.style.justifyContent="flex-end";
   
    
    let favmax = document.createElement("img");
    favmax.setAttribute("src", "../assets/icon-fav.svg");
    favmax.style.width="45px";
    favmax.style.height="45px";
    botonesmax.appendChild(favmax);
    let downloadlink = document.createElement("a");
    let downloadmax = document.createElement("img");
    downloadlink.appendChild(downloadmax)
    botonesmax.appendChild(downloadlink);
    downloadmax.setAttribute("src", "../assets/icon-download.svg");
    downloadmax.style.width="45px";
    downloadmax.style.height="45px";
    downloadmax.style.margin="0 10px 0 20px";
    titulo_botones.appendChild(botonesmax);
    downloadmax.addEventListener("mouseover", ()=> {
        downloadmax.removeAttribute("src");
        downloadmax.setAttribute("src", "../assets/icon-download-hover.svg")
        downloadmax.style.cursor="pointer";
    })
    downloadmax.addEventListener("mouseout", ()=> {
        downloadmax.removeAttribute("src");
        downloadmax.setAttribute("src", "../assets/icon-download.svg");
    })
    favmax.addEventListener("mouseover", ()=> {
        favmax.removeAttribute("src");
        favmax.setAttribute("src", "../assets/icon-fav-hover.svg")
        favmax.style.cursor="pointer";
    })
    favmax.addEventListener("mouseout", ()=> {
        favmax.removeAttribute("src");
        favmax.setAttribute("src", "../assets/icon-fav.svg");
    })
    
    downloadmax.addEventListener("click", ()=> {
        let href = createBlob(gif);
      href.then(url => {

     downloadlink.setAttribute("href", url);
     downloadlink.setAttribute("download", "mygifo");
    })
    favmax.addEventListener("click", ()=> {
        dataFavoritos.push(fav);
        localStorage.setItem("dataFavoritos", JSON.stringify(dataFavoritos));
        console.log(dataFavoritos);
      })
})
   
    }

    

    
function agrandarMin(gif,titulo,fav){
    let contenedorImgBig = document.createElement("div");
    body.appendChild(contenedorImgBig);
    contenedorImgBig.style.width="100%";
    contenedorImgBig.style.height="700px";
    contenedorImgBig.style.backgroundColor="white"
    contenedorImgBig.style.display="flex";
    contenedorImgBig.style.flexDirection="column";
    contenedorImgBig.style.zIndex="1000";
    contenedorImgBig.style.position="fixed";
    contenedorImgBig.style.top="0";
    contenedorImgBig.style.bottom="0";
    contenedorImgBig.style.alignItems="flex-end";
    contenedorImgBig.style.justifyContent="center";
    contenedorImgBig.style.transform="translateY(-10px)";
    contenedorImgBig.style.paddingTop="70px";
    contenedorImgBig.style.paddingBottom="150px";
    let closeD1 = document.createElement("img");
    contenedorImgBig.style.overflow= "auto";
    closeD1.setAttribute("src", "../assets/close.svg");
    closeD1.style.width="15px";
    closeD1.style.height="15px";
    closeD1.style.marginTop="90px";
    closeD1.style.marginRight="8%";
    closeD1.style.marginBottom="100px";
    closeD1.addEventListener("click", ()=> {
        contenedorImgBig.style.display="none";
    })
    closeD1.addEventListener("mouseover", ()=> {
        closeD1.style.cursor="pointer";
    })
    window.addEventListener("keyup", (e)=> {
        if(e.keyCode===27) { 
    
            contenedorImgBig.style.display="none";
        }
    })
    
    contenedorImgBig.appendChild(closeD1);
    let contcompleto = document.createElement("div");
    contcompleto.style.display="flex";
    contcompleto.style.flexDirection="column";
    contcompleto.style.width="95%";
    contcompleto.style.height="95%";
    contcompleto.style.margin="auto";
    contcompleto.style.justifyContent="center";
    contcompleto.style.alignItems="center";
    contcompleto.style.marginBottom="10px";
    contenedorImgBig.appendChild(contcompleto);
    let contenedorgifmax = document.createElement("div");
    contenedorgifmax.style.width="95%";
    contenedorgifmax.style.height="300px";
    contcompleto.appendChild(contenedorgifmax);
    const gifomaxi = document.createElement("img");
    gifomaxi.setAttribute("src", gif);
    gifomaxi.style.width="100%";
    gifomaxi.style.height="100%";
    contenedorgifmax.appendChild(gifomaxi);
    let titulo_botones = document.createElement("div");
    titulo_botones.style.width="95%";
    titulo_botones.style.height="150px";
    titulo_botones.style.display="flex";
    titulo_botones.style.flexDirection="row";
    titulo_botones.style.justifyContent="space-between";
    contcompleto.appendChild(titulo_botones);
    let titulosmax = document.createElement("div");
    titulosmax.style.width="50%";
    titulosmax.style.height="100%";
    titulo_botones.appendChild(titulosmax);
    let usermax = document.createElement("h4");
    usermax.innerHTML="User";
    usermax.style.fontWeight="100";
    usermax.style.padding="15px 0 3px";
    titulosmax.appendChild(usermax);
    let titulogifmax = document.createElement("h3");
    titulogifmax.innerHTML= titulo;
    titulosmax.appendChild(titulogifmax);
    titulosmax.style.display="flex";
    titulosmax.style.flexDirection="column";
    titulosmax.style.alignItems="flex-start";
    let botonesmax = document.createElement("div");
    botonesmax.style.width="50%";
    botonesmax.style.display="flex";
    botonesmax.style.alignItems="center";
    botonesmax.style.justifyContent="flex-end";
    let favmax = document.createElement("img");
    favmax.setAttribute("src", "../assets/icon-fav.svg");
    favmax.style.width="35px";
    favmax.style.height="35px";
    botonesmax.appendChild(favmax);
    let downloadlink = document.createElement("a");
    let downloadmax = document.createElement("img");
    downloadlink.appendChild(downloadmax)
    botonesmax.appendChild(downloadlink);
    downloadmax.setAttribute("src", "../assets/icon-download.svg");
    downloadmax.style.width="35px";
    downloadmax.style.height="35px";
    downloadmax.style.margin="0 10px 0 20px";
    titulo_botones.appendChild(botonesmax);
    downloadmax.addEventListener("mouseover", ()=> {
        downloadmax.removeAttribute("src");
        downloadmax.setAttribute("src", "../assets/icon-download-hover.svg")
        downloadmax.style.cursor="pointer";
    })
    downloadmax.addEventListener("mouseout", ()=> {
        downloadmax.removeAttribute("src");
        downloadmax.setAttribute("src", "../assets/icon-download.svg");
    })
    favmax.addEventListener("mouseover", ()=> {
        favmax.removeAttribute("src");
        favmax.setAttribute("src", "../assets/icon-fav-hover.svg")
        favmax.style.cursor="pointer";
    })
    favmax.addEventListener("mouseout", ()=> {
        favmax.removeAttribute("src");
        favmax.setAttribute("src", "../assets/icon-fav.svg");
    })
    
    downloadmax.addEventListener("click", ()=> {
        let href = createBlob(gif);
      href.then(url => {

     downloadlink.setAttribute("href", url);
     downloadlink.setAttribute("download", "mygifo");
    })
    favmax.addEventListener("click", ()=> {
        dataFavoritos.push(fav);
        localStorage.setItem("dataFavoritos", JSON.stringify(dataFavoritos));
        console.log(dataFavoritos);
      })
})  }




buscar.addEventListener("input", ()=> {
autocompletar();
lupitaD.style.display="none";
closeLup.style.display="block";
})


closeLup.addEventListener("click", ()=>{
    matchList.style.display="none";
    contTituloF.style.display="none";
    closeLup.style.display="none";
    lupitaD.style.display="block";
    gifosEncontrados.style.display="none";
    verMasCont.style.display="none";
    categorias.style.display="block";
    trendingsN.style.display="block";
    contPalabra.style.display="none";
    lupitaPrincipal.style.display="none"; 
    buscCont.style.height="50px";
    categorias.style.paddingBottom="15px";
}
)


//=======================GIFS TRENDING Y FUNCIÓN FLECHA===================
function trendingF() {

    async function buscarTrending() {
        let url = `https://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}&q=Proyecto%202&limit=3&offset=0&rating=g&lang=en`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
  let datos = buscarTrending();

  datos.then(response=> {
    console.log(response.data);
    for(let i=0;i<3;i++) {
    
    if(window.matchMedia("(min-width:780px)").matches) {
    let imgid = i + 1
    imgid = 'trending' + imgid;
    let gifo = document.getElementById(imgid);
    gifo.setAttribute("src", response.data[i].images.original.url);
    titulo[i].innerHTML=response.data[i].title;
    let download1 = document.createElement("img");
    let favor1 = document.createElement("img");
    let max1 = document.createElement("img");
    download1.setAttribute("src", "../assets/icon-download.svg");
    favor1.setAttribute("src", "../assets/icon-fav.svg");
    max1.setAttribute("src", "../assets/icon-max-normal.svg");
    download1.setAttribute("class", "icono");
    favor1.setAttribute("class", "icono");
    max1.setAttribute("class", "icono");
    let linkDescarga1 = document.createElement("a");
    linkDescarga1.setAttribute("download", "mygifo.gif");
    botones[i].appendChild(linkDescarga1);
    linkDescarga1.appendChild(download1);
    botones[i].appendChild(favor1);
    botones[i].appendChild(max1);
    favor1.addEventListener("click", ()=> {
        dataFavoritos.push(response.data[i]);
        console.log(dataFavoritos);
        localStorage.setItem("dataFavoritos", JSON.stringify(dataFavoritos));
      });
     
        max1.addEventListener("click", ()=> {
            agrandar(response.data[i].images.original.url, response.data[i].title, response.data[i]);
        });
        download1.addEventListener("click", ()=> {
            let href = createBlob(response.data[i].images.original.url);
           href.then(url => {
    
            linkDescarga1.setAttribute("href", url);
        })
        linkDescarga1.setAttribute("download", "mygifo");})
    
        download1.addEventListener("mouseover", ()=> {
            download1.removeAttribute("src");
            download1.setAttribute("src", "../assets/icon-download-hover.svg");
        })
        download1.addEventListener("mouseout", ()=> {
            download1.removeAttribute("src");
            download1.setAttribute("src", "../assets/icon-download.svg");
        })
    favor1.addEventListener("mouseover", ()=> {
        favor1.removeAttribute("src");
        favor1.setAttribute("src", "../assets/icon-fav-hover.svg")});
        favor1.addEventListener("mouseout", ()=> {
        favor1.removeAttribute("src");
        favor1.setAttribute("src", "../assets/icon-fav.svg");
        })
        max1.addEventListener("mouseover", ()=> {
            max1.removeAttribute("src");
            max1.setAttribute("src", "../assets/icon-max-hover.svg");
        })
        max1.addEventListener("mouseout", ()=> {
            max1.removeAttribute("src");
            max1.setAttribute("src", "../assets/icon-max-normal.svg");
        })
        
          favor1.addEventListener("mousedown", ()=>{
          favor1.removeAttribute("src");
          favor1.setAttribute("src", "../assets/icon-fav-active.svg");})  
          favor1.addEventListener("mouseup", ()=>{
            favor1.removeAttribute("src");
            favor1.setAttribute("src", "../assets/icon-fav.svg");}) 
    } else  ;{
        let imgid = i + 1;
        imgid = 'trending' + imgid;
        let gifo = document.getElementById(imgid);
        gifo.setAttribute("src", response.data[i].images.original.url);
        titulo[i].innerHTML=response.data[i].title;
        flechas.style.overflowX="hidden";
        gifTrending.style.overflowX="scroll";
        gifTrending.style.overflowY="hidden";
        divFantasma[i].addEventListener("click", ()=> {
            agrandarMin(response.data[i].images.original.url, response.data[i].title, response.data[i]);
        })}

   } } ).catch(e=> console.log(e))
}



function flecha(signo) {
    if (signo == '+') {
        position = position + 1
    } else if (signo == '-') {
        if (position == 1) return
        position = position - 1
    }

    async function buscarTrending() {
        let url = `https://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}&q=Proyecto%202&limit=12&offset=0&rating=g&lang=en`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
    
    let datos =  buscarTrending();
    let n = (3*position)-3
    let gif_id = 1
    datos.then(response=>{
    for(let i = n; i < n+3; i++) {
    let imgid = 'trending' + gif_id
    let gifo = document.getElementById(imgid);
    gifo.setAttribute("src", response.data[i].images.original.url);
    titulo[gif_id-1].innerHTML=response.data[i].title;
    let download1 = document.createElement("img");
    let favor1 = document.createElement("img");
    let max1 = document.createElement("img");
    download1.setAttribute("src", "../assets/icon-download.svg");
    favor1.setAttribute("src", "../assets/icon-fav.svg");
    max1.setAttribute("src", "../assets/icon-max-normal.svg");
    download1.setAttribute("class", "icono");
    favor1.setAttribute("class", "icono");
    max1.setAttribute("class", "icono");
    botones[gif_id-1].innerHTML="";
    let linkDescarga = document.createElement("a");
    linkDescarga.setAttribute("download", "mygifo.gif");
    botones[gif_id-1].appendChild(linkDescarga);
    linkDescarga.appendChild(download1);
    botones[gif_id-1].appendChild(favor1);
    botones[gif_id-1].appendChild(max1);
        download1.addEventListener("click", ()=> {
            let href = createBlob(response.data[i].images.original.url);
           href.then(url => {
            linkDescarga.setAttribute("href", url);
        })
        linkDescarga.setAttribute("download", "mygifo");
        });


        favor1.addEventListener("click", ()=> {
            dataFavoritos.push(response.data[i]);
            console.log(dataFavoritos);
            localStorage.setItem("dataFavoritos", JSON.stringify(dataFavoritos));
        })
         max1.addEventListener("click", ()=> {
             agrandar(response.data[i].images.original.url, response.data[i].title, response.data[i]);
         })
            console.log(position);
            gif_id += 1;
    }}).catch(e=>console.log(e))
}




//==================FUNCION BUSCAR Y "VER MAS"=======================
function searchF() {
    async function buscarGifos(valor) {
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${valor}&limit=12&offset=0&rating=g&lang=en`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
     }

    let datos = buscarGifos(buscar.value);
    gifosEncontrados.innerHTML="";
    datos.then(response=> {
        console.log(response.data);
        if (response.data == 0) {
            trendingsN.style.display="block";
            categorias.style.display="block";
            categorias.style.paddingBottom="100px";
            verMasCont.style.display="none";
            gifosEncontrados.style.display="flex";
            gifosEncontrados.style.flexDirection="column";
            gifosEncontrados.style.justifyContent="center";
            gifosEncontrados.style.alignItems="center";
            gifosEncontrados.style.margin="80px auto 20px";
            let ouch = document.createElement("img");
            ouch.setAttribute("src", "../assets/icon-busqueda-sin-resultado.svg");
            gifosEncontrados.appendChild(ouch);
            let errorTexto = document.createElement("h2");
            errorTexto.innerHTML= "Intenta con otra busqueda."
            errorTexto.style.color="#4FE3C1";
            errorTexto.style.padding="30px 0 40px";
            gifosEncontrados.appendChild(errorTexto);
         }  
          else
          {
     for(let i=0;i<=12;i++) {
        let gifo = document.createElement('img');
        gifo.setAttribute("src",response.data[i].images.original.url);
        gifosSearchF.push(response.data[i].images.original.url);
        gifo.setAttribute("class", "gifosBuscados");
        let container1 = document.createElement("div");
        gifosEncontrados.appendChild(container1);
        container1.setAttribute("class", "container1");
       let contenedorBusqueda = document.createElement("div");
       container1.appendChild(gifo);
       contenedorBusqueda.setAttribute("class", "contenedor-trending");
       container1.appendChild(contenedorBusqueda);
    if((window.matchMedia("(min-width:780px)").matches)) {
     
     let violeta1 = document.createElement("div");
     violeta1.setAttribute("class", "violeta1");
     contenedorBusqueda.appendChild(violeta1);
     let botones1 = document.createElement("div");
     violeta1.appendChild(botones1);
     let download1 = document.createElement("img");
     let favor1 = document.createElement("img");
     let max1 = document.createElement("img");
     download1.setAttribute("src", "../assets/icon-download.svg");
     favor1.setAttribute("src", "../assets/icon-fav.svg");
     max1.setAttribute("src", "../assets/icon-max-normal.svg");
     download1.setAttribute("class", "icono");
     favor1.setAttribute("class", "icono");
     max1.setAttribute("class", "icono");
     let linkDescarga1 = document.createElement("a");
     linkDescarga1.setAttribute("download", "mygifo.gif");
     botones1.appendChild(linkDescarga1);
     linkDescarga1.appendChild(download1);
     botones1.appendChild(favor1);
     botones1.appendChild(max1);
     botones1.style.padding="10px 10px";
     let contTitulo = document.createElement("div");
     contTitulo.setAttribute("class", "cont-titulo");
     violeta1.appendChild(contTitulo);
     let user1 = document.createElement("h4");
     user1.innerHTML="User";
     user1.setAttribute("class", "user");
     contTitulo.appendChild(user1);
     let titulo1 = document.createElement("h3");
     titulo1.setAttribute("class", "titulo");
     contTitulo.appendChild(titulo1);
     titulo1.innerHTML=response.data[i].title;
     contTitulo.style.padding="0px 0px 25px 10px";
        download1.addEventListener("mouseover", ()=> {
            download1.removeAttribute("src");
            download1.setAttribute("src", "../assets/icon-download-hover.svg");
        })

        download1.addEventListener("click", ()=> {
            let href = createBlob(response.data[i].images.original.url);
           href.then(url => {
    
            linkDescarga1.setAttribute("href", url);
        })
        linkDescarga1.setAttribute("download", "mygifo");
    }
        )

        download1.addEventListener("mouseout", ()=> {
            download1.removeAttribute("src");
            download1.setAttribute("src", "../assets/icon-download.svg");
        })
        
        favor1.addEventListener("mouseover", ()=> {
            favor1.removeAttribute("src");
            favor1.setAttribute("src", "../assets/icon-fav-hover.svg");
        })
        favor1.addEventListener("mouseout", ()=> {
            favor1.removeAttribute("src");
            favor1.setAttribute("src", "../assets/icon-fav.svg");
        })
        max1.addEventListener("mouseover", ()=> {
            max1.removeAttribute("src");
            max1.setAttribute("src", "../assets/icon-max-hover.svg");
        })
        max1.addEventListener("mouseout", ()=> {
            max1.removeAttribute("src");
            max1.setAttribute("src", "../assets/icon-max-normal.svg");
        })
        favor1.addEventListener("mousedown", ()=>{
            favor1.removeAttribute("src");
            favor1.setAttribute("src", "../assets/icon-fav-active.svg");})

        favor1.addEventListener("click", ()=> {
            dataFavoritos.push(response.data[i]);
            console.log(dataFavoritos);
            localStorage.setItem("dataFavoritos", JSON.stringify(dataFavoritos));
          })
         
            max1.addEventListener("click", ()=> {
                agrandar(response.data[i].images.original.url, response.data[i].title, response.data[i]);
            });
        }
        else; {
            let divFantasma1 = document.createElement("div");
            divFantasma1.setAttribute("class", "div-fantasma1");
            contenedorBusqueda.appendChild(divFantasma1);
            divFantasma1.addEventListener("click", ()=> {
                agrandarMin(response.data[i].images.original.url, response.data[i].title, response.data[i]);
            });
        }
            }
        }
        }
            ).catch(e=>console.log(e))
        }
  



  function searchMas() {
    async function buscarGifos(valor) {    
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${valor}&limit=${limit + 11}offset=0&rating=g&lang=en`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
    
    let datos = buscarGifos(buscar.value);
    datos.then(response=> {
    for(let i=limit;i<=limit+11;i++) {
     let gifo = document.createElement('img');
     gifo.setAttribute("src",response.data[i].images.original.url);
     gifo.setAttribute("class", "gifosBuscados");
     let container1 = document.createElement("div");
     gifosEncontrados.appendChild(container1);
     container1.setAttribute("class", "container1");
     let contenedorBusqueda = document.createElement("div");
     container1.appendChild(gifo);
     contenedorBusqueda.setAttribute("class", "contenedor-trending");
     container1.style.height="230px";
     container1.appendChild(contenedorBusqueda);

     if((window.matchMedia("(min-width:780px)").matches)) {
     let violeta1 = document.createElement("div");
     violeta1.setAttribute("class", "violeta1");
     let divFantasma1 = document.createElement("div");
     divFantasma1.setAttribute("class", "div-fantasma1");
     contenedorBusqueda.appendChild(divFantasma1);
     contenedorBusqueda.appendChild(violeta1);
     let botones1 = document.createElement("div");
     violeta1.appendChild(botones1);
     let download1 = document.createElement("img");
     let favor1 = document.createElement("img");
     let max1 = document.createElement("img");
     download1.setAttribute("src", "../assets/icon-download.svg");
     favor1.setAttribute("src", "../assets/icon-fav.svg");
     max1.setAttribute("src", "../assets/icon-max-normal.svg");
     download1.setAttribute("class", "icono");
     favor1.setAttribute("class", "icono");
     max1.setAttribute("class", "icono");
     let linkDescarga1 = document.createElement("a");
     linkDescarga1.setAttribute("download", "mygifo.gif");
     botones1.appendChild(linkDescarga1);
     linkDescarga1.appendChild(download1);
     botones1.appendChild(favor1);
     botones1.appendChild(max1);
     botones1.style.paddingTop="5px";
     let contTitulo = document.createElement("div");
     contTitulo.setAttribute("class", "cont-titulo");
     violeta1.appendChild(contTitulo);
     let user1 = document.createElement("h4");
     user1.innerHTML="User";
     user1.setAttribute("class", "user");
     contTitulo.appendChild(user1);
     let titulo1 = document.createElement("h3");
     titulo1.setAttribute("class", "titulo");
     contTitulo.appendChild(titulo1);
     titulo1.innerHTML=response.data[i].title;
     contTitulo.style.padding="0px 0px 25px 10px";
        download1.addEventListener("mouseover", ()=> {
            download1.removeAttribute("src");
            download1.setAttribute("src", "../assets/icon-download-hover.svg");
        })
        
        download1.addEventListener("mouseout", ()=> {
            download1.removeAttribute("src");
            download1.setAttribute("src", "../assets/icon-download.svg");
        })
        
        favor1.addEventListener("mouseover", ()=> {
            favor1.removeAttribute("src");
            favor1.setAttribute("src", "../assets/icon-fav-hover.svg");
        })
        favor1.addEventListener("mouseout", ()=> {
            favor1.removeAttribute("src");
            favor1.setAttribute("src", "../assets/icon-fav.svg");
        })
        max1.addEventListener("mouseover", ()=> {
            max1.removeAttribute("src");
            max1.setAttribute("src", "../assets/icon-max-hover.svg");
        })
        max1.addEventListener("mouseout", ()=> {
            max1.removeAttribute("src");
            max1.setAttribute("src", "../assets/icon-max-normal.svg");
        })
        favor1.addEventListener("mousedown", ()=>{
            favor1.removeAttribute("src");
            favor1.setAttribute("src", "../assets/icon-fav-active.svg");});
        linkDescarga1.addEventListener("click", ()=>{
                 let href = createBlob(response.data[i].images.original.url);
           href.then(url => {
    
            linkDescarga1.setAttribute("href", url);
        })
        linkDescarga1.setAttribute("download", "mygifo");
            })
        favor1.addEventListener("click", ()=> {
            dataFavoritos.push(response.data[i]);
          console.log(dataFavoritos);
          localStorage.setItem("dataFavoritos", JSON.stringify(dataFavoritos));
      })
        max1.addEventListener("click", ()=> {
            agrandar(response.data[i].images.original.url, response.data[i].title);
        })} 
        else ; {
            let divFantasma1 = document.createElement("div");
            divFantasma1.setAttribute("class", "div-fantasma1");
            contenedorBusqueda.appendChild(divFantasma1);
            divFantasma1.addEventListener("click", ()=> {
                agrandarMin(response.data[i].images.original.url, response.data[i].title, response.data[i]);
            });
        }        
    }
    limit=limit+12;}
    )
    .catch(e=> console.log(e)
    )
}




    function gifoEncontrados() { 
        gifosEncontrados.style.display= "grid";
        gifosEncontrados.style.gridTemplateRows ="repeat(3, 230px)";
        gifosEncontrados.style.gridTemplateColumns="repeat(4, 1fr)";
        trendingsN.style.display="none";
        categorias.style.display="none";
        contTituloF.innerHTML="";
        contTituloF.style.display="block";
        contPalabra.style.display="block";
        tituloBusqueda.style.display="flex";
        contPalabra.appendChild(tituloBusqueda);
        tituloBusqueda.innerHTML=`${buscar.value}`;
        tituloBusqueda.style.textTransform="uppercase";
        tituloBusqueda.style.fontWeight="bold";
        tituloBusqueda.style.padding="30px";
        tituloBusqueda.style.fontSize="22px";
        tituloBusqueda.style.fontFamily="'Montserrat', sans-serif";
        tituloBusqueda.style.color="#6742E7";
        verMasCont.style.display="flex";
        verMasCont.style.justifyContent= "center";
        verMasCont.style.alignItems= "center";
        verMasCont.style.margin="auto";
        verMasCont.style.padding= "50px";
        lupitaD.style.display="none";
        closeLup.style.display="block";
    }



function gifoMas() { 
    gifosEncontrados.style.display= "grid";
    gifosEncontrados.style.gridTemplateRows =`"repeat(3, 230px)"`;
    gifosEncontrados.style.gridTemplateColumns="repeat(4, minmax(200px, 1fr))";
}



//==================FUNCIÓN "RESIZE"==============
function windowB () {
    if (window.matchMedia("(min-width: 780px)").matches) {
      gifosEncontrados.style.gridTemplateRows ="repeat(3, 230px)";
      console.log("entre!");
      gifosEncontrados.style.gridTemplateColumns="repeat(4, minmax(200px, 1fr))";
      menu.style.display="flex";
      crearD.style.display="block";
    } else {
      gifosEncontrados.style.gridTemplateRows ="repeat(6, 230px)";
      gifosEncontrados.style.gridTemplateColumns="repeat(2, minmax(200px, 1fr))";
      gifTrending.style.justifyContent="flex-start";
      crearD.style.display="none";
      closeD.style.display="none";
      burger.style.display="block";
      menu.style.display="none";
      buscCont.style.width="80%";
      
    }}
    
    
  

window.addEventListener("resize", ()=> {
    windowB();
    
})


//Generador de Buscados



//===============FUNCIONES FAVORITOS Y DOWNLOAD======================
function checkForAddedFavoritos() {
    console.log("chequeo added Mis GIFOS");
    if (localStorage.getItem("dataFavoritos")) {
      let  dataFavoritos = JSON.parse(localStorage.getItem("dataFavoritos"));
    } else if (localStorage.getItem("dataFavoritos") == null) {
       let dataFavoritos = [];
    }
    return dataFavoritos;
}


async function createBlob(url) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.log("ERROR: ", error);
    }
}


function agregarfav() {
    if (localStorage.getItem('dataFavoritos')) {
        dataFavoritos = JSON.parse(localStorage.getItem('dataFavoritos'));
    } else if (localStorage.getItem('dataFavoritos') == null) {
        dataFavoritos = [];
    }
    return dataFavoritos;
}



//==================EVENTOS Y FUNCIONES GENERALES=====================

lupitaD.addEventListener("click",()=>{
    gifoEncontrados();
    searchF();
    verMasCont.style.display="flex";
    matchList.style.display="none";
}  )


buscar.addEventListener("keyup", (e)=> {
    if(e.keyCode===13) { 
    gifoEncontrados();
    searchF();
    matchList.style.display="none";
    buscCont.style.height="50px";
    }
})

botonDerH.addEventListener("click", () => {
    flecha('+');
    gifTrending.scrollBy({left: 384, behavior: 'smooth'});
});


botonIzqD.addEventListener("click", () => {
    flecha('-');
});



verMas.addEventListener("click", ()=> {
    searchMas();
     gifoMas();
})


trendingF();
checkForAddedFavoritos()
agregarfav();




// IF CHECK FOR NIGHTMODE STATUS IN LOCAL STORAGE



