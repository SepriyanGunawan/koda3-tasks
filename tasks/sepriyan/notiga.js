exports.notiga = function(angka) {
    console.log("\n---- Soal nomor 3 ----");
    if (typeof angka !== "number" || angka < 0) {
        throw new Error("bukan type number harus number dan tidak boleh mines");
    }
    let baris = "";
    for (let i = 1; i <= angka; i++) {
        for (let j = i; j > 0; j--) {
            baris += j + " ";
        }
        baris += "\n";
        console.log(baris);
    }};
// triangle(`fdsfa334555`);
