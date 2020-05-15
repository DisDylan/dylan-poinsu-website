var panda = document.getElementById('octocat');

panda.addEventListener("click", clickOctocat, false);

function clickOctocat() {

    var answer = Number(prompt('Petit test ! Combien de mois possèdent 28 jours dans l\'année ?'));

    if (Number.isInteger(answer)) {
        if (answer === 12) {
            alert('Bien joué, passons à la suite !');
        } else {
            alert('Perdu ! Rééssaie ..');
            clickOctocat()
        };
    } else {
        alert('Entre une valeur numérique je te prie.');
        clickOctocat();
    }
    return answer
};