let scoreJ1 = 0;
let scoreJ2 = 0;

const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");

const pierre = document.getElementById("bPierre");
const feuille = document.getElementById("bFeuille");
const ciseaux = document.getElementById("bCiseaux");

const resultat = document.getElementById("resultat");

const imgJ1 = document.createElement("img");
const imgJ2 = document.createElement("img");
const pResult = document.createElement("p");

const imgs = [
    "img/rock.svg",
    "img/paper.svg",
    "img/scissors.svg"
]

updateScore();

let play = function(j1){
    let j2 = Math.ceil(Math.random() * 3);
    resultat.innerHTML = "";
    pResult.className = "";
    imgJ1.src = imgs[j1 - 1];
    imgJ2.src = imgs[j2 - 1];
    resultat.appendChild(imgJ1);
    resultat.append(" - ");
    resultat.appendChild(imgJ2);
    
    if((j1 == 1 && j2 == 3) || (j1 == 2 && j2 == 1) || (j1 == 3 && j2 == 2)){
        scoreJ1++;
        pResult.classList.add("win");
        pResult.innerText = "Gagné !";
    }
    else if(j1 == j2){
        pResult.classList.add("draw");
        pResult.innerText = "Egalité !";
    }
    else{
        scoreJ2++;
        pResult.classList.add("lose");
        pResult.innerText = "Perdu !";
    }
    resultat.appendChild(pResult);
    updateScore();
}


pierre.addEventListener("click", function(){
    play(1);
});
feuille.addEventListener("click", function(){
    play(2);
});
ciseaux.addEventListener("click", function(){
    play(3);
});

function updateScore(){
    player1Score.innerText = scoreJ1;
    player2Score.innerText = scoreJ2;
}