//variables globales:
var eltTxtRadians ;
var eltTxtDegres ;
var eltSpanMessage ;
var eltUlHistorique ;

var coeff;

function initialisations(){

    coeff = 180 / Math.PI;

    eltTxtRadians = document.getElementById("txtRadians");
    eltTxtDegres = document.getElementById("txtDegres");
    eltSpanMessage = document.getElementById("spanMessage");
    eltUlHistorique = document.getElementById("ulHistorique") ;
    razMessage();

    var btnDegresToRadians = document.getElementById("btnDegresToRadians");
    btnDegresToRadians.addEventListener("click",degresToRadians);
    /*
    btnDegresToRadians.addEventListener("click",function(){
        alert('code temporaire moins bien');
    });
     */






    var cbShowHisto = document.getElementById("cbShowHisto");
    cbShowHisto.addEventListener("change" , function(){
        if(cbShowHisto.checked){
          eltUlHistorique.style.display="block";
          //eltUlHistorique.style.visibility="visible";
        } else {
          eltUlHistorique.style.display="none";
          //eltUlHistorique.style.visibility="hidden";
        }
    })
}

//window.onload = initialisations;
window.addEventListener('load', initialisations);
window.addEventListener('load', function (){
    console.log("traitement 2 le retour (en plus de initialisations)");
});

function addConversionHistorique(textConv){
    var eltLiConv = document.createElement("li") ; //nouvel <li></li>
    eltLiConv.innerHTML=textConv;
    eltUlHistorique.appendChild(eltLiConv);
}

function razMessage(){
    eltSpanMessage.innerHTML="<i>jusqu'ici tout va bien</i>";
    //eltSpanMessage.innerText="jusqu'ici tout va bien";
    eltSpanMessage.style.color="green";
}

function afficherErreur(errorMsg){
    eltSpanMessage.innerText=errorMsg;
    eltSpanMessage.style.color="red";
}

function radiansToDegres(){
    let repCalcul = localStorage.getItem("dernierCalcul");
    console.log("dernier calcul=" + repCalcul);
    razMessage();
    if (isNaN(eltTxtRadians.value)){
        afficherErreur("le nombre de radians à convertir doit être numérique")
    }else{
        eltTxtDegres.value = coeff * eltTxtRadians.value;
        addConversionHistorique(eltTxtRadians.value + " radians = " + eltTxtDegres.value + " degrés" )
    }
}

function degresToRadians(){
    razMessage();
    if (isNaN(eltTxtDegres.value)){
        afficherErreur("le nombre de degrés à convertir doit être numérique")
    }else{
        eltTxtRadians.value =   eltTxtDegres.value / coeff;
        let calcul = eltTxtDegres.value + " degrés = " + eltTxtRadians.value + " radians"
        addConversionHistorique(  calcul );
        localStorage.setItem("dernierCalcul" , calcul);
    }
}

