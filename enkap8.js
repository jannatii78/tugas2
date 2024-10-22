class BankAccount {
    #daftarRekening = new Set();
    #daftarNasabah = new Set();
    #saldo;

    constructor(nomorRekening, namaNasabah, saldo) {
        this.nomorRekening = nomorRekening; 
        this.namaNasabah = namaNasabah;     
        this.#saldo = saldo; 
        this.#daftarRekening.add(nomorRekening);
        this.#daftarNasabah.add(namaNasabah);
    }

    set nomorRekening(nomor) {
        if (this.#daftarRekening.has(nomor)) {
            console.log("Nomor rekening sudah digunakan, pilih nomor lain.");
        } else {
            this.#daftarRekening.add(nomor);
            this._nomorRekening = nomor; 
        }
    }

    get nomorRekening() {
        return this._nomorRekening; 
    }

    set namaNasabah(nama) {
        if (this.#daftarNasabah.has(nama)) {
            console.log("Nama nasabah sudah digunakan, pilih nama lain.");
        } else {
            this.#daftarNasabah.add(nama);
            this._namaNasabah = nama; 
        }
    }

    get namaNasabah() {
        return this._namaNasabah; 
    }

    #menyetor(uang) {
        if (uang > 0) {
            this.#saldo += uang; 
            console.log(`Atas nama: ${this.namaNasabah} berhasil menyetor Rp${uang}\nSaldo Anda sekarang: Rp${this.#saldo}`);
        } else {
            console.log("Jumlah setor minimal adalah Rp50.000");
        }
    }

    #menarik(uang) {
        if (uang > 0 && uang <= this.#saldo) {
            this.#saldo -= uang; 
            console.log(`${this.namaNasabah} berhasil menarik Rp${uang}\nSaldo Anda sekarang: Rp${this.#saldo}`);
        } else {
            console.log("Saldo tidak mencukupi untuk melakukan penarikan atau jumlah kurang dari Rp50.000.");
        }
    }

    #mentransfer(rekeningTujuan, uang) {
        if (uang > 0 && uang <= this.#saldo) {
            this.#saldo -= uang; 
            rekeningTujuan.#saldo += uang; 
            console.log(`Atas nama: ${this.namaNasabah} berhasil mentransfer Rp${uang}\nke ${rekeningTujuan.namaNasabah}\nSaldo Anda sekarang: Rp${this.#saldo}`);
        } else {
            console.log("Saldo tidak mencukupi atau jumlah transfer kurang dari Rp50.000.");
        }
    }

    #cekSaldo() {
        console.log(`Saldo ${this.namaNasabah}: Rp${this.#saldo}`);
    }

    setoran(uang) {
        this.#menyetor(uang); 
    }

    penarikan(uang) {
        this.#menarik(uang); 
    }

    transfer(rekeningTujuan, uang) {
        this.#mentransfer(rekeningTujuan, uang); 
    }

    tampilkanSaldo() {
        this.#cekSaldo(); 
    }
}

const uji1 = new BankAccount(34567890, "Ahmad Fauzi", 5000000);
const uji2 = new BankAccount(34567891, "Budi Santoso", 3000000); 
const uji3 = new BankAccount(12345678, "Siti Aminah", 2000000);  

uji1.setoran(1000000);
uji1.penarikan(2000000);
uji1.transfer(uji3, 500000);
uji1.tampilkanSaldo();
uji3.tampilkanSaldo();
