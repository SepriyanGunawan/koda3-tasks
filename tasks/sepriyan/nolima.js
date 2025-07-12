exports.nolima = function(angka) {
    console.log("\n---- soal nomor 5 ----");
    if (typeof angka !== "number" || angka < 0) { 
        throw new Error("bukan type number harus number dan tidak boleh mines");}
    for (let i = 1; i <= 10; i++) {
        console.log(`${angka} X ${i} = ${angka*i}`);
    }
};
