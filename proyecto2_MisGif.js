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
        agrandar(response.data[i].images.original.url, response.data[i].title);
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
