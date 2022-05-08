// Foundamentels P.3

// function add7(a) {
// // Write a function called add7 that takes one number and returns that number + 7.
//     return a + 7
// }

// function multiply(a, b) {
// // Write a function called multiply that takes 2 numbers and returns their product.
//     return a + b;
// }

// function capitalize (a) {
// // Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
//     return a.toUpperCase(); // está mal, revisar
// }

// function lastLetter(a) {
// // Write a function called lastLetter that takes a string and returns the very last letter of that string:
//     return a.length; // está mal, revisar
// }

// Foundamentals P.4

let btn = document.getElementById('quizBtn');
btn.addEventListener('click', osu);

function osu() {
let usu = prompt("Ingrese un campeón de TFT (solo minúsculas)");

if (usu == "talon" || usu == "leona" || usu == "twitch" || usu == "ekko" || usu == "khazix" || usu == "nocturne" || usu == "syndra") {
    alert("Debonair Assasin");
} else if (usu == "poppy" || usu == "ziggs" || usu == "corki" || usu == "vex" || usu == "gnar" || usu == "lulu" || usu == "veigar") {
    alert("Yordles");
} else if (usu == "ashe" || usu == "darius" || usu == "zyra" || usu == "morgana" || usu == "braum" || usu == "ahri" || usu == "orianna") {
    alert("Syndicate Snipers");
} else if (usu == "alistar" || usu == "chogath" || usu == "kaisa" || usu == "kassadin" || usu == "malzahar" || usu == "reksai") {
    alert("Mutant Colossus");
} else if (usu == "sejuani" || usu == "tahmkench") {
    alert ("Scholar Bruisers");
} else if (usu == "blitzcrank" || usu == "galio") {
    alert("Bodyguard Colossus");
} else if (usu == "brand" || usu == "jarvan") {
    alert("early, no uses esa mierda para una comp");
} else if (usu == "caitlyn" || usu == "ezreal" || usu == "jayce" || usu == "jhin" || usu == "seraphine" || usu == "vi" || usu == "zilean") {
    alert("Clockwork Innovators");
} else if (usu == "draven" || usu == "camille") {
    alert("Draven & Friends");
} else if (usu == "gangplank" || usu == "quinn" || usu == "illaoi" || usu == "miss fortune") {
    alert("Mercenary");
} else if (usu == "irelia" || usu == "sivir") {
    alert("Scrap Stricker");
} else if (usu == "jinx" || usu == "silco") {
    alert("Casi cualquier comp");
} else if (usu == "lucian") {
    alert("Twinshot");
} else if (usu == "renataglasc" || usu == "singed" || usu == "tryndamere" || usu == "viktor" || usu == "warwick" || usu == "zac") {
    alert("Chemtech Bruisers");
} else if (usu == "senna") {
    alert("Para hacer giladas con Socialité");
} else if (usu == "swain") {
    alert("Arcanist (no uses esta mierda)");
} else if (usu == "zeri") {
    alert("Syndicate Debonairs");
}
}