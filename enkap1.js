class Person {
    #firstName;
    #lastName;
    #age;

    constructor(firstName, lastName, age) {
        this.setFirstName = firstName; 
        this.setLastName = lastName;   
        this.setAge = age;             
    }

    get getFirstName() {
        return this.#firstName;
    }

    set setFirstName(name) {
        if (!name.trim()) {
            console.log('Nama depan tidak boleh kosong');
        } else {
            this.#firstName = name;
        }
    }

    get getLastName() {
        return this.#lastName;
    }

    set setLastName(name) {
        if (!name.trim()) {
            console.log('Nama belakang tidak boleh kosong');
        } else {
            this.#lastName = name;
        }
    }

    get getAge() {
        return this.#age;
    }

    set setAge(age) {
        if (age < 0) {
            console.log('Umur tidak boleh kurang dari nol');
        } else {
            this.#age = age;
        }
    }
}

const objek1 = new Person("Nuril", "Jannatii", 16);
// console.log(objek1.getFirstName);
// console.log(objek1.getLastName);
// console.log(objek1.getAge);

const objek2 = new Person("Nur ", "Sabilah", 18);  
console.log(objek2.getFirstName);
console.log(objek2.getLastName);
console.log(objek2.getAge);
