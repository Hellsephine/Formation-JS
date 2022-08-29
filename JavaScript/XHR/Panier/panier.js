const itemDiv = document.getElementById("items");
let total = 0;
let items = [];

function traducteur(){
    items = JSON.parse(this.responseText);
    itemDiv.innerHTML = "";
    for(i = 0;i < items.length;i++){//fonction qui parcours le tableau et lance la fonction 'affichage'
        affichage(i);
    }
}

function load(url){
    const xhr = new XMLHttpRequest();
    xhr.onload = traducteur;
    xhr.open("GET", url);
    xhr.send();
    return false;
}



function affichage(index){//fonction qui traite les donner de 'items' et les affiche sous forme de HTML
    const mainDiv = document.createElement("div");
    mainDiv.id = "objet"+index;
        const titre = document.createElement("h1");
        titre.textContent = items[index].name;
        mainDiv.appendChild(titre);

        const prix = document.createElement("p");
        prix.textContent = "Prix :" + items[index].price;
        mainDiv.appendChild(prix);

        const qte = document.createElement("p");
        qte.textContent = "Quantité :" + items[index].quantity;
        mainDiv.appendChild(qte);

        const b = document.createElement("button");
        b.textContent = "Ajouter";
        b.id = "btn"+index;

        mainDiv.appendChild(b);

    itemDiv.appendChild(mainDiv);

    b.addEventListener('click',function(){//event qui attend un clique pour modifier la qte et le total a payer
        items[index].quantity +=1;
        qte.textContent = "Quantité :" + items[index].quantity;

        total += items[index].price;

        const tt = document.getElementById("total");
        tt.textContent = total;
    })
}


