const ponsel = [
    {
        "merekPonsel":"OPPO A71",
        "RAMPonsel":"2GB",
        "storagePonsel":"16GB",
        "hargaPonsel":"RP 1.620.000"
    },
    {
        "merekPonsel":"Advan G2",
        "RAMPonsel":"3GB",
        "storagePonsel":"32GB",
        "hargaPonsel":"RP 1.150.000"
    },
    {
        "merekPonsel":"Nokia 2",
        "RAMPonsel":"1GB",
        "storagePonsel":"8GB",
        "hargaPonsel":"RP 795.000"
    },
    {
        "merekPonsel":"Xiaomi Redmi 5A",
        "RAMPonsel":"2GB",
        "storagePonsel":"16GB",
        "hargaPonsel":"RP 900.000"
    },
    {
        "merekPonsel":"Vivo V9",
        "RAMPonsel":"4GB",
        "storagePonsel":"64GB",
        "hargaPonsel":"RP 2.099.000"
    },
    {
        "merekPonsel":"OPPO F7",
        "RAMPonsel":"4GB/6GB",
        "storagePonsel":"64GB/128GB",
        "hargaPonsel":"RP 1.799.000"
    },
    {
        "merekPonsel":"Honor 7X",
        "RAMPonsel":"4GB",
        "storagePonsel":"64GB",
        "hargaPonsel":"RP 2.609.000"
    },
    {
        "merekPonsel":"Huawei nova 2i",
        "RAMPonsel":"4GB",
        "storagePonsel":"64GB",
        "hargaPonsel":"RP 1.899.000"
    },
    {
        "merekPonsel":"Samsung Galaxy A80",
        "RAMPonsel":"8GB",
        "storagePonsel":"128GB",
        "hargaPonsel":"RP 8.850.000"
    },
    {
        "merekPonsel":"IPhone 7 plus",
        "RAMPonsel":"3GB",
        "storagePonsel":"128GB",
        "hargaPonsel":"RP 4.690.000"
    },
]
let x;

for(x in ponsel){
    let merekPonsel = merek[x].ponsel
    let RAMPonsel= RAM[x].ponsel
    let hargaPonsel= hargaPonsel[x].ponsel
    let divider = "<div>\<span class='merek-ponsel'>"+merekPonsel+"</span>\<span class='RAM-ponsel'>"+RAMPonsel+"</span>\<span class='storage-ponsel'>"+storagePonsel+"</span>\<span class='harga-ponsel'>"+hargaPonsel+"</span>\</div>";
   
    document.getElementById('ponsel').innerHTML += divider
}