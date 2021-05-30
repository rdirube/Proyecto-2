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


function stopRecordingCallback() {
    video.src = URL.createObjectURL(recorder.getBlob());
    const gif_preview = document.createElement("img");
    gif_preview.src = URL.createObjectURL(recorder.getBlob());
    gif_preview.style.position = "absolute";
    pantallaCamara.appendChild(gif_preview);
    recorder.camera.stop();
}



function GifoUpload() {
    const form = new FormData();
    form.append('file', recorder.getBlob(), 'myGif.gif');
    console.log(form.get('file'));
    // UPLOADING BUFFER???
    gifBuffering();

    fetch(`https://upload.giphy.com/v1/gifs?api_key=${APIKEY}`, {
        method: "POST",
        body: form
    })
    .then(response => response.json())
    .then(response => {
        upload_card.remove();
        let this_gif_src = `${GIPHY_URL}${response.data.id}/giphy.gif`;
        uploadSuccesfull(this_gif_src,response.data.id);
        let id_toLocal = JSON.stringify(response.data);
        list_mis_gifos.push(response.data);
        localStorage.setItem('myGifoKey',JSON.stringify(list_mis_gifos));
    })
    .catch(error => {
        console.log({error: `${error}`});
    });
};
