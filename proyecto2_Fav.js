//Variables importadas
const barra = document.getElementById("barra");
 const logoMobile = document.getElementById("logo-mobile");
 const logoD = document.getElementById("logo-d");
 const body = document.getElementById("body");
 const burga = document.getElementById("burga");
 const burger = document.getElementById("burger");
 const closeD = document.getElementById("close-d");
 const menu = document.getElementById("menu");
 const menuInt = document.getElementById("menu-int");
 const modo = document.getElementById("modo");
 const linkF = document.getElementById("link-f");
 const linkG = document.getElementById("link-g");
 const header = document.getElementById("header");
 const crearD = document.getElementById("crear-d");
 const favoritos = document.getElementById("favoritos");
 const contFavoritos = document.getElementById("contFavoritos");
 const verMasCont = document.getElementById("ver-mas-cont");
 const verMas = document.getElementById("ver-mas");
 const botonIzqD = document.getElementById("boton-izq-d");
 const botonIzqN = document.getElementById("boton-izq-n");
 const botonIzqH = document.getElementById("boton-izq-h");
 const botonDerD = document.getElementById("boton-der-d");
 const botonDerN = document.getElementById("boton-der-n");
 const botonDerH = document.getElementById("boton-der-h");
 const facebook = document.getElementById("facebook-d");
 const twitter = document.getElementById("twitter-d");
 const instagram = document.getElementById("instagram-d");
const contenedorFav0 = document.getElementById("fav-0");
const gifTrending = document.getElementById("gif-trending");
const imgFav0 = document.getElementById("fav-s");
const ApiKey = "og2cGOovwMy2VkjKm8PCJRTApTXFM8BJ";
const cursor = document.getElementsByClassName("pointer");
const violeta = document.getElementsByClassName("violeta");
const trending = document.getElementById("trending");
const trendingGif = document.getElementsByClassName("trending_gifs");
 const container = document.getElementsByClassName("container");
const matchList = document.getElementById("matchList");
const resultado= document.getElementsByClassName("resultado");
const closeLup = document.getElementById("close-lup");
const botones = document.getElementsByClassName("botones");
const download= document.getElementsByClassName("download");
const favor = document.getElementsByClassName("favor");
const max = document.getElementsByClassName("max");
const divFantasma = document.getElementsByClassName("div-fantasma");
const titulo = document.getElementsByClassName("titulo");
const icono1 = document.getElementsByClassName("icono");
const linkDescarga = document.getElementsByClassName("link-descarga");
const footer = document.getElementById("footer");
const h1 = document.getElementsByTagName("h1");
const p = document.getElementsByTagName("p");
const h2 = document.getElementsByTagName("h2");
const h4 = document.getElementsByTagName("h4");
const link = document.getElementsByTagName("a");
const sectionFav = document.getElementById("section-fav");
let modosToggle = false;
let position = 1;
link[2].style.color="rgb(150,150,150)";
link[2].style.cursor="default";
let dataFavoritos1 = []
let hiddenfav = []
let indexfav = 1;
//hovers y actives




console.log(dataFavoritos1);

verMas.addEventListener("mouseover", ()=> {
    verMas.removeAttribute("src");
    verMas.setAttribute("src", "assets-usados/CTA-ver-mas-hover.svg");
    verMas.style.cursor="pointer";
})

verMas.addEventListener("mouseout", ()=> {
    verMas.removeAttribute("src");
    verMas.setAttribute("src", "assets-usados/CTA-ver-mas.svg");
})




botonIzqH.addEventListener("mouseout", ()=> {
    botonIzqH.style.display="none";
    botonIzqD.style.display="block";
    
} )
botonIzqD.addEventListener("mouseover", ()=> { 
    botonIzqD.style.display="none";
    botonIzqH.style.display="block";
    
  }
)


botonIzqH.addEventListener("mouseover", ()=> {
botonIzqH.style.cursor= "pointer";})


botonIzqH.addEventListener("mouseout", ()=> {
    botonIzqH.style.display="none";
    botonIzqD.style.display="block";
    
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
    crearD.setAttribute("src", "assets-usados/CTA-crear-gifo-hover.svg");
})

crearD.addEventListener("mouseout", ()=> {
    crearD.removeAttribute("src");
    crearD.setAttribute("src", "assets-usados/button-crear-gifo.svg");
})

crearD.addEventListener("mousedown", ()=> {
    crearD.removeAttribute("src");
    crearD.setAttribute("src", "assets-usados/CTA-crear-gifo-active.svg");
    
})

crearD.addEventListener("mouseup", ()=> {
    crearD.removeAttribute("src");
    crearD.setAttribute("src", "assets-usados/button-crear-gifo.svg");
})






burger.addEventListener("click", ()=> {
    menu.style.display="flex";
    menuInt.style.display="flex";
    closeD.style.display="block";
    burger.style.display="none";
    menu.style.backgroundColor="#6742E7";
})

closeD.addEventListener("click", ()=> {
    menu.style.display="none";
    closeD.style.display="none";
    burger.style.display="block";
    menu.style.backgroundColor="white";
})


logoD.addEventListener("click", ()=> {
    window.location.reload();
})

twitter.addEventListener("mouseover", ()=> {
    twitter.removeAttribute("src");
    twitter.setAttribute("src", "assets-usados/icon-twitter-hover.svg");
})

twitter.addEventListener("mouseout", ()=> {
    twitter.removeAttribute("src");
    twitter.setAttribute("src", "assets-usados/icon-twitter.svg");
})


facebook.addEventListener("mouseover", ()=> {
    facebook.removeAttribute("src");
    facebook.setAttribute("src", "assets-usados/icon-facebook.svg");

})

facebook.addEventListener("mouseout", ()=> {
    facebook.removeAttribute("src");
    facebook.setAttribute("src", "assets-usados/icon-facebook_hover.svg");

})

instagram.addEventListener("mouseover", ()=> {
    instagram.removeAttribute("src");
    instagram.setAttribute("src", "assets-usados/icon_instagram-hover.svg")
})

instagram.addEventListener("mouseout", ()=> {
    instagram.removeAttribute("src");
    instagram.setAttribute("src", "assets-usados/icon_instagram.svg");
})


function agregarfav() {
    if (localStorage.getItem('dataFavoritos')) {
        dataFavoritos1 = JSON.parse(localStorage.getItem('dataFavoritos'));
    } else if (localStorage.getItem('dataFavoritos') == null) {
        dataFavoritos1 = [];
    }
    return dataFavoritos1;
}

agregarfav();


//Trendings

let getData = JSON.parse(localStorage.getItem("dataFavoritos"));

console.log(getData);
console.log(getData[0].images.original.url);
//Flechas




let nightmode_check = localStorage.getItem("nightmode-status");

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
    barra.classList.toggle("noctBarra");
    favoritos.classList.toggle("favoritosNoct");
    menuInt.classList.toggle("menu-intNoct");
    contFavoritos.classList.toggle("contFavoritosNoct")
    contenedorFav0.classList.toggle("fav-0-noct");
    trending.classList.toggle("trendingNoct");
    footer.classList.toggle("footerNoct");
    header.classList.toggle("headerNoct");
    for (let i = 0; i < link.length; i++) {
        link[i].classList.toggle("linkNoct");
    }
    // toggle logo + menú icons
    if (b) {
        verMasCont.style.backgroundColor="#37383C";
        logoD.removeAttribute("src");
        logoD.setAttribute("src", "assets-usados/logo-mobile-modo-noct.svg");
        
        burger.removeAttribute("src");
        burger.setAttribute("src", "assets-usados/burger-modo-noct.svg");
        botonDerD.removeAttribute("src");
        botonDerD.setAttribute("src", "assets-usados/button-slider-right-md-noct.svg");
        botonIzqD.removeAttribute("src");
        botonIzqD.removeAttribute("src");
        botonIzqD.setAttribute("src", "assets-usados/button-slider-left-md-noct.svg");
        botonIzqD.addEventListener("mouseover", ()=>{
           botonIzqD.removeAttribute("src");
           botonIzqD.setAttribute("src", "assets-usados/button-slider-left-md-noct.svg")
        })
        verMas.removeAttribute("src");
        verMas.setAttribute("src", "assets-usados/CTA-ver+-modo-noc.svg");
        closeD.removeAttribute("src");
        closeD.setAttribute("src", "assets-usados/close-modo-noct.svg");
        crearD.removeAttribute("src");
        crearD.setAttribute("src", "assets-usados/CTA-crear-gifo-modo-noc.svg");
        crearD.addEventListener("mouseover", ()=> {
            crearD.removeAttribute("src");
            crearD.setAttribute("src", "assets-usados/CTA-crear-gifo-hover-modo-noc.svg")
        })
        crearD.addEventListener("mouseout", ()=> {
            crearD.removeAttribute("src");
            crearD.setAttribute("src", "assets-usados/CTA-crear-gifo-modo-noc.svg")
        })
        for(let i=0; i<4; i++){
            p[i].style.color="white";
        }
        modo.innerHTML="Modo Diurno";
        h4[0].style.color="white";
        for(let i=0; i<2; i++){
            h2[i].style.color="white";
        }
        
        b = false;
        verMas.addEventListener("mouseover", ()=> {
            verMas.removeAttribute("src");
            verMas.setAttribute("src", "assets-usados/CTA-ver+hover-modo-noc.svg");
            verMas.style.cursor="pointer";
        })
        verMas.addEventListener("mouseout", ()=> {
            verMas.removeAttribute("src");
            verMas.setAttribute("src", "assets-usados/CTA-ver+-modo-noc.svg");
        })

       
    }
    
       
    else if (!b) {
    logoD.removeAttribute("src");
    logoD.setAttribute("src", "assets-usados/logo-mobile.svg");
    closeD.removeAttribute("src");
    closeD.setAttribute("src", "assets-usados/close.svg");
    crearD.removeAttribute("src");
    crearD.setAttribute("src", "assets-usados/button-crear-gifo.svg");
    burger.removeAttribute("src");
    burger.setAttribute("src", "assets-usados/burger.svg");
    botonDerD.removeAttribute("src");
    botonDerD.setAttribute("src", "assets-usados/Button-Slider-right.svg");
    botonIzqD.removeAttribute("src");
    botonIzqD.setAttribute("src", "assets-usados/button-slider-left.svg");
    verMasCont.style.backgroundColor="white";
    verMas.removeAttribute("src");
    verMas.setAttribute("src", "assets-usados/assets-usados/CTA-ver-mas.svg"); 
    crearD.addEventListener("mouseover", ()=> {
        crearD.removeAttribute("src");
        crearD.setAttribute("src", "assets-usados/CTA-crear-gifo-hover.svg");
    })
    
    crearD.addEventListener("mouseout", ()=> {
        crearD.removeAttribute("src");
        crearD.setAttribute("src", "assets-usados/button-crear-gifo.svg");
    })
    
    crearD.addEventListener("mousedown", ()=> {
        crearD.removeAttribute("src");
        crearD.setAttribute("src", "assets-usados/CTA-crear-gifo-active.svg");
        
    })
    
    crearD.addEventListener("mouseup", ()=> {
        crearD.removeAttribute("src");
        crearD.setAttribute("src", "assets-usados/button-crear-gifo.svg");
    })
    verMas.addEventListener("mouseover", ()=> {
        verMas.removeAttribute("src");
        verMas.setAttribute("src", "assets-usados/CTA-ver-mas-hover.svg");
        verMas.style.cursor="pointer";
    })
    
    verMas.addEventListener("mouseout", ()=> {
        verMas.removeAttribute("src");
        verMas.setAttribute("src", "assets-usados/CTA-ver-mas.svg");
    })
    for(let i=0; i<4; i++){
        p[i].style.color="black";
    }
        h4[0].style.color="#6742E7";
    for(let i=0; i<2; i++){
        h2[i].style.color="#6742E7";
     }
        modo.innerHTML="Modo Nocturno";
        b = true;
    }
}





function FavoritosComp() {
    let favMostrados = getData.filter(function (favs, index){
        return index < 12*indexfav})   
    favMostrados.forEach(element => {
    favoritos.style.width="100%";
    let gifofav = document.createElement("img");
    gifofav.setAttribute("src", element.images.original.url);
    gifofav.style.width="100%";
    gifofav.style.height="100%";
    let container1 = document.createElement("div");
    contFavoritos.appendChild(container1);
    contenedorFav0.style.display="none";
    container1.setAttribute("class", "container1");
    let contenedorBusqueda = document.createElement("div");
    container1.appendChild(gifofav);
    contenedorBusqueda.setAttribute("class", "contenedor-trending");
    container1.appendChild(contenedorBusqueda);

     if((window.matchMedia("(min-width:780px)").matches)) {
    let violeta1 = document.createElement("div");
    violeta1.setAttribute("class", "violeta1");
    contenedorBusqueda.appendChild(violeta1);
    violeta1.style.transform="translateY(0px)";
    let botones1 = document.createElement("div");
    violeta1.appendChild(botones1);
    let download1 = document.createElement("img");
    let favor1 = document.createElement("img");
    let max1 = document.createElement("img");
    download1.setAttribute("src", "assets-usados/icon-download.svg");
    favor1.setAttribute("src", "assets-usados/icon-fav-active.svg");
    max1.setAttribute("src", "assets-usados/icon-max-normal.svg");
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
     violeta1.style.width="100%";
     violeta1.style.height="100%";
     let contTitulo = document.createElement("div");
     contTitulo.setAttribute("class", "cont-titulo");
     violeta1.appendChild(contTitulo);
     let user1 = document.createElement("h4");
     violeta1.appendChild(contTitulo);
     user1.innerHTML="User";
     user1.setAttribute("class", "user");
     contTitulo.appendChild(user1);
     let titulo1 = document.createElement("h3");
     titulo1.setAttribute("class", "titulo");
     contTitulo.appendChild(titulo1);
     titulo1.innerHTML=element.title;
     contTitulo.style.padding="0px 0px 25px 10px";
       download1.addEventListener("mouseover", ()=> {
           download1.removeAttribute("src");
           download1.setAttribute("src", "assets-usados/icon-download-hover.svg");
       })
       
       download1.addEventListener("mouseout", ()=> {
           download1.removeAttribute("src");
           download1.setAttribute("src", "assets-usados/icon-download.svg");
       })
       
       favor1.addEventListener("mouseover", ()=> {
           favor1.removeAttribute("src");
           favor1.setAttribute("src", "assets-usados/icon-fav-hover.svg");
       })
       favor1.addEventListener("mouseout", ()=> {
           favor1.removeAttribute("src");
           favor1.setAttribute("src", "assets-usados/icon-fav-active.svg");
       })
       max1.addEventListener("mouseover", ()=> {
           max1.removeAttribute("src");
           max1.setAttribute("src", "assets-usados/icon-max-hover.svg");
       })
       max1.addEventListener("mouseout", ()=> {
           max1.removeAttribute("src");
           max1.setAttribute("src", "assets-usados/icon-max-normal.svg");
       })
       favor1.addEventListener("mousedown", ()=>{
           favor1.removeAttribute("src");
           favor1.setAttribute("src", "assets-usados/icon-fav-active.svg");})
       
   linkDescarga1.addEventListener("click", ()=>{
     let href = createBlob(element.images.original.url);
     href.then(url => {

         linkDescarga1.setAttribute("href", url);
     })
     linkDescarga1.setAttribute("download", "mygifo");       
   })

   max1.addEventListener("click", ()=> {
     agrandar(element.images.original.url, element.title, element);
   })

   favor1.addEventListener("click", ()=> {
       removefav(element.images.original.url);
   })
    } else ;{
        let divFantasma1 = document.createElement("div");
        divFantasma1.setAttribute("class", "div-fantasma1");
        contenedorBusqueda.appendChild(divFantasma1);
        divFantasma1.addEventListener("click", ()=> {
            agrandarMin(element.images.original.url, element.title, element);
        });
    }}
    )

    indexfav+=1;
console.log(favMostrados)}




function VerMasIni() {
    
    if (getData.length>12){
     verMasCont.style.display="flex";
     verMasCont.style.justifyContent= "center";
     verMasCont.style.alignItems= "center";
     verMasCont.style.margin="auto";
     verMasCont.style.paddingBottom= "50px";
    }
    
     verMas.addEventListener("click", ()=> {
        FavoritosComp();
        GrillaFavoritos(3*indexfav);
        
  })}
 
  VerMasIni();
  FavoritosComp()

   

    
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
    download1.setAttribute("src", "assets-usados/icon-download.svg");
    favor1.setAttribute("src", "assets-usados/icon-fav.svg");
    max1.setAttribute("src", "assets-usados/icon-max-normal.svg");
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
            dataFavoritos1.push(response.data[i]);
            console.log(dataFavoritos1);
            localStorage.setItem("dataFavoritos", JSON.stringify(dataFavoritos1));
        })
         max1.addEventListener("click", ()=> {
             agrandar(response.data[i].images.original.url, response.data[i].title, response.data[i]);
         })
            console.log(position);
            gif_id += 1;
    }}).catch(e=>console.log(e))
}

console.log(getData.length);
// titulo gif




    


function GrillaFavoritos (cantidad) {
       contFavoritos.style.width="100%";
       contFavoritos.style.paddingTop="40px";
       contFavoritos.style.display="grid";
       contFavoritos.style.gridTemplateColumns="repeat(4, 300px)";
       contFavoritos.style.gridTemplateRows=`repeat(${cantidad}, 230px)`;
       contFavoritos.style.justifyContent="center";
       contFavoritos.style.alignItems="center";
       contFavoritos.style.gridGap="30px";
       contFavoritos.style.paddingBottom="60px";
}




function paginaGifos()
 {
if (getData.length=0) {
    contenedorFav0.style.display="block";
    contGifs.style.display="none";
} else {
    contenedorFav0.style.display="none";
    GrillaFavoritos(3); 
    
}}

paginaGifos();

        
    botonIzqD.addEventListener("mouseover", ()=> { 
        botonIzqD.style.display="none";
        botonIzqH.style.display="block";
        
      }
    )

    
       async function createBlob(url) {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            return URL.createObjectURL(blob);
        } catch (error) {
            console.log("ERROR: ", error);
        }
    }    



    function renovarLocalStorage(gifos) {
        localStorage.setItem("dataFavoritos", JSON.stringify(gifos));
     }
    
    function removefav(element) {
        let arrayfavs = JSON.parse(localStorage.getItem("dataFavoritos"));
        console.log(arrayfavs);
    for(let i = 0 ; i< arrayfavs.length; i++) {
        if (arrayfavs[i].images.original.url===element) {  
            localStorage.clear();   
            arrayfavs.splice(i,1); 
            renovarLocalStorage(arrayfavs);
            location.reload();   
        }}}





    function trendingF() {

        async function buscarTrending() {
            let url = `https://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}&q=Proyecto%202&limit=3&offset=0&rating=g&lang=en`;
            const resp = await fetch(url);
            const info = await resp.json();
            return info;
        }
      let datos = buscarTrending();
    
      datos.then(response=> {
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
        download1.setAttribute("src", "assets-usados/icon-download.svg");
        favor1.setAttribute("src", "assets-usados/icon-fav.svg");
        max1.setAttribute("src", "assets-usados/icon-max-normal.svg");
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
            dataFavoritos1.push(response.data[i]);
            console.log(dataFavoritos1);
            localStorage.setItem("dataFavoritos", JSON.stringify(dataFavoritos1));
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
                download1.setAttribute("src", "assets-usados/icon-download-hover.svg");
            })
        download1.addEventListener("mouseout", ()=> {
                download1.removeAttribute("src");
                download1.setAttribute("src", "assets-usados/icon-download.svg");
            })
        favor1.addEventListener("mouseover", ()=> {
            favor1.removeAttribute("src");
            favor1.setAttribute("src", "assets-usados/icon-fav-hover.svg")});
            favor1.addEventListener("mouseout", ()=> {
            favor1.removeAttribute("src");
            favor1.setAttribute("src", "assets-usados/icon-fav.svg");
            })
        max1.addEventListener("mouseover", ()=> {
                max1.removeAttribute("src");
                max1.setAttribute("src", "assets-usados/icon-max-hover.svg");
            })
        max1.addEventListener("mouseout", ()=> {
                max1.removeAttribute("src");
                max1.setAttribute("src", "assets-usados/icon-max-normal.svg");
            })
            
        favor1.addEventListener("mousedown", ()=>{
              favor1.removeAttribute("src");
              favor1.setAttribute("src", "assets-usados/icon-fav-active.svg");})   
        } else  ;{
            flechas.style.overflowX="hidden";
            let imgid = i + 1;
            imgid = 'trending' + imgid;
            let gifo = document.getElementById(imgid);
            flechas.style.overflowX="hidden";
            gifTrending.style.overflowX="scroll";
            gifTrending.style.overflowY="hidden";
            gifo.setAttribute("src", response.data[i].images.original.url);
            titulo[i].innerHTML=response.data[i].title;
            divFantasma[i].addEventListener("click", ()=> {
                agrandarMin(response.data[i].images.original.url, response.data[i].title, response.data[i]);
            })}
        

       } } ).catch(e=> console.log(e))
    }





    function windowB () {
        if (window.matchMedia("(min-width: 780px)").matches) {
          contFavoritos.style.gridTemplateRows ="repeat(3, 230px)";
          contFavoritos.style.gridTemplateColumns="repeat(4, minmax(200px, 1fr))";
          contFavoritos.style.gridGap="30px";
          menu.style.display="flex";
          menuInt.style.display="flex";
          crearD.style.display="block";
        } else {
          contFavoritos.style.gridTemplateRows ="repeat(6, 230px)";
          contFavoritos.style.gridTemplateColumns="repeat(2, minmax(200px, 1fr))";
          gifTrending.style.justifyContent="flex-start";
          crearD.style.display="none";
          closeD.style.display="none";
          burger.style.display="block";
          menu.style.display="none";
          menuInt.style.display="none";
        }}



        window.addEventListener("resize", ()=> {
            windowB();
            
        })
        

 
       function agrandar(gif, titulo, fav) {
        let contenedorImgBig = document.createElement("div");
        body.appendChild(contenedorImgBig);
        contenedorImgBig.style.width="100%";
        contenedorImgBig.style.height="700px";
        contenedorImgBig.style.backgroundColor="white";
        contenedorImgBig.style.display="flex";
        contenedorImgBig.style.flexDirection="column";
        contenedorImgBig.style.zIndex="1000";
        contenedorImgBig.style.top="0";
        contenedorImgBig.style.bottom="0";
        contenedorFav0.style.margin="auto";
        contenedorImgBig.style.alignItems="flex-end";
        contenedorImgBig.style.justifyContent="center";
        contenedorImgBig.style.position="fixed";
        contenedorImgBig.style.transform="translateY(-10px)";
        contenedorImgBig.style.paddingTop="70px";
        contenedorImgBig.style.paddingBottom="190px";
        let closeD1 = document.createElement("img");
        closeD1.setAttribute("src", "assets-usados/close.svg");
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
        contenedorgifmax.style.width="650px";
        contenedorgifmax.style.height="350px";
        contflechas.appendChild(contenedorgifmax);
        const gifomaxi = document.createElement("img");
        gifomaxi.setAttribute("src", gif);
        gifomaxi.style.width="100%";
        gifomaxi.style.height="100%";
        contenedorgifmax.appendChild(gifomaxi);
        let titulo_botones = document.createElement("div");
        titulo_botones.style.width="48%";
        titulo_botones.style.height="15%";
        titulo_botones.style.display="flex";
        titulo_botones.style.flexDirection="row";
        titulo_botones.style.justifyContent="space-between";
        titulo_botones.style.transform="translateY(25px)";
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
        titulosmax.style.justifyContent="center";
        let botonesmax = document.createElement("div");
        botonesmax.style.width="50%";
        botonesmax.style.display="flex";
        botonesmax.style.alignItems="flex-end";
        botonesmax.style.justifyContent="flex-end";
        titulo_botones.appendChild(botonesmax);
        let favmax = document.createElement("img");
        favmax.setAttribute("src", "assets-usados/icon-fav.svg");
        favmax.style.width="45px";
        favmax.style.height="45px";
        botonesmax.appendChild(favmax);
        let downloadlink = document.createElement("a");
        let downloadmax = document.createElement("img");
        downloadlink.appendChild(downloadmax)
        botonesmax.appendChild(downloadlink);
        downloadmax.setAttribute("src", "assets-usados/icon-download.svg");
        downloadmax.style.width="45px";
        downloadmax.style.height="45px";
        downloadmax.style.margin="0 10px 0 20px";
        downloadmax.addEventListener("mouseover", ()=> {
            downloadmax.removeAttribute("src");
            downloadmax.setAttribute("src", "assets-usados/icon-download-hover.svg")
            downloadmax.style.cursor="pointer";
        })
        downloadmax.addEventListener("mouseout", ()=> {
            downloadmax.removeAttribute("src");
            downloadmax.setAttribute("src", "assets-usados/icon-download.svg");
        })
        favmax.addEventListener("mouseover", ()=> {
            favmax.removeAttribute("src");
            favmax.setAttribute("src", "assets-usados/icon-fav-hover.svg")
            favmax.style.cursor="pointer";
        })
        favmax.addEventListener("mouseout", ()=> {
            favmax.removeAttribute("src");
            favmax.setAttribute("src", "assets-usados/icon-fav.svg");
        })
        downloadmax.addEventListener("click", ()=> {
            let href = createBlob(gif);
          href.then(url => {
         downloadlink.setAttribute("href", url);
         downloadlink.setAttribute("download", "mygifo");
        })})
        favmax.addEventListener("click", ()=> {
            dataFavoritos1.push(fav);
            console.log(dataFavoritos1);
            localStorage.setItem("dataFavoritos", JSON.stringify(dataFavoritos1));
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
            closeD1.setAttribute("src", "assets-usados/close.svg");
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
            botonesmax.style.transform="translateY(-20px)";
            let favmax = document.createElement("img");
            favmax.setAttribute("src", "assets-usados/icon-fav.svg");
            favmax.style.width="35px";
            favmax.style.height="35px";
            botonesmax.appendChild(favmax);
            let downloadlink = document.createElement("a");
            let downloadmax = document.createElement("img");
            downloadlink.appendChild(downloadmax)
            botonesmax.appendChild(downloadlink);
            downloadmax.setAttribute("src", "assets-usados/icon-download.svg");
            downloadmax.style.width="35px";
            downloadmax.style.height="35px";
            downloadmax.style.margin="0 10px 0 20px";
            titulo_botones.appendChild(botonesmax);
            downloadmax.addEventListener("mouseover", ()=> {
                downloadmax.removeAttribute("src");
                downloadmax.setAttribute("src", "assets-usados/icon-download-hover.svg")
                downloadmax.style.cursor="pointer";
            })
            downloadmax.addEventListener("mouseout", ()=> {
                downloadmax.removeAttribute("src");
                downloadmax.setAttribute("src", "assets-usados/icon-download.svg");
            })
            favmax.addEventListener("mouseover", ()=> {
                favmax.removeAttribute("src");
                favmax.setAttribute("src", "assets-usados/icon-fav-hover.svg")
                favmax.style.cursor="pointer";
            })
            favmax.addEventListener("mouseout", ()=> {
                favmax.removeAttribute("src");
                favmax.setAttribute("src", "assets-usados/icon-fav.svg");
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




trendingF()


botonDerH.addEventListener("click", () => {
    flecha('+');
});


botonIzqH.addEventListener("click", () => {
    flecha('-');
})
