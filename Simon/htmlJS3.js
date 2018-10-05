var carre1 = document.getElementById('carre1');
var carre2 = document.getElementById('carre2');
var carre3 = document.getElementById('carre3');
var carre4 = document.getElementById('carre4');

carre1.addEventListener("click", () => { click(carre1) });
carre2.addEventListener("click", () => { click(carre2) });
carre3.addEventListener("click", () => { click(carre3) });
carre4.addEventListener("click", () => { click(carre4) });

var button0 = document.getElementsByClassName('btn')[0];
// var button1 = document.getElementsByClassName('btn')[1];
// var button2 = document.getElementsByClassName('btn')[1];

button0.addEventListener("click", newGame);
// button1.addEventListener("click", startGame);
// button2.addEventListener("click", refresh);

// BLOC TEXTE AFFICHE RES JEU
var res = document.getElementById('res');

// GESTION DES CASES ET DES CLICS
var result = [];

function click(obj) {
    var reg = new RegExp("[0-9]+", "g");
    var nbrid2 = reg.exec(obj.id);
    console.log(obj.id);
    console.log(nbrid2[0]);
    result.push(nbrid2[0]);
    game();
}

// FONCTION COULEUR
function affichage(obj) {
    var reg = new RegExp("[0-9]+", "g");
    var nbrid = reg.exec(obj.id);
    var colorFinale = ["blue", "orange", "red", "green"];
    var colorInitiale = ["skyblue", "rgb(248, 248, 86)", "rgb(241, 88, 88)", "greenyellow"];

    if (obj.style.backgroundColor === colorFinale[nbrid[0] - 1]) {
        obj.style.backgroundColor = colorInitiale[nbrid[0] - 1];
    }
    else
        obj.style.backgroundColor = colorFinale[nbrid[0] - 1];
}

// VARIABLES GLOBALES DE GAME
var tabSolution = [];
var i;

// GENERER UN TABLEAU
function newGame() {
    i = 0;
    var long = document.getElementById("nombre").value;
    if (long.length < 1 || long == 0) alert("Entrez une valeur ou une valeur non nulle");
    // console.log(long);
    else {
        for (var l = 0; l < long; l++) {
            tabSolution[l] = 1 + (Math.floor(Math.random() * 4));
        }
        carre1.style.display = "inline";
        carre2.style.display = "inline";
        carre3.style.display = "inline";
        carre4.style.display = "inline";
        // document.getElementById("btnwar").style.display = "inline";
        // document.getElementById("btnpri").style.display = "inline";
        console.log(tabSolution);
        showGame(tabSolution);
    }
}

// COMMENCER LE JEU
function showGame(tabSolution) {
    res.innerHTML = "Observe la séquence !";
    var time = document.getElementById("temps").value;
    if (time.length < 3 || time == 000) alert("Entrez un temps ou un temps non nul");
    var time2 = parseInt(time);
    console.log(time2);
    for (var j = 0; j < tabSolution.length; j++) {
        if (tabSolution[j] == 1) {
            setTimeout(() => { affichage(carre1) }, time2); // on peut aussi utiliser un setInterval(func, time);
            setTimeout(() => { affichage(carre1) }, time2 + 300)
        }
        else if (tabSolution[j] == 2) {
            setTimeout(() => { affichage(carre2) }, time2);
            setTimeout(() => { affichage(carre2) }, time2 + 300);
        }
        else if (tabSolution[j] == 3) {
            setTimeout(() => { affichage(carre3) }, time2);
            setTimeout(() => { affichage(carre3) }, time2 + 300);
        }
        else if (tabSolution[j] == 4) {
            setTimeout(() => { affichage(carre4) }, time2);
            setTimeout(() => { affichage(carre4) }, time2 + 300);
        }
        time2 += parseInt((document.getElementById("temps").value));
    }
}

// JOUER
function game() {
    if (result[0] == tabSolution[i]) {
        result.shift();
        i++;
        if (tabSolution[i] == null) {
            res.innerHTML = "Bravo ! Tu as gagné !";
            carre1.style.display = 'none';
            carre2.style.display = 'none';
            carre3.style.display = 'none';
            carre4.style.display = 'none';
        }
        else res.innerHTML = "Trouve le suivant !";
    }
    else {
        result.shift();
        res.innerHTML = "Désolé, tu as perdu !";
        carre1.style.display = 'none';
        carre2.style.display = 'none';
        carre3.style.display = 'none';
        carre4.style.display = 'none';
    }
}


// ############### CIMETIERE A FONCTIONS ################

// // REFRESH
// function refresh() {
//     window.location.reload(false);
// }

// function color1(obj) {
//     // if (obj.style.backgroundColor === 'blue') {
//     //     obj.style.backgroundColor = "skyblue";
//     // }
//     // else {
//     //     obj.style.backgroundColor = "blue";
//     // }
//     result.push(1);
//     game();
// }

// function color2(obj) {
//     // if (obj.style.backgroundColor === 'yellow') {
//     //     obj.style.backgroundColor = "white";
//     // }
//     // else {
//     //     obj.style.backgroundColor = "yellow";
//     // }
//     result.push(2);
//     game();
// }

// function color3(obj) {
//     // if (obj.style.backgroundColor === 'red') {
//     //     obj.style.backgroundColor = "white";
//     // }
//     // else {
//     //     obj.style.backgroundColor = "red";
//     // }
//     result.push(3);
//     game();
// }

// function color4(obj) {
//     // if (obj.style.backgroundColor === 'green') {
//     //     obj.style.backgroundColor = "white";
//     // }
//     // else {
//     //     obj.style.backgroundColor = "green";
//     // }
//     result.push(4);
//     game();
// }

// function blue() {
//     carre1.style.backgroundColor = "blue";
// }
// function skyblue() {
//     carre1.style.backgroundColor = "skyblue";
// }

// function yellow() {
//     carre2.style.backgroundColor = "orange";
// }

// function yellowligth() {
//     carre2.style.backgroundColor = "rgb(248, 248, 86)";
// }

// function red() {
//     carre3.style.backgroundColor = "red";
// }

// function redlight() {
//     carre3.style.backgroundColor = "rgb(241, 88, 88)";
// }

// function green() {
//     carre4.style.backgroundColor = "green";
// }
// function greenlight() {
//     carre4.style.backgroundColor = "greenyellow";
// }



