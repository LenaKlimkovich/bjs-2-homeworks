class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
    }

    fix() {
       this.state * 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        }
        this._state = state;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
        super(name, releaseDate, pagesCount, state);
        this.type = type;
    }
}


class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "book", author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = type;
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = "novel", author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = type;
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = "fantastic", author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = type;
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = "detective", author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = type;
    }
}