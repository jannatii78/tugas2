class PersegiPanjang { 
    #panjang;
    #lebar;

    constructor(panjang, lebar) {
        this.panjang = panjang;  
        this.lebar = lebar;      
    } 

    get panjang() {
        return this.#panjang;
    }

    set panjang(angka) {
        if (angka <= 0) {
            console.log('Panjang harus lebih dari 0');
        } else {
            this.#panjang = angka;
        }
    }

    get lebar() {
        return this.#lebar;
    }

    set lebar(angka) {
        if (angka <= 0) {
            console.log('Lebar harus lebih dari 0');
        } else {
            this.#lebar = angka;
        }
    }

    get mencariLuas() {
        return this.#panjang * this.#lebar;
    }

    get mencariKeliling() {
        return 2 * (this.#panjang + this.#lebar);
    }
}

const persegi1 = new PersegiPanjang(-1, -5);
console.log(`Luas: ${persegi1.mencariLuas}`); 
console.log(`Keliling: ${persegi1.mencariKeliling}`); 

// const persegi2 = new PersegiPanjang(5,10);
// console.log(`Luas: ${persegi2.mencariLuas}`);
// console.log(`Keliling: ${persegi2.mencariKeliling}`);
