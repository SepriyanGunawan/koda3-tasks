exports.noempat =function(angka) {
    console.log("\n---- Soal nomor 4 ----");
    // angka yang diisi harus arry yang setiap item harus number
    if (!Array.isArray(angka) || !angka.every((item) => typeof item === "number")) {
        throw new Error("inputan harus arry yang berisi number");
        // throw new Error("inputan harus arry yang berisi number");
        return false;
    }
    let jmlangka= 1;
    for (let i = 0; i < angka.length; i++) {
        if (angka[i] % 2 !== 0){
            jmlangka *= angka[i];
        }
    }
    console.log(jmlangka);
};
