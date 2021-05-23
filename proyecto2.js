

// Variables a utilizar en el proyecto
 const barra = document.getElementById("barra");
 const logoMobile = document.getElementById("logo-mobile");
 const logoD = document.getElementById("logo-d");
 const logoN = document.getElementById("logo-n");
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
 const crearDH = document.getElementById("crear-dh");
 const crearDA = document.getElementById("crear-da")
 const crearN = document.getElementById("crear-n");
 const crearNH = document.getElementById("crear-nh");
 const crearNA = document.getElementById("crear-na");
const buscador = document.getElementById("buscador");
const busc = document.getElementById("busc");
const buscCont = document.getElementById("busc-cont");
const buscar = document.getElementById("buscar");
const lupitaD = document.getElementById("search-d");
const lupitaN = document.getElementById("search-n");
const trending = document.getElementById("trending");
 const botonIzqD = document.getElementById("boton-izq-d");
 const botonIzqN = document.getElementById("boton-izq-n");
 const botonIzqH = document.getElementById("boton-izq-h");
 const botonDerD = document.getElementById("boton-der-d");
 const botonDerN = document.getElementById("boton-der-n");
 const botonDerH = document.getElementById("boton-der-h");
 const facebook = document.getElementById("facebook-d");
 const facebookN = document.getElementById("facebook-n");
 const facebookH = document.getElementById("facebook-h");
 const twitter = document.getElementById("twitter-d");
 const twitterN = document.getElementById("twitter-n");
 const twitterH = document.getElementById("twitter-h");
 const instagram = document.getElementById("instagram-d");
 const instagramN = document.getElementById("instagram-n");
 const instagramH = document.getElementById("instagram-h");
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
const link = document.getElementsByTagName("a");
 const ApiKey = "og2cGOovwMy2VkjKm8PCJRTApTXFM8BJ";
const gifosEncontrados= document.getElementById("gifos-encontrados");
const categorias = document.getElementById("categorias");
const trendingsN = document.getElementById("trendings-n");
 const verMasCont = document.getElementById("verMasCont");
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
let modosToggle = false;
var GifosFavoritos = [];
var TitulosFavoritos= [];
let name = "fel";
let limit = 13;
var count_2 = 3;
var position = 1;
var imgData = {};
var position1 = 
//hovers y actives





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




logoD.addEventListener("click", ()=> {
    window.location.reload();
})


verMas.addEventListener("mouseover", ()=> {
    verMas.style.display="none";
    verMasH.style.display="block";
    verMasH.style.cursor= "pointer";
})

verMasH.addEventListener("mouseout", ()=> {
    verMas.style.display="block";
    verMasH.style.display="none";
})



//Botones y hovers

for(let i=0; i<3 ; i++) {
    download[i].addEventListener("mouseover", ()=> {
        download[i].removeAttribute("src");
        download[i].setAttribute("src", "assets-usados/icon-download-hover.svg");
    })
    download[i].addEventListener("mouseout", ()=> {
        download[i].removeAttribute("src");
        download[i].setAttribute("src", "assets-usados/icon-download.svg");
    })
favor[i].addEventListener("mouseover", ()=> {
    favor[i].removeAttribute("src");
    favor[i].setAttribute("src", "assets-usados/icon-fav-hover.svg")});
    favor[i].addEventListener("mouseout", ()=> {
    favor[i].removeAttribute("src");
    favor[i].setAttribute("src", "assets-usados/icon-fav.svg");
    })
    max[i].addEventListener("mouseover", ()=> {
        max[i].removeAttribute("src");
        max[i].setAttribute("src", "assets-usados/icon-max-hover.svg");
    })
    max[i].addEventListener("mouseout", ()=> {
        max[i].removeAttribute("src");
        max[i].setAttribute("src", "assets-usados/icon-max-normal.svg");
    })
    
      favor[i].addEventListener("mousedown", ()=>{
      favor[i].removeAttribute("src");
      favor[i].setAttribute("src", "assets-usados/icon-fav-active.svg");})    
}



//Botón modo nocturno



if(buscar.innerHTML="") {
    matchList.style.display="none";
}



// Función autocompletar

function autocompletar() {
    async function autocompletar(resultado) {
        let url = `https://api.giphy.com/v1/gifs/search/tags?api_key=${ApiKey}&q=${resultado}&limit=5&offset=0`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
     let datos = autocompletar(buscar.value);
     datos.then(respuesta=> {
         for(let i=0; i<6 ; i++) {
           matchList.style.display="flex";
           matchList.style.flexDirection="column";
           resultado[i].innerHTML= respuesta.data[i].name;
           resultado[i].style.padding="5px";
           resultado[i].style.color="rgb(100,100,100)";
           resultado[i].style.cursor="pointer";
           resultado[i].style.width="100%"
           resultado[i].addEventListener("mouseover", ()=>{
                resultado[i].style.backgroundColor="rgb(250,250,250)";
            })
            resultado[i].addEventListener("mouseout", ()=>{
                resultado[i].style.backgroundColor="white";
            })
            resultado[i].addEventListener("click", ()=>{
                matchList.style.display="none";
                buscar.value=resultado[i].innerHTML;
                matchList.style.display="none";
            })   
         } searchF();
         gifoEncontrados();
        }).catch(e=>console.log(e)) 
}


//Función para agrandar imagen
function agrandar(gif, titulo) {
    let contenedorImgBig = document.createElement("div");
    body.appendChild(contenedorImgBig);
    contenedorImgBig.style.width="100%";
    contenedorImgBig.style.height="100vh";
    contenedorImgBig.style.backgroundColor="white";
    contenedorImgBig.style.display="flex";
    contenedorImgBig.style.flexDirection="column";
    contenedorImgBig.style.zIndex="1000";
    contenedorImgBig.style.top="0";
    contenedorImgBig.style.bottom="0";
    contenedorImgBig.style.alignItems="flex-end";
    contenedorImgBig.style.justifyContent="center";
    contenedorImgBig.style.position="sticky";
    contenedorImgBig.style.transform="translateY(-10px)";
    contenedorImgBig.style.marginTop="30px";
    contenedorImgBig.style.paddingBottom="80px";
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
    contenedorgifmax.style.width="700px";
    contenedorgifmax.style.height="400px";
    contflechas.appendChild(contenedorgifmax);
    let FlechaDer1 = document.createElement("img");
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
    favmax.setAttribute("src", "assets-usados/icon-fav.svg");
    favmax.style.width="45px";
    favmax.style.height="45px";
    botonesmax.appendChild(favmax);
    let downloadmax = document.createElement("img");
    
    downloadmax.setAttribute("src", "assets-usados/icon-download.svg");
    downloadmax.style.width="45px";
    downloadmax.style.height="45px";
    downloadmax.style.margin="0 10px 0 20px";
    let donwloadlinkmax = document.createElement("a");
    botonesmax.appendChild(downloadlinkmax);
    titulo_botones.appendChild(botonesmax);
    donwloadlinkmax.appendChild(downloadmax);
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

        downloadlinkmax.setAttribute("href", url);
    })
    downloadlinkmax.setAttribute("download", "mygifo");
   }
    )}

    




//AddEventListener del input
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
}
)


// Función Trending (3 trendings fijos)
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
        agrandar(response.data[i].images.original.url, response.data[i].title);
    })
    
    }
   } ).catch(e=> console.log(e))
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
    /*let a_download = document.createElement("a");
    a_download.setAttribute("download", "download");
    div_top.appendChild(a_download);

    let href = createBlob(this_gif_src);
    href.then(url => {
        a_download.setAttribute("href", url);
    })
    a_download.setAttribute("download", "mygifo");
    // download btn
    / download btn
    let download_svg = document.createElement("img");
    download_svg.id = "download-svg";
    download_svg.setAttribute('src', "assets/icon-download.svg");
    download_svg.addEventListener('mouseenter', () => {
        download_svg.setAttribute('src', "assets/icon-download-hover.svg");
    });
    download_svg.addEventListener('mouseleave', () => {
        download_svg.setAttribute('src', "assets/icon-download.svg");
    })
    a_download.appendChild(download_svg);*/


//Función cambio de Trendings
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
        download1a1[gif_id-1].addEventListener("click", ()=> {
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

            console.log(position);
            gif_id += 1;
    }}).catch(e=>console.log(e))
}



//función titulo gif 




//Función buscar Gifos
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
    for(let i=0;i<=12;i++) {
     let gifo = document.createElement('img');
     gifo.setAttribute("src",response.data[i].images.original.url);
     gifo.setAttribute("class", "gifosBuscados");
     let container1 = document.createElement("div");
     gifosEncontrados.appendChild(container1);
     container1.setAttribute("class", "container1");
     let contenedorBusqueda = document.createElement("div");
     container1.appendChild(gifo);
     contenedorBusqueda.setAttribute("class", "contenedor-trending");
     container1.appendChild(contenedorBusqueda);
     let violeta1 = document.createElement("div");
     violeta1.setAttribute("class", "violeta1");
     contenedorBusqueda.appendChild(violeta1);
     let botones1 = document.createElement("div");
     violeta1.appendChild(botones1);
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
            download1.setAttribute("src", "assets-usados/icon-download-hover.svg");
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
            download1.setAttribute("src", "assets-usados/icon-download.svg");
        })
        
        favor1.addEventListener("mouseover", ()=> {
            favor1.removeAttribute("src");
            favor1.setAttribute("src", "assets-usados/icon-fav-hover.svg");
        })
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


        favor1.addEventListener("click", ()=> {
                GifosFavoritos.push(response.data[i].images.original.url);
                TitulosFavoritos.push(response.data[i].title);
                console.log(GifosFavoritos);
                localStorage.setItem("arrayFavoritos", JSON.stringify(GifosFavoritos));
                localStorage.setItem("arrayTitulos", JSON.stringify(TitulosFavoritos));
          })

        max1.addEventListener("click", ()=> {
                agrandar(response.data[i].images.original.url, response.data[i].title);
            }) 
        
             }}).catch(e=>console.log(e))}
  



  

//función buscar más Gifos +12
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
     let violeta1 = document.createElement("div");
     violeta1.setAttribute("class", "violeta1");
     contenedorBusqueda.appendChild(violeta1);
     let botones1 = document.createElement("div");
     violeta1.appendChild(botones1);
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
            favor1.setAttribute("src", "assets-usados/icon-fav-active.svg");});
        linkDescarga1.addEventListener("click", ()=>{
                const blob3 = new Blob([response.data[i].images.original.url]);
                linkDescarga1.setAttribute("href", blob3);
                linkDescarga1.href= URL.createObjectURL(blob3);
            })
        favor1.addEventListener("click", ()=> {
            GifosFavoritos.push(response.data[i].images.original.url);
            TitulosFavoritos.push(response.data[i].title);
            console.log(GifosFavoritos);
            localStorage.setItem("arrayFavoritos", JSON.stringify(GifosFavoritos));
            localStorage.setItem("arrayTitulos", JSON.stringify(TitulosFavoritos));
      })
        max1.addEventListener("click", ()=> {
            agrandar(response.data[i].images.original.url, response.data[i].title);
        })
            
    }limit=limit+12;
        
     }
     ).catch(e=> console.log(e))
    }



trendingF();


function gifoMas() { 
    gifosEncontrados.style.display= "grid";
    gifosEncontrados.style.gridTemplateRows =`"repeat(3, 230px)"`;
    gifosEncontrados.style.gridTemplateColumns="repeat(4, minmax(200px, 1fr))";
}

function windowB () {
    if (window.matchMedia("(min-width: 780px)").matches) {
      gifosEncontrados.style.gridTemplateRows ="repeat(3, 230px)";
      console.log("entre!");
      gifosEncontrados.style.gridTemplateColumns="repeat(4, minmax(200px, 1fr))";
      menu.style.display="block";
      crearD.style.display="block";
    } else {
      gifosEncontrados.style.gridTemplateRows ="repeat(6, 230px)";
      gifosEncontrados.style.gridTemplateColumns="repeat(2, minmax(200px, 1fr))";
      gifTrending.style.justifyContent="flex-start";
      crearD.style.display="none";
      closeD.style.display="none";
      burger.style.display="block";
       menu.style.display="none";
      burger.addEventListener("click", ()=> {
        menu.style.display="block";
        closeD.style.display="block";
        burger.style.display="none";
      })
        closeD.addEventListener("click", ()=> {
            menu.style.display="none";
            closeD.style.display="none";
            burger.style.display="block";
        })
        
        }
    }
    /*if (modosToggle===true) {
        menu.style.backgroundColor="#222326";
    }
    else {
        menu.style.backgroundColor="#37383C";
    } */
    
    closeD.addEventListener("click", ()=> {
        menu.style.display="none";
        closeD.style.display="none";
        burger.style.display="block";
    })
    


window.addEventListener("resize", ()=> {
    windowB();
})


//Generador de Buscados
function gifoEncontrados() { 
    gifosEncontrados.style.display= "grid";
    gifosEncontrados.style.gridTemplateRows ="repeat(3, 230px)";
    gifosEncontrados.style.gridTemplateColumns="repeat(4, 1fr)";
    trendingsN.style.display="none";
    categorias.style.display="none";
    contTituloF.innerHTML="";
    let tituloBusqueda = document.createElement("h3");
    contTituloF.appendChild(tituloBusqueda);
    tituloBusqueda.innerHTML=`${buscar.value}`;
    tituloBusqueda.style.textTransform="uppercase";
    tituloBusqueda.style.fontWeight="bold";
    tituloBusqueda.style.padding="30px";
    tituloBusqueda.style.fontSize="22px";
    tituloBusqueda.style.fontFamily="'Montserrat', sans-serif";
    verMasCont.style.display="flex";
    verMasCont.style.justifyContent= "center";
    verMasCont.style.alignItems= "center";
    verMasCont.style.margin="auto";
    verMasCont.style.padding= "50px";
    lupitaD.style.display="none";
    closeLup.style.display="block";
}


//Eventos vinculados a funciones

lupitaD.addEventListener("click",()=>{
    searchF();
    gifoEncontrados();
    verMasCont.style.display="flex";
    matchList.style.display="none";
}  )


buscar.addEventListener("keyup", (e)=> {
    if(e.keyCode===13) { 
    searchF();
    gifoEncontrados();
    matchList.style.display="none";
    }
})

botonDerH.addEventListener("click", () => {
    flecha('+');
});


botonIzqH.addEventListener("click", () => {
    flecha('-');
});



verMasH.addEventListener("click", ()=> {
    searchMas();
     gifoMas();
})



checkForAddedFavoritos()
checkForAddedTitulos()

function checkForAddedFavoritos() {
    console.log("chequeo added Mis GIFOS");
    if (localStorage.getItem("arrayFavoritos")) {
        GifosFavoritos = JSON.parse(localStorage.getItem("arrayFavoritos"));
    } else if (GifosFavoritos.getItem("arrayFavoritos") == null) {
        GifosFavoritos = [];
    }
    return GifosFavoritos;
}

function checkForAddedTitulos() {
    console.log("chequeo added Mis GIFOS");
    if (localStorage.getItem("arrayTitulos")) {
        TitulosFavoritos = JSON.parse(localStorage.getItem("arrayTitulos"));
    } else if (TitulosFavoritos.getItem("arrayTitulos") == null) {
        TitulosFavoritos = [];
    }
    return TitulosFavoritos;
}

modo.addEventListener("click", ()=> {
    if (modosToggle===false) {
    barra.removeAttribute("id");
    barra.setAttribute("id" , "noctBarra");
    logoD.removeAttribute("src");
    logoD.setAttribute("src", "assets-usados/logo-mobile-modo-noct.svg");
    buscador.removeAttribute("id");
    buscador.setAttribute("id", "buscadorNoct");
    trending.style.backgroundColor="#222326";
    footer.removeAttribute("id");
    footer.setAttribute("id", "footerNoct");
    footer.style.borderBottomColor="#222326";
    modo.innerHTML="Modo Diurno";
    h1[0].style.color="white";
    h4[0].style.color="white";
    h2[0].style.color="white";
    for(let i=0; i<6; i++){
        p[i].style.color="white";
    }
    for(let i=0 ; i<4; i++) {
        link[i].style.color="white";
    }
    buscCont.style.borderColor="white";
    buscCont.style.backgroundColor="#37383C";
    buscar.style.backgroundColor="#37383C";
    buscar.style.color="white";
    lupitaD.removeAttribute("src");
    lupitaD.setAttribute("src", "assets-usados/icon-search-mod-noc.svg");
    closeLup.removeAttribute("src");
    closeLup.setAttribute("src", "assets-usados/close-modo-noct.svg");
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
    verMas.removeAttribute("src");
    verMas.setAttribute("src", "assets-usados/CTA-ver+-modo-noc.svg");
    closeD.removeAttribute("src");
    closeD.setAttribute("src", "assets-usados/close-modo-noct.svg");
    verMas.addEventListener("mouseover", ()=> {
        verMas.removeAttribute("src");
        verMas.setAttribute("src", "assets-usados/CTA-ver+hover-modo-noc.svg"); 
    }); 
    verMas.addEventListener("mouseout", ()=> {
        verMas.removeAttribute("src");
        verMas.setAttribute("src", "assets-usados/CTA-ver+-modo-noc.svg"); 
    }); 
    if (window.matchMedia("(max-width: 780px)").matches) {
         menu.style.backgroundColor="#222326";
         menuInt.style.backgroundColor="#222326";
         burger.addEventListener("click", ()=> {
            menu.style.display="block";
            closeD.style.display="block";
            burger.style.display="none";
            menu.style.backgroundColor="#222326";
         menuInt.style.backgroundColor="#222326";
         })
    } else {
        menu.style.backgroundColor="#37383C";
        menuInt.style.backgroundColor="#37383C";
    }
    
    modosToggle=true;   
} 


else if (modosToggle===true) {
    barra.removeAttribute("id");
    barra.setAttribute("id" , "barra");
    logoD.removeAttribute("src");
    logoD.setAttribute("src", "assets-usados/logo-mobile.svg");
    buscador.removeAttribute("id");
    buscador.setAttribute("id", "buscador");
    trending.style.backgroundColor="#F4F5F9";
    footer.removeAttribute("id");
    footer.setAttribute("id", "footer");
    closeLup.removeAttribute("src");
    closeLup.setAttribute("src", "assets-usados/close.svg");
    footer.style.borderBottomColor="white"
    modo.innerHTML="Modo Nocturno";
    h1[0].style.color="#6742E7";
    h2[0].style.color="#6742E7";
    for(let i=0; i<2; i++){
        p[i].style.color="#6742E7";
    }

    for(let i=2; i<6; i++){
        p[i].style.color="black";
    }
    for(let i=0 ; i<4; i++) {
        link[i].style.color="#6742E7";
    }
    if (window.matchMedia("(max-width: 780px)").matches) {
        for(let i= 0; i<4 ; i++) {
            link[i].style.color="white";
        }
        menu.style.backgroundColor="#6742E7";
        menuInt.style.backgroundColor="#6742E7";
        burger.addEventListener("click", ()=> {
            menu.style.display="block";
            closeD.style.display="block";
            burger.style.display="none";
            menu.style.backgroundColor="#6742E7";
            menuInt.style.backgroundColor="#6742E7";
         })}
        else {
            menu.style.backgroundColor="white";
            menuInt.style.backgroundColor="white";
        }
    
    closeD.removeAttribute("src");
    closeD.setAttribute("src", "assets-usados/close.svg");
    buscCont.style.borderColor="#6742E7";
    buscCont.style.backgroundColor="white";
    buscar.style.backgroundColor="white";
    buscar.style.color="black";
    lupitaD.removeAttribute("src");
    lupitaD.setAttribute("src", "assets-usados/icon-search.svg");
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
    verMas.removeAttribute("src");
    verMas.setAttribute("src", "assets-usados/assets-usados/CTA-ver-mas.svg"); 
   
    modosToggle=false
    
}})



console.log(GifosFavoritos);
