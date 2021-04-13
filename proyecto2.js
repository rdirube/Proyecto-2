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
const contenedorFav0 = document.getElementById("fav-0");
const imgFav0 = document.getElementById("fav-s");
const contenedorGif0 = document.getElementById("gif-0");
const imgGif0 = document.getElementById("gif-s");
const gifTrending = document.getElementById("gif-trending");
const closes = document.getElementById("closes");
const botonIzq = document.getElementsByClassName("boton-izq");
const footer = document.getElementById("footer");
const h1 = document.getElementsByTagName("h1");
const p = document.getElementsByTagName("p");
const h2 = document.getElementsByTagName("h2");
const h4 = document.getElementsByTagName("h4");
const ApiKey = "og2cGOovwMy2VkjKm8PCJRTApTXFM8BJ";
const gifosEncontrados= document.getElementById("gifos-encontrados");
const categorias = document.getElementById("categorias");
const trendingsN = document.getElementById("trendings-n");
const gifs = document.getSelection("gifs");
const verMasCont = document.getElementById("verMasCont");
const verMas = document.getElementById("ver-mas");
const verMasH = document.getElementById("ver-mas-h");
let limit = 12;


//hovers y actives

botonIzqD.addEventListener("mouseover", ()=> { 
    botonIzqD.style.display="none";
    botonIzqH.style.display="block";
    botonDerH.style.cursor= "pointer";

  }
)

botonIzqH.addEventListener("mouseout", ()=> {
    botonIzqH.style.display="none";
    botonIzqD.style.display="block";
    
} )

botonDerD.addEventListener("mouseover", ()=> { 
    botonDerD.style.display="none";
    botonDerH.style.display="block";
    botonDerH.style.cursor= "pointer";

  }
)

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


verMas.addEventListener("mouseover", ()=> {
    verMas.style.display="none";
    verMasH.style.display="block";
    verMasH.style.cursor= "pointer";
})

verMasH.addEventListener("mouseout", ()=> {
    verMas.style.display="block";
    verMasH.style.display="none";
})


modo.addEventListener("click", ()=> {
    modo.innerHTML="Modo Diurno";
    logoD.style.display="none";
    logoN.style.display="block";
    burger.style.display="none";
    burgerN.style.display="block";
    lupitaD.style.display="none";
    lupitaN.style.display="block";
    twitter.style.display="none";
    twitterN.style.display="block";
    instagram.style.display="none";
    instagramN.style.display="block";
    facebook.style.display="none";
    facebookN.style.display="block";
    h1.style.color ="white";
    h2.style.color ="white";
    h4.style.color ="white";
    p.style.color="white";
    barra.style.backgroundColor= "#37383C";
    buscador.style.backgroundColor="#37383C";
    trending.style.backgroundColor="#222326";
    footer.style.backgroundColor="#37383C";
    

})



    


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
  for(let i=0;i<=3;i++) {
   let gifo = document.createElement('img');
   gifo.setAttribute("src",response.data[i].images.original.url);
   gifo.setAttribute("class", "gifs");
   gifTrending.appendChild(gifo); }
   } )
}

function searchF() {
    async function buscarGifos(valor) {
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${valor}&limit=12&offset=0&rating=g&lang=en`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
    let datos = buscarGifos(buscar.value);
    datos.then(response=> {
    console.log(response);
    for(let i=0;i<=12;i++) {
     let gifo = document.createElement('img');
     gifo.setAttribute("src",response.data[i].images.original.url);
     gifo.setAttribute("class", "gifosBuscados");
     gifosEncontrados.appendChild(gifo);
    }
     } )
  }
   

  function searchMas() {
    async function buscarGifos(valor) {
        
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${valor}&limit=${12 + limit}&offset=0&rating=g&lang=en`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
    
    let datos = buscarGifos(buscar.value);
    datos.then(response=> {
    console.log(response);
    for(let i=0;i<=12;i++) {
     let gifo = document.createElement('img');
     gifo.setAttribute("src",response.data[i].images.original.url);
     gifo.setAttribute("class", "gifosBuscados");
     gifosEncontrados.appendChild(gifo);
     gifosEncontrados.innerHTML="";
    }
    
     } )
  }

trendingF()

function gifoEncontrados() { 
    gifosEncontrados.style.display= "grid";
    gifosEncontrados.style.gridTemplateRows ="repeat(3, 200px)";
    gifosEncontrados.style.gridTemplateColumns="repeat(4, 1fr)";
    categorias.style.display="none";
    trendingsN.innerHTML=`${buscar.value}`;
    trendingsN.style.textTransform="uppercase";
    trendingsN.style.fontWeight="bold";
    trendingsN.style.padding="30px";
    trendingsN.style.fontSize="22px";
    trendingsN.style.fontFamily="'Montserrat', sans-serif";
    verMasCont.style.display="flex";
    verMasCont.style.justifyContent= "center";
    verMasCont.style.alignItems= "center";
    verMasCont.style.margin="auto";
    verMasCont.style.padding= "50px";
}

lupitaD.addEventListener("click",()=>{
    
    searchF();
    gifoEncontrados();
}  )

buscar.addEventListener("keyup", enter(e))
       
    


verMasH.addEventListener("click", ()=> {
   searchMas();
   gifosEncontrados();
})


gifs.addEventListener("mouseover", ()=> {
    console.log("hola");
})
