exports.notiga = function(angka) {
    try {
        if (typeof angka !== "number" || angka < 0) {
            throw new Error("bukan type number harus number dan tidak boleh mines");
        }
        let baris = "";
        for (let i = 1; i <= angka; i++) {
            for (let j = i; j > 0; j--) {
                baris += j + " ";
            }
            baris += "\n";
        }
        console.log(baris);
    } catch (error) {
        console.log(error.message);
    }
};

// triangle(`fdsfa334555`);
