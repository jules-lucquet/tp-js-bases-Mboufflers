const nomJoueur = "Jules";
let = 17 
console.log(nomJoueur)
console.log(let)
const moyenne = 13;

if (moyenne < 13) {
    console.log("A en-dessous de la moyenne");
} else if (moyenne < 18) {
    console.log("Vous pouvez accéder à la section ado.");
}
else if (moyenne > 18) {
    console.log("Bienvenue dans l'espace adulte");
}
for (let i = 0; i <10; i++) {
    console.log("Note n°"+ 7*(i + 1))
}

const calculerMoyenne = (note1, note2) => {
    const moyenne = (note1 + note2) / 2;
    return moyenne;
}; 