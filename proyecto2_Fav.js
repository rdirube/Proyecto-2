//Variables importadas

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
 const favoritos = document.getElementById("favoritos");
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
const contenedorFav0 = document.getElementById("fav-0");
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
const sectionFav = document.getElementById("section-fav");
let modosToggle = false;
let position = 1;
link[2].style.color="rgb(150,150,150)";
link[2].style.cursor="default";
let GifosFavoritos1 = [];
let TitulosFavoritos1 = [];
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


logoD.addEventListener("click", ()=> {
    window.location.reload();
})



modo.addEventListener("click", ()=> {
    if (modosToggle===false) {
    barra.style.backgroundColor="#37383C";
    menu.style.backgroundColor="#37383C";
    logoD.removeAttribute("src");
    logoD.setAttribute("src", "assets-usados/logo-mobile-modo-noct.svg");
    trending.style.backgroundColor="#222326";
    favoritos.style.backgroundColor="#37383C";
    contenedorFav0.removeAttribute("id");
    contenedorFav0.setAttribute("id", "fav-0-noct");
    sectionFav.style.backgroundColor="#37383C";
    footer.removeAttribute("id");
    footer.setAttribute("id", "footerNoct");
    footer.style.borderBottomColor="#222326"
    modo.innerHTML="Modo Diurno";
    h4[0].style.color="white";
    h2[0].style.color="white";
    h2[1].style.color="white";
    link[2].style.color="rgb(150,150,150)";
    link[2].style.cursor="default";
    for(let i=0; i<4; i++){
        p[i].style.color="white";
    }
    link[1].style.color="white";
    link[3].style.color="white";
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
    favoritos.style.backgroundColor="white";
    sectionFav.style.backgroundColor="white";
    favoritos.setAttribute("id", "favoritos");
    footer.style.borderBottomColor="white";
    contenedorFav0.removeAttribute("id");
    contenedorFav0.setAttribute("id", "fav-0");
    modo.innerHTML="Modo Nocturno";
    h4[0].style.color="#6742E7";
    h2[0].style.color="#6742E7";
    h2[1].style.color="#6742E7";
    for(let i=0; i<4; i++){
        p[i].style.color="black";
    }
    link[2].style.color="rgb(150,150,150)";
    link[2].style.cursor="default";
    link[1].style.color="#6742E7";
    link[3].style.color="#6742E7";
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




//Trendings

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
    titulo[i].setAttribute("class", "titulo");
    download[i].addEventListener("click", ()=>{
        const blob1 = new Blob([response.data[i].images.original.url]);
        linkDescarga[i].setAttribute("href", blob1);
        linkDescarga[i].href= URL.createObjectURL(blob1);
    })
    favor[i].addEventListener("click", ()=> {
          GifosFavoritos1.push(response.data[i].images.original.url);
          TitulosFavoritos1.push(response.data[i].title);
          console.log(GifosFavoritos1);
          localStorage.setItem("arrayFavoritos", JSON.stringify(GifosFavoritos1));
          localStorage.setItem("arrayTitulos", JSON.stringify(TitulosFavoritos1));

    })

 
    }
   } ).catch(e=> console.log(e))
}



let getFavoritos = JSON.parse(localStorage.getItem("arrayFavoritos"));
let getTitulos =JSON.parse(localStorage.getItem("arrayTitulos"));



//Flechas

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
        imgid = 'trending' + gif_id
        let gifo = document.getElementById(imgid);
        gifo.setAttribute("src",response.data[i].images.original.url);
        gif_id += 1;
        download[i].addEventListener("click", ()=>{
            const blob1 = new Blob([response.data[i].images.original.url]);
            linkDescarga[i].setAttribute("href", blob1);
            linkDescarga[i].href= URL.createObjectURL(blob1);
        })
        favor[i].addEventListener("click", ()=> {
            GifosFavoritos1.push(response.data[i].images.original.url);
            console.log(GifosFavoritos1);})
            localStorage.setItem("arrayFavoritos", JSON.stringify(GifosFavoritos1))
    }}).catch((e)=>console.log(e));
}


// titulo gif

function tituloGif() {
    async function buscarTrending() {
        let limit = 3*position
        let url =  `https://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}&q=Proyecto%202&limit=${limit}&offset=0&rating=g&lang=en`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
    let datos = buscarTrending();
    let n = (position*3)-3
    datos.then(response=> {
      for(let i=n;i<n+3;i++) {
        titulo[0].innerHTML = response.data[n].title;
        titulo[1].innerHTML = response.data[n+1].title;
        titulo[2].innerHTML = response.data[n+2].title;

}}).catch(e=>{console.log(e)})}




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
    container[i].addEventListener("mouseover", ()=>{
        
      })
      favor[i].addEventListener("mousedown", ()=>{
      favor[i].removeAttribute("src");
      favor[i].setAttribute("src", "assets-usados/icon-fav-active.svg");})
      
    
}



console.log(getFavoritos);


function GrillaFavoritos () {
       contFavoritos.style.width="100%";
       contFavoritos.style.marginTop="40px";
       contFavoritos.style.display="grid";
       contFavoritos.style.gridTemplateColumns="repeat(4, 300px)";
       contFavoritos.style.gridTemplateRows="repeat(3, 230px)";
       contFavoritos.style.justifyContent="center";
       contFavoritos.style.alignItems="center";
       contFavoritos.style.gridGap="30px";
}



function FavoritosComp(titulo) {
       getFavoritos.forEach(element => {
       favoritos.style.width="100%";
       let gifofav = document.createElement("img");
       gifofav.setAttribute("src", element);
       gifofav.style.width="100%";
       gifofav.style.height="100%";
       let container1 = document.createElement("div");
       contFavoritos.appendChild(container1);
       contenedorFav0.style.display="none";
       console.log(element);
       container1.setAttribute("class", "container1");
       let contenedorBusqueda = document.createElement("div");
       container1.appendChild(gifofav);
       contenedorBusqueda.setAttribute("class", "contenedor-trending");
       container1.appendChild(contenedorBusqueda);
       let violeta1 = document.createElement("div");
       violeta1.setAttribute("class", "violeta1");
       violeta1.style.transform="translateY(0px)";
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
       violeta1.style.width="100%";
       violeta1.style.height="100%";
       violeta1.style.transform
       let user1 = document.createElement("h4");
       user1.innerHTML="User";
       user1.setAttribute("class", "user");
       contTitulo.appendChild(user1);
       let titulo1 = document.createElement("h3");
       titulo1.setAttribute("class", "titulo");
       contTitulo.appendChild(titulo1);
       titulo1.innerHTML= getTitulos;
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
              favor1.setAttribute("src", "assets-usados/icon-fav-active.svg");})
          
      linkDescarga1.addEventListener("click", ()=>{
          const blob2 = new Blob(element);
          linkDescarga1.setAttribute("href", blob2);
          linkDescarga1.href= URL.createObjectURL(blob2);
      })
      favor1.addEventListener("click", ()=> {
          GifosFavoritos.push(element);
          console.log(GifosFavoritos);})
})}
         

 



function paginaFavoritos()
 {
if (getFavoritos.innerHTML="") {
    contenedorFav0.style.display="block";
    contFavoritos.style.display="none";
} else {
    contenedorFav0.style.display="none";
    GrillaFavoritos();
    FavoritosComp();
}}


paginaFavoritos()


trendingF()

botonDerH.addEventListener("click", () => {
    flecha('+');
});


botonIzqH.addEventListener("click", () => {
    flecha('-');
});


function windowB () {
    if (window.matchMedia("(min-width: 780px)").matches) {
      menu.style.display="block";
      crearD.style.display="block";
    } else {
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
    crearD.style.display="none";
    }
    }



window.addEventListener("resize", ()=> {
    windowB();
})