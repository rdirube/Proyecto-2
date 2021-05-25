const barra = document.getElementById("barra");
 const logoMobile = document.getElementById("logo-mobile");
 const logoD = document.getElementById("logo-d");
 const body = document.getElementById("body");
 const logoN = document.getElementById("logo-n");
 const burga = document.getElementById("burga");
 const burger = document.getElementById("burger");
 const burgerN = document.getElementById("burguer-n");
 const closeD = document.getElementById("close-d");
 const closeN = document.getElementById("close-n");
 const closeH = document.getElementById("close-h");
 const menu = document.getElementById("menu");
 const modo = document.getElementById("modo");
 const linkF = document.getElementById("link-f");
 const linkG = document.getElementById("link-g");
 const header = document.getElementById("header");
 const crearD = document.getElementById("crear-d");
 const crearDH = document.getElementById("crear-dh");
 const crearDA = document.getElementById("crear-da")
 const crearN = document.getElementById("crear-n");
 const crearNH = document.getElementById("crear-nh");
 const crearNA = document.getElementById("crear-na");
 const gifos = document.getElementById("gifos");
 const contFavoritos = document.getElementById("contFavoritos");
 const verMasCont = document.getElementById("verMasCont");
 const verMas = document.getElementById("ver-mas");
 const verMasH = document.getElementById("ver-mas-h");
 const botonIzqD = document.getElementById("boton-izq-d");
 const botonIzqN = document.getElementById("boton-izq-n");
 const botonIzqH = document.getElementById("boton-izq-h");
 const botonDerD = document.getElementById("boton-der-d");
 const botonDerN = document.getElementById("boton-der-n");
 const botonDerH = document.getElementById("boton-der-h");
 const facebook = document.getElementById("facebook-d");
 const twitter = document.getElementById("twitter-d");
 const instagram = document.getElementById("instagram-d");
const contenedorGif0 = document.getElementById("gif-0");
const imgG0 = document.getElementById("gif-s");
const ApiKey = "og2cGOovwMy2VkjKm8PCJRTApTXFM8BJ";
const cursor = document.getElementsByClassName("pointer");
const violeta = document.getElementsByClassName("violeta");
const trending = document.getElementById("trending");
const trendingGif = document.getElementsByClassName("trending_gifs");
 const container = document.getElementsByClassName("container");
const matchList = document.getElementById("matchList");
const resultado= document.getElementsByClassName("resultado");
const closeLup = document.getElementById("close-lup");
const download= document.getElementsByClassName("download");
const favor = document.getElementsByClassName("favor");
const max = document.getElementsByClassName("max");
const titulo = document.getElementsByClassName("titulo");
const icono1 = document.getElementsByClassName("icono");
const linkDescarga = document.getElementsByClassName("link-descarga");
const footer = document.getElementById("footer");
const h1 = document.getElementsByTagName("h1");
const p = document.getElementsByTagName("p");
const h2 = document.getElementsByTagName("h2");
const h4 = document.getElementsByTagName("h4");
const link = document.getElementsByTagName("a");
const sectionGif = document.getElementById("gifosCont");
let modosToggle = false;
let position = 1;
link[3].style.color="rgb(150,150,150)";
link[3].style.cursor="default";


verMas.addEventListener("mouseover", ()=> {
    verMas.style.display="none";
    verMasH.style.display="block";
    verMasH.style.cursor="pointer";    
} )

verMasH.addEventListener("mouseout", ()=> {
    verMas.style.display="block";
    verMasH.style.display="none";
} )

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
    crearD.style.display="none";
    crearDH.style.display="block";
    crearDH.style.cursor="pointer";
})

crearDH.addEventListener("mouseout", ()=> {
    crearD.style.display="block";
    crearDH.style.display="none";
})

crearDA.addEventListener("mouseup", ()=> {
    crearD.style.display="block";
    crearDA.style.display="none";
})

crearDH.addEventListener("mousedown", ()=> {
    crearDH.style.display="none";
    crearDA.style.display="block";
    crearDA.style.cursor="pointer";
    crearD.style.display="none";
})

burger.addEventListener("click", ()=> {
    menu.style.display="block";
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











//funciones trending


function trendingF() {

    async function buscarTrending() {
        let url = `https://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}&q=Proyecto%202&limit=3&offset=0&rating=g&lang=en`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
  let datos = buscarTrending();

  datos.then(response=> {
      console.log(response);
    for(let i=0;i<3;i++) {
        


        
    let imgid = i + 1
    imgid = 'trending' + imgid
    let gifo = document.getElementById(imgid);
    gifo.setAttribute("src",response.data[i].images.original.url);
    titulo[i].innerHTML=response.data[i].title;
    download[i].addEventListener("click", ()=>{
        let href = createBlob(response.data[i].images.original.url);
        href.then(url => {

            linkDescarga[i].setAttribute("href", url);
        })
        linkDescarga[i].setAttribute("download", "mygifo");

        console.log(response.data[i].images.original.url);
    })
    favor[i].addEventListener("click", ()=> {
          GifosFavoritos.push(response.data[i].images.original.url);
          TitulosFavoritos.push(response.data[i].title);
          console.log(GifosFavoritos);
          localStorage.setItem("arrayFavoritos", JSON.stringify(GifosFavoritos));
          localStorage.setItem("arrayTitulos", JSON.stringify(TitulosFavoritos));
    })
    max[i].addEventListener("click", ()=> {
        agrandar(response.data[i].images.original.url, response.data[i].title, response.data[i]);
    })
    
    }
   } ).catch(e=> console.log(e))
}






function flecha(signo) {
    if (signo == '+') {
        position = position + 1
    } else if (signo == '-') {
        if (position == 1) return
        position = position - 1
    }

    async function buscarTrending() {
        let limit = 3*position
        let url = `https://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}&q=Proyecto%202&limit=${limit}&offset=0&rating=g&lang=en`;
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
        download[gif_id-1].addEventListener("click", ()=> {
            let href = createBlob(response.data[i].images.original.url);
           href.then(url => {
            linkDescarga1[gif_id-1].setAttribute("href", url);
        })
        linkDescarga1[gif_id-1].setAttribute("download", "mygifo");
        });


        favor[gif_id-1].addEventListener("click", ()=> {
            GifosFavoritos.push(response.data[i].images.original.url);
            TitulosFavoritos.push(response.data[i].title);
            console.log(GifosFavoritos);})

            max[gif_id-1].addEventListener("click", ()=> {
                agrandar(response.data[i].images.original.url, response.data[i].title);
            })
            console.log(position);
            gif_id += 1;
    }}).catch(e=>console.log(e))
}



trendingF()


botonDerH.addEventListener("click", () => {
    flecha('+');
});


botonIzqH.addEventListener("click", () => {
    flecha('-');
});




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
    contenedorGif0.style.margin="auto";
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
    let FlechaDer1 = document.createElement("img");
    const gifomaxi = document.createElement("img");
    gifomaxi.setAttribute("src", gif);
    gifomaxi.style.width="100%";
    gifomaxi.style.height="100%";
    contenedorgifmax.appendChild(gifomaxi);
    let titulo_botones = document.createElement("div");
    titulo_botones.style.width="650px";
    titulo_botones.style.height="200px";
    titulo_botones.style.display="flex";
    titulo_botones.style.flexDirection="row";
    titulo_botones.style.flexDirection="row";
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
    })
    favmax.addEventListener("click", ()=> {
        dataFavoritos.push(fav);
        console.log(dataFavoritos);
        localStorage.setItem("dataFavoritos", JSON.stringify(dataFavoritos));
      })
})
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




modo.addEventListener("click", ()=> {
    if (modosToggle===false) {
    barra.style.backgroundColor="#37383C";
    menu.style.backgroundColor="#37383C";
    logoD.removeAttribute("src");
    logoD.setAttribute("src", "assets-usados/logo-mobile-modo-noct.svg");
    trending.style.backgroundColor="#222326";
    gifos.removeAttribute("id");
    gifos.setAttribute("id", "fav-0-noct");
    sectionGif.style.backgroundColor="#37383C";
    footer.removeAttribute("id");
    footer.setAttribute("id", "footerNoct");
    footer.style.borderBottomColor="#222326"
    modo.innerHTML="Modo Diurno";
    h4[0].style.color="white";
    h2[0].style.color="white";
    h2[1].style.color="white";
    link[3].style.color="rgb(150,150,150)";
    link[2].style.cursor="default";
    for(let i=0; i<4; i++){
        p[i].style.color="white";
    }
    link[1].style.color="white";
    link[2].style.color="white";
    crearD.removeAttribute("src");
    crearD.setAttribute("src", "assets-usados/CTA-crar-gifo-modo-noc.svg");
    burger.removeAttribute("src");
    burger.setAttribute("src", "assets-usados/burger-modo-noct.svg");
    header.removeAttribute("id");
    header.setAttribute("id", "headerNoct");
    botonDerD.removeAttribute("src");
    botonDerD.setAttribute("src", "assets-usados/button-slider-right-md-noct.svg");
    botonIzqD.removeAttribute("src");
    botonIzqD.setAttribute("src", "assets-usados/button-slider-left-md-noct.svg");    
    modosToggle=true;
} 
else if (modosToggle===true) {
    barra.style.backgroundColor="white";
    logoD.removeAttribute("src");
    logoD.setAttribute("src", "assets-usados/logo-mobile.svg");
    trending.style.backgroundColor="#F4F5F9";
    footer.removeAttribute("id");
    footer.setAttribute("id", "footer");
    menu.style.backgroundColor="white";
    sectionGif.style.backgroundColor="white";
    gifos.style.backgroundColor="white";
    gifos.style.backgroundColor="white";
    gifos.setAttribute("id", "favoritos");
    footer.style.borderBottomColor="white";
    gifos.removeAttribute("id");
    gifos.setAttribute("id", "gifos");
    contenedorGif0.removeAttribute("id");
    contenedorGif0.setAttribute("id", "gif-0");
    modo.innerHTML="Modo Nocturno";
    h4[0].style.color="#6742E7";
    h2[0].style.color="#6742E7";
    h2[1].style.color="#6742E7";
    for(let i=0; i<4; i++){
        p[i].style.color="black";
    }
    link[3].style.color="rgb(150,150,150)";
    link[2].style.cursor="default";
    link[1].style.color="#6742E7";
    link[2].style.color="#6742E7";
    crearD.removeAttribute("src");
    crearD.setAttribute("src", "assets-usados/button-crear-gifo.svg");
    burger.removeAttribute("src");
    burger.setAttribute("src", "assets-usados/burger.svg");
    header.removeAttribute("id");
    header.setAttribute("id", "header");
    botonDerD.removeAttribute("src");
    botonDerD.setAttribute("src", "assets-usados/Button-Slider-right.svg");
    botonIzqD.removeAttribute("src");
    botonIzqD.setAttribute("src", "assets-usados/button-slider-left.svg");
    modosToggle=false
    
}})
