class Product {
    #idProduk;
    #nama;
    #price;

    constructor(idProduk, name, price) {
        this.#idProduk = idProduk;
        this.nama = name; 
        this.price = price; 
    }

    set nama(name) {
        if (typeof name !== 'string' || name.trim() === '') {
            console.log("Nama tidak valid, harus berupa string yang tidak kosong.");
        } else {
            this.#nama = name;
        }
    }

    get nama() {
        return this.#nama;
    }

    set price(harga) {
        if (typeof harga !== 'number') {
            console.log("Harga harus berupa angka.");
        } else {
            this.#price = harga;
        }
    }

    get price() {
        return this.#price;
    }

    getId() {
        return this.#idProduk;
    }

    hitungTotalHarga(qty) {
        return this.#price * qty;
    }

    tampilkanDetailProduk(qty) {
        if (this.#nama && this.#price) {
            const totalHargaBarang = this.hitungTotalHarga(qty);
            console.log(`\nId Produk = ${this.getId()}\nNama Produk: ${this.#nama}\nHarga: Rp${this.#price}\nHarga untuk ${qty} unit = Rp${totalHargaBarang}`);
        }
    }
}

class ElectronicProduct extends Product {
    #masaGaransi;

    constructor(idProduk, name, price, masaGaransi) {
        super(idProduk, name, price);
        this.#masaGaransi = masaGaransi;
    }

    hitungTotalHarga(qty) {
        const totalHargaBarang = super.hitungTotalHarga(qty);
        return totalHargaBarang + this.#masaGaransi; 
    }

    tampilkanDetailProduk(qty) {
        if (this.nama && this.price) {
            const totalHargaBarang = this.hitungTotalHarga(qty);
            console.log(`\nId Produk = ${this.getId()}\nNama Produk: ${this.nama}\nHarga: Rp${this.price}\nMasa Garansi = ${this.#masaGaransi} tahun\nHarga untuk ${qty} unit = Rp${totalHargaBarang}`);
        }
    }
}

const laptop = new ElectronicProduct(1, "Laptop", 7000000, 2);
laptop.tampilkanDetailProduk(3);

// const tv = new ElectronicProduct(2, " ", "satu juta lima ratus", 2);
// tv.tampilkanDetailProduk(2);
