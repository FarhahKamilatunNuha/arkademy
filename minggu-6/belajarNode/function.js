//const tambah = (satu,dua)=>{
    //return satu+dua
//}

class Mobil {
    constructor(tipe, warna){
        this.tipe = tipe
        this.warna = warna
    }

jalankan(){
    console.log("jalankan mobil "+this.tipe+"yang warnanya"+ this.warna)
   }
}

module.exports = {
    fungsiTambah : (satu,dua)=>{
        return satu+dua
    }
}