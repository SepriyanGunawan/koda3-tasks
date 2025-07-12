exports.triangle = function(angka) { 
    console.log("\n---- triangle Program ----");
    if (typeof angka !== "number" || angka < 0) { 
        throw new Error("bukan type number harus number dan tidak boleh mines");}
    let baris = "";
    for (let i = 1; i <= angka; i++) {
        for (let j = 1; j <= i; j++) {
            baris += j + " "; } baris += "\n"; }
    console.log(baris);
};
// 

// triangle(45);
