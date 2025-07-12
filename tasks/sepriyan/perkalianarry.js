exports.menambahkan = function(angka) {
    if (!Array.isArray(angka) || !angka.every((item) => typeof item === "number")) {
        // console.log("inputan harus arry yang berisi number");
        throw new Error("inputan harus arry yang berisi number");
        return false;
    }
    let jmlangka= 1;
    for (let i = 0; i < angka.length; i++) {
        jmlangka *= angka[i];
    } 
    console.log(jmlangka);
};
