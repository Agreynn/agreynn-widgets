/*==================================================
            AGREYNN FOLLOW ALERT
                Version 0.1
===================================================*/

//=====================================
// CONFIGURACIÓN
//=====================================

const SETTINGS = {

    duration: 6000,

    previewName: "Agreynn",

    preview: true

};


//=====================================
// ELEMENTOS
//=====================================

const alertBox = document.getElementById("agreynn-alert");

const username = document.getElementById("username");


//=====================================
// MOSTRAR ALERTA
//=====================================

function showAlert(name){

    username.textContent = name;

    alertBox.classList.remove("hide");

    alertBox.classList.add("show");

    setTimeout(()=>{

        hideAlert();

    },SETTINGS.duration);

}


//=====================================
// OCULTAR ALERTA
//=====================================

function hideAlert(){

    alertBox.classList.remove("show");

    alertBox.classList.add("hide");

}


//=====================================
// PREVIEW PARA VS CODE
//=====================================

if(SETTINGS.preview){

    window.onload = ()=>{

        showAlert(SETTINGS.previewName);

    }

}


//=====================================
// STREAMELEMENTS
//=====================================

window.addEventListener("onEventReceived", function (obj) {

    const listener = obj.detail.listener;

    const event = obj.detail.event;

    if(listener !== "follower-latest") return;

    showAlert(event.name);

});