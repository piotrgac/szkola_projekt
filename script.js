function dodaj(){
    let x = document.getElementById("id_x").value;
    for(let i = 0; i < x; i++){
        const komorka = document.createElement("td");
        const zawartosc = document.createTextNode("Lorem ipsum dolor sit amet.");
        const element = document.getElementById("table");
        komorka.appendChild(zawartosc);
        element.appendChild(komorka);
    }
}