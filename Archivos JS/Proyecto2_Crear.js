//====================VARIABLES A UTILIZAR============================//

const menu = document.getElementById("menu");
const menuInt = document.getElementById("menu-int");
const modo = document.getElementById("modo");
const linkF = document.getElementById("link-f");
const linkG = document.getElementById("link-g");
const logoMobile = document.getElementById("logo-mobile");
const logoD = document.getElementById("logo-d");
const body = document.getElementById("body");
const pasos = document.getElementById("pasos");
const paso = document.getElementsByClassName("paso");
const paso1 = document.getElementById("paso-1");
const paso2 = document.getElementById("paso-2");
const paso3 = document.getElementById("paso-3");
const imgCamara = document.getElementById("camara-d");
const imgCinta = document.getElementById("cinta-d");
const crearD = document.getElementById("crear-d");
const footer = document.getElementById("footer");
const link = document.getElementsByClassName("link");
const btnCont = document.getElementById("cont-btn");
var btnCrear = document.getElementById("btn-crear");
const intro1 = document.getElementById("intro1");
const intro2 = document.getElementById("intro2");
const pintro1 = document.getElementById("p-intro1");
const pintro2 = document.getElementById("p-intro2");
const span = document.getElementById("span");
let video = document.getElementById("video");
const facebook = document.getElementById("facebook-d");
const twitter = document.getElementById("twitter-d");
const instagram = document.getElementById("instagram-d");
const timerVid = document.getElementById("timer-vid");
const camara = document.getElementById("camara");
const camaraBis = document.getElementById("camara-bis");
const p = document.getElementsByTagName("p");
const h2 = document.getElementsByTagName("h2");
const pantallaCompl = document.getElementById("pantalla-completa");
const pantallaCamara = document.getElementById("pantalla-camara");
var MisGifos = [];
const pantallaCompleta = document.getElementById("pantalla-completa");
const ApiKey = "og2cGOovwMy2VkjKm8PCJRTApTXFM8BJ";
const GIPHY_URL = 'https://media.giphy.com/media/';




//=======================HOVERS Y EVENTOS DE DISEÑO GENERAL============================//

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

btnCrear.addEventListener("mouseover", ()=> {
    btnCrear.style.backgroundColor="#6742E7";
    btnCrear.style.color="white";
    btnCrear.style.cursor="pointer";
})

btnCrear.addEventListener("mouseout", ()=> {
    btnCrear.style.backgroundColor="white";
    btnCrear.style.color="#6742E7";
})



//=================== MODO NOCTURNO =====================//

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
    menuInt.classList.toggle("menu-intNoct");
    footer.classList.toggle("footerNoct");
    header.classList.toggle("headerNoct");
    camara.classList.toggle("camaraNoct");
    camaraBis.classList.toggle("camara-bisNoct");
    pantallaCompleta.classList.toggle("pantalla-completaNoct");
   
    pasos.classList.toggle("pasosNoct");
    for (let i = 0; i < link.length; i++) {
        link[i].classList.toggle("linkNoct");
    }
    
    if (b) {
        logoD.removeAttribute("src");
        logoD.setAttribute("src", "../assets/logo-mobile-modo-noct.svg");
        for(let i=0; i<4; i++){
            p[i].style.color="white";
        }
        modo.innerHTML="Modo Diurno";
    
        btnCrear.style.borderColor="#37383C";
        btnCrear.style.color="#37383C";
        btnCont.style.backgroundColor="#37383C";
        btnCrear.addEventListener("mouseover", ()=> {
            btnCrear.style.borderColor="white";
            btnCrear.style.backgroundColor="#37383C";
            btnCrear.style.color="white";
        })
        btnCrear.addEventListener("mouseout", ()=> {
            btnCrear.style.borderColor="#37383C";
            btnCrear.style.color="#37383C";
            btnCont.style.backgroundColor="#37383C";
        })
        h2[0].style.color="white";
        h2[1].style.color="white";
        imgCinta.removeAttribute("src");
        imgCinta.setAttribute("src", "../assets/pelicula-modo-noc.svg");
        imgCamara.removeAttribute("src");
        imgCamara.setAttribute("src", "../assets/camara-modo-noc.svg");
        paso1.style.color="white";
        paso1.style.borderColor="white";
        paso2.style.color="white";
        paso2.style.borderColor="white";
        paso3.style.color="white";
        paso3.style.borderColor="white";
        b = false;  
    }      
    else if (!b) {
    logoD.removeAttribute("src");
    logoD.setAttribute("src", "../assets/logo-mobile.svg");
    for(let i=0; i<4; i++){
        p[i].style.color="black";
    }
    btnCrear.style.borderColor="#6742E7";
    btnCrear.style.backgroundColor="white";
    btnCrear.style.color="#6742E7";
    btnCrear.addEventListener("mouseover", ()=> {
        btnCrear.style.borderColor="#6742E7";
        btnCrear.style.backgroundColor="#6742E7";
        btnCrear.style.color="white";
    })
    btnCrear.addEventListener("mouseout", ()=> {
        btnCrear.style.borderColor="#6742E7";
    btnCrear.style.backgroundColor="white";
    btnCrear.style.color="#6742E7";
    })
    btnCont.style.backgroundColor="white";
    paso1.style.color="white";
    paso1.style.color="#6742E7";
        paso1.style.borderColor="#6742E7";
        paso2.style.color="#6742E7";
        paso2.style.borderColor="#6742E7";
        paso3.style.color="#6742E7";
        paso3.style.borderColor="#6742E7";
        h2[0].style.color="#6742E7";
        h2[1].style.color="#6742E7";
        modo.innerHTML="Modo Nocturno";
        imgCinta.removeAttribute("src");
        imgCinta.setAttribute("src", "../assets/pelicula.svg");
        imgCamara.removeAttribute("src");
        imgCamara.setAttribute("src", "../assets/camara.svg");
        b = true;
    }
}



//====================== PASO 1 =====================//

btnCrear.addEventListener("click", ()=> {
 inicioCamara();
})

//encendido de camara
function inicioCamara() {
    btnCrear.style.visibility = "hidden";
    paso1.style.backgroundColor = "#6742E7";
    paso1.style.color = "white";
    intro1.innerHTML = "¿Nos das acceso";
    intro2.innerHTML="a la cámara?";
    pintro1.innerHTML = "El acceso a tu camara será válido sólo";
    pintro2.innerHTML=" por el tiempo en el que estés creando el GIFO.";
    span.style.display="none";
    navigator.mediaDevices.getUserMedia({video: true
    }).then(stream => {
        video.srcObject = stream;
        video.play();
        video.style.height = "320px";
        video.style.width = "480px";
        video.style.display = "inherit";
        intro1.remove();
        intro2.remove();
        pintro1.remove();
        pintro2.remove();
        btnCrear.style.visibility = "visible";
        btnCrear.innerHTML = "GRABAR";
        paso1.style.backgroundColor = "white";
        paso1.style.color = "#6742E7";
        paso2.style.backgroundColor = "#6742E7";
        paso2.style.color = "white";
        
        btnCrear.removeEventListener('click', inicioCamara);
        
    }).catch(error =>{
        console.log(error);
        alert('Unable to capture your camera. Please check console logs.');
    });
    btnCrear.addEventListener('click', startRecording);
}



//======================PASO 2=========================//

function startRecording() {
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
       recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 480,
            height: 320,
            hidden: 140,
            onGifRecordingStarted: function () {
                console.log('started');
            },
        });
        recorder.startRecording();
        // Timer
        dateStarted = new Date().getTime();
        setTimeout(looper, 1000);
        recorder.camera = stream;
        btnCrear.innerHTML = "FINALIZAR";
        btnCrear.removeEventListener('click',startRecording);
    }).catch(error => {
        console.log(error);
    });
    btnCrear.addEventListener("click",stopVideo);
}

// STOP VIDEO

function stopVideo() {
    btnCrear.removeEventListener('click',stopVideo);
    recorder.stopRecording(stopRecordingCallback);
    stopTime();
    timerVid.innerHTML = "REPETIR CAPTURA";
    timerVid.style.cursor = "pointer";
    // agregar evento repetir captura
    timerVid.addEventListener('click', repetirVideo);
    
    timerVid.style.textDecoration = "underline";
    timerVid.style.textDecorationColor = "#4FE3C1";
    timerVid.style.textDecorationThickness = "2.5px";
    btnCrear.innerHTML = "SUBIR GIFO";
    // agregar event listener uploadGif()
    btnCrear.addEventListener('click', GifoUpload);
    
}


// CALLBACK

function stopRecordingCallback() {
    video.src = URL.createObjectURL(recorder.getBlob());
    const gif_preview = document.createElement("img");
    gif_preview.src = URL.createObjectURL(recorder.getBlob());
    gif_preview.style.position = "absolute";
    pantallaCompleta.appendChild(gif_preview);
    recorder.camera.stop();
}


// FUNCION REPETIR VIDEO

function repetirVideo() {
    location.reload();
}


//timer design

function calculateTimer(secs) {
    var hrs = Math.floor(secs / 3600);
    var mins = Math.floor((secs - (hrs * 3600)) / 60);
    var sec = Math.floor(secs - (hrs * 3600) - (mins * 60));
    if (mins < 10) {
        mins = "0" + mins;
    }
    else if (sec < 10) {
        sec = "0" + sec;
    }
    else if(hrs <= 0) {
        hrs = "0" + hrs;
    }
    return hrs + ":" + mins + ":" + sec;
};


var timerView = null;
function looper() {
    if (!recorder) {
        return;
    } else {
        timerView = setInterval(printTimer,1000);
    }
};


function printTimer() {
    timerVid.innerHTML = calculateTimer((new Date().getTime() - dateStarted) / 1000);
    timerVid.style.color="#6742E7";
    timerVid.style.fontFamily="'Montserrat', sans-serif";
};

function stopTime() {
    clearInterval(timerView);
}


//========================= PASO 3 ======================//

function GifoUpload() {
    const form = new FormData();
    form.append('file', recorder.getBlob(), 'myGif.gif');
    console.log(form.get('file'));
    // subiendo el buffer
    gifBuffering();

    fetch(`https://upload.giphy.com/v1/gifs?api_key=${ApiKey}`, {
        method: "POST",
        body: form
    })
    .then(response => response.json())
    .then(response => {
        fondogif.remove();
        let gifsrc = `${GIPHY_URL}${response.data.id}/giphy.gif`;
        uploadSuccesfull(gifsrc,response.data.id);
        let datagif = response.data.id;
        console.log(response.data.id);
        MisGifos.push(datagif);
        localStorage.setItem('myGifostorage',JSON.stringify(MisGifos));
        
    })
    .catch(error => {
        console.log({error: `${error}`});
    });
};

let getData = localStorage.getItem("myGifostorage");
console.log(getData);


function uploadSuccesfull(this_gif_src,gif_id) {
    const fondogif = document.createElement("div");
    fondogif.id = "fondogif";
    fondogif.style.backgroundColor = "#6742E7";
    fondogif.style.height = "320px";
    fondogif.style.width = "480px";
    fondogif.style.opacity = "0.6";
    fondogif.style.position = "absolute";
    fondogif.style.display = "flex";
    fondogif.style.flexDirection = "column";
    fondogif.style.alignItems = "center";
    fondogif.style.justifyContent = "center";
    const buffer_img = document.createElement("img");
    buffer_img.setAttribute('src', "assets/ok.svg");
    buffer_img.style.height = "22px";
    buffer_img.style.width = "22px";
    buffer_img.style.marginBottom = "10px";
    const buffer_txt = document.createElement("p");
    buffer_txt.innerHTML = "GIFO subido con éxito";
    buffer_txt.style.color = "#FFFFFF";
    buffer_txt.style.fontSize = "15px";
    buffer_txt.style.textAlign = "center";
    buffer_txt.style.fontFamily = "'Montserrat'";
    buffer_txt.style.fontWeight = "800";
    // download and link btns
    const btns_cnt = document.createElement("div");
    btns_cnt.style.position = "absolute";
    btns_cnt.style.top = "0";
    btns_cnt.style.right = "0";
    btns_cnt.style.marginTop = "11px";
    btns_cnt.style.marginRight = "12px";
    const link_icon = document.createElement("img");
    link_icon.setAttribute('src', "assets/icon-link-normal.svg");
    link_icon.style.height = "32px";
    link_icon.style.width = "32px";
    link_icon.style.marginLeft = "10px"
    link_icon.style.cursor = "pointer";
    const download_icon = document.createElement("img");
    download_icon.setAttribute('src', "../assets/icon-download.svg");
    download_icon.style.height = "32px";
    download_icon.style.width = "32px";
    download_icon.id = "download-icon";
    let a_download = document.createElement("a");
    a_download.setAttribute("download", "download");
    a_download.style.cursor = "pointer";
    let href = createBlob(this_gif_src);
    href.then(url => {
        a_download.setAttribute("href", url);
    })
    a_download.setAttribute("download", "myGif.gif");
    a_download.appendChild(download_icon);
    btns_cnt.appendChild(a_download);
    btns_cnt.appendChild(link_icon);
    fondogif.appendChild(btns_cnt);
    fondogif.appendChild(buffer_img);
    fondogif.appendChild(buffer_txt);
    pantallaCompleta.appendChild(fondogif);


    // Hovers
    download_icon.addEventListener('mouseenter', () => {
        download_icon.setAttribute('src', "../assets/icon-download-hover.svg");
    });
    download_icon.addEventListener('mouseleave', () => {
        download_icon.setAttribute('src', "../assets/icon-download.svg");
    });
    link_icon.addEventListener('mouseenter', () => {
        link_icon.setAttribute('src', "assets/icon-link-hover.svg");
    });
    link_icon.addEventListener('mouseleave', () => {
        link_icon.setAttribute('src', "assets/icon-link-normal.svg")
    });
    // ===== CLIPBOARD COPIADO =====
    link_icon.addEventListener('click', () => {
        const copyLink = `${GIPHY_URL}${gif_id}/giphy.gif`;
        copy(copyLink);
    })
}



    function gifBuffering() {
        // Violet card
        const fondogif = document.createElement("div");
        fondogif.id = "fondogif";
        fondogif.style.backgroundColor = "#572EE5";
        fondogif.style.height = "320px";
        fondogif.style.width = "480px";
        fondogif.style.opacity = "0.6";
        fondogif.style.position = "absolute";
        fondogif.style.display = "flex";
        fondogif.style.flexDirection = "column";
        fondogif.style.alignItems = "center";
        fondogif.style.justifyContent = "center";
        const buffer_img = document.createElement("img");
        buffer_img.setAttribute('src', ".../assets/loader.svg");
        buffer_img.style.height = "22px";
        buffer_img.style.width = "22px";
        buffer_img.style.marginBottom = "10px";
        const buffer_txt = document.createElement("p");
        buffer_txt.innerHTML = "Estamos subiendo tu GIFO";
        buffer_txt.style.color = "#FFFFFF";
        buffer_txt.style.fontSize = "15px";
        buffer_txt.style.textAlign = "center";
        buffer_txt.style.fontFamily = "'Montserrat'";
        buffer_txt.style.fontWeight = "800";
        fondogif.appendChild(buffer_img);
        fondogif.appendChild(buffer_txt);
        pantallaCompleta.appendChild(fondogif);
        // Clear btn and "repetir captura"
        btnCrear.style.visibility = "hidden";
        timerVid.style.visibility = "hidden";
        // Pintar paso 3, despintar paso 2
        paso3.style.backgroundColor = "#572EE5";
        paso3.style.color = "#FFFFFF";
        paso2.style.backgroundColor = "#FFFFFF";
        paso2.style.color = "#572EE5";
    
    }




    function copy(urltext) {
        const copyText = urltext;
        const area = document.createElement('textarea');
        area.value = copyText;
        area.setAttribute('readonly', '');
        area.style = {
            position: 'absolute',
            left: '-9999px'
        };
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
        alert("Link copiado en clipboard! :)");
    };
    



    async function createBlob(url) {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            return URL.createObjectURL(blob);
        } catch (error) {
            console.log("ERROR: ", error);
        }
    };



    
//====================== FUNCION AGREGADO A MIS GIFOS ======================//

function checkForAddedMisGifos() {
    if (localStorage.getItem('myGifostorage')) {
        MisGifos = JSON.parse(localStorage.getItem('myGifostorage'));
    } else if (localStorage.getItem('myGifostorage') == null) {
        MisGifos = [];
    }
    return MisGifos;
}
checkForAddedMisGifos();



//no funciona al 100x100 esteticamente pero graba los gifos


