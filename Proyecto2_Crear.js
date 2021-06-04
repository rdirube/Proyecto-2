const paso1 = document.getElementById("paso-1");
const paso2 = document.getElementById("paso-2");
const paso3 = document.getElementById("paso-3");
let btnCrear = document.getElementById("btn-crear");
const intro1 = document.getElementById("intro1");
const intro2 = document.getElementById("intro2");
const pintro1 = document.getElementById("p-intro1");
const pintro2 = document.getElementById("p-intro2");
const span = document.getElementById("span");
let video = document.getElementById("video");
const timerVid = document.getElementById("timer-vid");
const pantallaCamara = document.getElementById("pantalla-camara");
let MisGifos = [];
const pantallaCompleta = document.getElementById("pantalla-completa");
const ApiKey = "og2cGOovwMy2VkjKm8PCJRTApTXFM8BJ";












btnCrear.addEventListener("mouseover", ()=> {
    btnCrear.style.backgroundColor="#6742E7";
    btnCrear.style.color="white";
    btnCrear.style.cursor="pointer";
})

btnCrear.addEventListener("mouseout", ()=> {
    btnCrear.style.backgroundColor="white";
    btnCrear.style.color="#6742E7";
})


btnCrear.addEventListener("click", ()=> {
 inicioCamara();
})

function inicioCamara() {
    btnCrear.style.visibility = "hidden";
    paso1.style.backgroundColor = "#6742E7";
    paso1.style.color = "white";
    intro1.innerHTML = "¿Nos das acceso";
    intro2.innerHTML="a la cámara?";
    pintro1.innerHTML = "El acceso a tu camara será válido sólo";
    pintro2.innerHTML=" por el tiempo en el que estés creando el GIFO.";
    span.style.display="none";
    // Obtener streaming de video y visualizarlo en el DOM
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



function startRecording() {
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
       recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 450,
            height: 200,
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



function stopVideo() {
    btnCrear.removeEventListener('click',stopVideo);
    recorder.stopRecording(stopRecordingCallback);
    stopTime();
    timerVid.innerHTML = "REPETIR CAPTURA";
    timerVid.style.cursor = "pointer";
    // agregar evento repetir captura
    timerVid.addEventListener('click', repetirVideo);
    btnCrear.innerHTML = "SUBIR GIFO";
    timerVid.style.textDecoration = "underline";
    timerVid.style.textDecorationColor = "#4FE3C1";
    timerVid.style.textDecorationThickness = "2.5px";
    // agregar event listener uploadGif()
    btnCrear.addEventListener('click', GifoUpload);
}

function stopRecordingCallback() {
    video.src = URL.createObjectURL(recorder.getBlob());
    const gif_preview = document.createElement("img");
    gif_preview.src = URL.createObjectURL(recorder.getBlob());
    gif_preview.style.position = "absolute";
    pantallaCompleta.appendChild(gif_preview);
    recorder.camera.stop();
}


function repetirVideo() {
    location.reload();
}



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
};

function stopTime() {
    clearInterval(timerView);
}






function GifoUpload() {
    const form = new FormData();
    form.append('file', recorder.getBlob(), 'myGif.gif');
    console.log(form.get('file'));
    // UPLOADING BUFFER???
    gifBuffering();

    fetch(`https://upload.giphy.com/v1/gifs?api_key=${ApiKey}`, {
        method: "POST",
        body: form
    })
    .then(response => response.json())
    .then(response => {
        upload_card.remove();
        let gifsrc = `${GIPHY_URL}${response.data.id}/giphy.gif`;
        uploadSuccesfull(gifsrc,response.data.id);
        let datagif = JSON.stringify(response.data);
        MisGifos.push(datagif);
        localStorage.setItem('myGifoKey',JSON.stringify(MisGifos));
    })
    .catch(error => {
        console.log({error: `${error}`});
    });
};


function uploadSuccesfull(this_gif_src,gif_id) {
    const upload_card = document.createElement("div");
    upload_card.id = "upload_card";
    upload_card.style.backgroundColor = "#6742E7";
    upload_card.style.height = "320px";
    upload_card.style.width = "480px";
    upload_card.style.opacity = "0.6";
    upload_card.style.position = "absolute";
    upload_card.style.display = "flex";
    upload_card.style.flexDirection = "column";
    upload_card.style.alignItems = "center";
    upload_card.style.justifyContent = "center";
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
    download_icon.setAttribute('src', "assets-usados/icon-download.svg");
    download_icon.style.height = "32px";
    download_icon.style.width = "32px";
    download_icon.id = "download-icon"}



    function gifBuffering() {
        // Violet card
        const upload_card = document.createElement("div");
        upload_card.id = "upload_card";
        upload_card.style.backgroundColor = "#572EE5";
        upload_card.style.height = "320px";
        upload_card.style.width = "480px";
        upload_card.style.opacity = "0.6";
        upload_card.style.position = "absolute";
        upload_card.style.display = "flex";
        upload_card.style.flexDirection = "column";
        upload_card.style.alignItems = "center";
        upload_card.style.justifyContent = "center";
        const buffer_img = document.createElement("img");
        buffer_img.setAttribute('src', "./assets/loader.svg");
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
        upload_card.appendChild(buffer_img);
        upload_card.appendChild(buffer_txt);
        pantallaCompleta.appendChild(upload_card);
        // Clear btn and "repetir captura"
        btnCrear.style.visibility = "hidden";
        timerVid.style.visibility = "hidden";
        // Pintar paso 3, despintar paso 2
        paso3.style.backgroundColor = "#572EE5";
        paso3.style.color = "#FFFFFF";
        paso2.style.backgroundColor = "#FFFFFF";
        paso2.style.color = "#572EE5";
    
    }