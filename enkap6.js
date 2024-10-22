class Employee {
    #nama;
    #gaji;

    constructor(nama, gaji) {
        this.nama = nama; 
        this.gaji = gaji; 
    }

    set nama(name) {
        if (typeof name !== 'string' || name.trim() === '') {
            console.log("Nama tidak valid");
        } else {
            this.#nama = name;
        }
    }

    get nama() {
        return this.#nama;
    }

    set gaji(gaji) {
        if (typeof gaji !== 'number' || gaji <= 0) {
            console.log("Gaji tidak valid, harus lebih dari 0.");
        } else {
            this.#gaji = gaji;
        }
    }

    get gaji() {
        return this.#gaji;
    }

    #hitungGajiTahunan() {
        return this.#gaji * 12;
    }

    tampilkanGajiTahunan() {
        const gajiTahunan = this.#hitungGajiTahunan();
        console.log(`\nNama Pegawai: ${this.nama}\nGaji Bulanan: Rp${this.gaji}\nGaji Tahunan: Rp${gajiTahunan}`);
    }
}

class Manager extends Employee {
    #departemen;

    constructor(nama, gaji, departemen) {
        super(nama, gaji);
        this.#departemen = departemen;
    }

    hitungGajiTahunan() {
        const gajiTahunan = this.gaji * 12; 
        const bonus = this.gaji * 0.1; 
        return gajiTahunan + (bonus * 12); 
    }

    tampilkanGajiTahunan() {
        const gajiTahunan = this.hitungGajiTahunan();
        console.log(`Manager: ${this.nama}\nDepartemen: ${this.#departemen}\nGaji Tahunan: Rp${gajiTahunan}\n`);
    }
}

const azka = new Manager("Azka", 1500000, "Marketing");
azka.tampilkanGajiTahunan();

const munah = new Manager(" ", 500000, "Marketing");
munah.tampilkanGajiTahunan();
