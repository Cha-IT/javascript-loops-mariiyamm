let text = "";
let i = 1;
while(i < 11) {
    text += i + "<br>";
    i++;
}
document.getElementById("text").innerHTML = text;


for (let i = 1; i < 11; i++) {
    console.log(i)
}

let passord = prompt("Skriv inn passord");
while(passord !== "Passord"){
    passord = prompt ("Pasord er feil. Prøv en gang til")
    log.innerText = "Det er feil passord";
}


// if (passord === "Passord") {
//     log.innerText = "Velkommen";
// } else {
//     log.innerText = "Det er feil passord";
// }

