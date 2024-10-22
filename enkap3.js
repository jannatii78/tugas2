class RekeningBank {
    #noRek;
    #saldo;

    constructor(noRek, saldo) {
        this.#noRek = noRek;
        this.#saldo = saldo;
    }

    set noRek(newNoRek) {
        this.#noRek = newNoRek;
    }

    set saldo(newSaldo) {
        this.#saldo = newSaldo;
    }

    setorUang(jumlah) {
        this.#saldo += jumlah;
        console.log(`\nNomor rekening: ${this.#noRek}\nMenyetor uang sebesar: ${jumlah}\nSekarang saldo anda: ${this.#saldo}`);
    }

    tarikUang(jumlah) {
        if (jumlah > this.#saldo) {
            console.log('Saldo tidak cukup');
            return null; 
        } else {
            this.#saldo -= jumlah;
            console.log(`\nNomor rekening: ${this.#noRek}\nMenarik uang sebesar: ${jumlah}\nSisa saldo anda: ${this.#saldo}`);
            return this.#noRek;
        }
    }
}

const daftarNoRek = [];

function buatRekening(noRek, saldo) {
    if (daftarNoRek.includes(noRek)) {
        console.log('Nomor rekening sudah ada atau tidak tersedia!');
        return null;
    }
    const rekeningBaru = new RekeningBank(noRek, saldo);
    daftarNoRek.push(noRek);
    return rekeningBaru;
}

const rekening1 = buatRekening('123456789', 100000);
if (rekening1) {
    rekening1.setorUang(50000);
    rekening1.tarikUang(20000);
}

const rekening2 = buatRekening('123456789', 200000);
if (rekening2) {
    rekening2.setorUang(100000);
    rekening2.tarikUang(50000);
}
