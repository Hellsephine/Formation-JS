const items = [
    {
        name:"Sneaker A",
        price:225,
        quantity:0
    },
    {
        name:"Sneaker B",
        price:340,
        quantity:0
    },
    {
        name:"Sneaker C",
        price:150,
        quantity:0
    }
]

const itemDiv = document.getElementById("items");
let total = 0;


for(i = 0;i < items.length;i++){
    affichage(i);
}

function affichage(index){
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

        //b.dataset.btnId
        mainDiv.appendChild(b);

    itemDiv.appendChild(mainDiv);

    b.addEventListener('click',function(){
        items[index].quantity +=1;
        qte.textContent = "Quantité :" + items[index].quantity;

        total += items[index].price;

        const tt = document.getElementById("total");
        tt.textContent = total;
    })
}