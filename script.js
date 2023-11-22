var buton = document.getElementById("button");
var nume = document.getElementById("Nume");
var email = document.getElementById("Email");
var poza = document.getElementById("Poza");
var citat = document.getElementById("Citat");
var img = document.getElementById("image");
var an1= document.getElementById("An1");
var link1= document.getElementById("link1");


buton.addEventListener("click", altaViata);
buton.addEventListener("click", inserareImagine);

function altaViata ()
{
	nume.innerHTML = "Functie: Senior Java Developer";
        email.innerHTML = "Troll profesional pe internet și în companiile IT";
        poza.innerHTML = "Autoportret (autor anonim)";
        img.src= "D:\site/poza2.jpeg";
        citat.innerHTML = "Ce am eu în cap nu se învață la școală- Selly";
        an1.innerHTML = "Se fini";
        document.body.style.backgroundColor = "darkblue";
        
}

function inserareImagine(idCelula) {
    var tabel = document.getElementById("tabel");
    var imagine = document.createElement("img");
    imagine.src = "D:\\site\\poza3" + count + "D:\\site\\poza4";
    count = count % 4 + 1;
    var celula = document.getElementById("idCelula");
    celula.innerHTML = '';
    celula.appendChild(imagine);
   
}
