import fs from "node:fs";

// Legge il contenuto di testo.txt e lo stampa senza scrivere un nuovo file
fs.readFile("testo.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Errore nella lettura del file:", err);
        return;
    }

    // Stampiamo il contenuto in console invece di scriverlo su un file
    console.log("Contenuto del file:");
    console.log(data);
});
