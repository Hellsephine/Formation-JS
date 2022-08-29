const itemDiv = document.getElementById("wiki");
let item;

function wikiload(){
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        item = JSON.parse(this.responseText);
        menuGeneral(item.categories);
    };
    xhr.open("GET", "https://api.publicapis.org/categories");
    xhr.send();
}
wikiload();

function menuGeneral(index1){
    const selector = document.createElement("select")
    document.body.prepend(selector);
    selector.className = "form-select";
        const opt = document.createElement("option");
        selector.appendChild(opt);
        opt.selected = 'select';
        opt.textContent = "";
        for(e = 0;e < index1.length;e++){
            const opt1 = document.createElement("option");
            selector.appendChild(opt1);
            opt1.textContent = index1[e];
            opt1.value = index1[e];
        }
    selector.addEventListener('change', function(event){
        choix(event);
    }
    )
}

function traducteur(){
    item = JSON.parse(this.responseText);
    itemDiv.innerHTML = "";
    entete();
    for(i = 0;i < item.entries.length;i++){
        affichage(i);
    }   
}

function load(url){
    const xhr = new XMLHttpRequest();
    xhr.onload = traducteur;
    xhr.open("GET", url);
    xhr.send();
}
load("https://api.publicapis.org/entries");

function affichage(index){
    const tableau = document.getElementById("T");
        const t1 = document.createElement("tr")
        tableau.appendChild(t1);
            const td = document.createElement("td");
            t1.appendChild(td);
            td.textContent = item.entries[index].API;

            const td1 = document.createElement("td");
            t1.appendChild(td1);
            td1.textContent = item.entries[index].Description;

            const td2 = document.createElement("td");
            t1.appendChild(td2);
            td2.textContent = item.entries[index].Category;

            const td3 = document.createElement("td");
            t1.appendChild(td3);
                const tda = document.createElement("a");
                    tda.href = item.entries[index].Link
                    tda.textContent = "Lien";
                td3.appendChild(tda);
}

function entete(){
    const mainDiv = document.createElement("div");
    mainDiv.className = "container";
        const ta = document.createElement("table");
        ta.className = "table table-striped";
            const thead = document.createElement("thead");
            ta.appendChild(thead);
            const t = document.createElement("tbody");
            ta.appendChild(t);
            t.id = "T";
            const tr = document.createElement("tr");
            thead.appendChild(tr);
                const th = document.createElement("th");
                tr.appendChild(th);
                th.innerHTML = "Nom";
                const th1 = document.createElement("th");
                tr.appendChild(th1);
                th1.innerHTML = "Description";
                const th2 = document.createElement("th");
                tr.appendChild(th2);
                th2.innerHTML = "Category";
                const th3 = document.createElement("th");
                tr.appendChild(th3);
                th3.innerHTML = "Lien";

            
        mainDiv.appendChild(ta);
    itemDiv.appendChild(mainDiv);
}

function choix(event){
    const choix = event.target.value;
    load("https://api.publicapis.org/entries?category="+choix);
}

