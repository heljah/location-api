// Kokeilen perusjuttuja js:lla
try {
    nonExistentFunction();
} catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
}

const teeJotain = (tuloste) => {
    console.log({tuloste});
};

let lista = [];
const kissa = {};
kissa.nimi = "Mirri";
kissa.ika = 2;

lista[0] = kissa;

try {
    teeJotain(lista);
} catch (error) {
    console.log(error);
} finally {
    document.createElement("p").innerHTML = "Tein jotain";
}
