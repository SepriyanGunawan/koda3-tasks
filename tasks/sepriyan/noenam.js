exports.uratanAngka= function (start,end) {
    console.log("\n---- soal nomor 6 ----");
    // untuk memvalidasi start dan end harus number dan tidak boleh minus
    if ((typeof start !== "number" || start < 0) && (typeof end !== "number" || end < 0) ) { 
        throw new Error("bukan type number harus number dan tidak boleh mines");}
    let hasil ="";
    for (let i = start; i <= end; i++) {
        if (i == end) {
            hasil+= i;
            continue;
        }
        hasil+=i +", ";
    }
    console.log(hasil);
};
