class Bank {
    #namaBank;
    #kantorCabang;

    constructor(namaBank) {
        this.#namaBank = namaBank;
        this.#kantorCabang = new Set();
    }

    set tambahKantorCabang(namaCabang) {
        if (this.#kantorCabang.has(namaCabang)) {
            console.log(`${namaCabang} sudah ada di ${this.#namaBank}`);
        } else {
            this.#kantorCabang.add(namaCabang);
            console.log(`${namaCabang} ditambahkan ke ${this.#namaBank}`);
        }
    }

    #hapusKantorCabang(namaCabang) {
        if (this.#kantorCabang.has(namaCabang)) {
            this.#kantorCabang.delete(namaCabang);
            console.log(`${namaCabang} dihapus dari ${this.#namaBank}`);
        } else {
            console.log(`${namaCabang} tidak ditemukan`);
        }
    }

    #tampilkanSemuaCabang() {
        console.log(`Cabang di ${this.#namaBank}:`);
        if (this.#kantorCabang.size) {
            let index = 1;
            this.#kantorCabang.forEach(cabang => console.log(`${index++}. ${cabang}`));
        } else {
            console.log('Tidak ada cabang.');
        }
    }

    tampilkanCabangDanHapus(namaCabang) {
        this.#tampilkanSemuaCabang();
        this.#hapusKantorCabang(namaCabang);
        this.#tampilkanSemuaCabang();
    }
}

const bankABC = new Bank('Bank ABC');

bankABC.tambahKantorCabang = 'Cabang Jakarta';
bankABC.tambahKantorCabang = 'Cabang Surabaya';
bankABC.tambahKantorCabang = 'Cabang Jakarta';

bankABC.tampilkanCabangDanHapus('Cabang Jakarta');
