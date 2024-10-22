class Book {
    #title;
    #author;
    #year;

    constructor(title, author, year) {
        this.title = title;  // Memanggil setter title
        this.#author = author;
        this.#year = year;
    }

    set title(judul) {
        if (!judul) {
            console.log("Title tidak boleh kosong");
        } else {
            this.#title = judul;
        }
    }

    get title() {
        return this.#title;
    }

    set author(newAuthor) {
        this.#author = newAuthor;
    }

    get author() {
        return this.#author;
    }

    set year(newYear) {
        this.#year = newYear;
    }

    get year() {
        return this.#year;
    }

    #bookDetails() {
        console.log(`\nTitle: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}`);
    }

    tampilkanDetail() {
        this.#bookDetails();
    }
}

class Ebook extends Book {
    #price;

    constructor(title, author, year, price) {
        super(title, author, year);
        this.#price = price;
    }

    set price(harga) {
        if (typeof harga !== 'number') {
            console.log("Harga harus berupa angka");
        } else {
            this.#price = harga;
        }
    }

    get price() {
        return this.#price;
    }

    #bookDetails() {
        super.tampilkanDetail();
        console.log(`Harga Buku: ${this.price}`);
    }

    tampilkanDetail() {
        this.#bookDetails();
    }
}

const Ebook1 = new Ebook("Bumi", "Tere Liye", 2014, 55000);
Ebook1.tampilkanDetail();

const Ebook2 = new Ebook("", "Tere Liye", 2023, "1000");
Ebook2.tampilkanDetail();
