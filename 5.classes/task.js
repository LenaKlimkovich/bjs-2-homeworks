class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
    }

    fix() {
        this._state = this.state * 1.5;
        if (this._state > 100) {
            this._state = 100;
        }
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
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
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
        super(name, releaseDate, pagesCount, state);
        this.type = type;
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
        super(author, name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
        super(author, name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
        super(author, name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i]

            }
        }
        return null
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex(book => book.name === bookName)
        if (index >= 0) {
            return this.books.splice(index, 1)[0]
        } else {
            return null;
        }
    }

}

class Student {
    constructor(name, marks) {
        this.name = name
        this.marks = {};
    }
    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        } else if (!Object.keys(this.marks).includes(subject)) {
            this.marks[subject] = []
            this.marks[subject].push(mark)
        } else {
            this.marks[subject].push(mark)
        }
    }

    getAverageBySubject(subject) {
        if (!Object.keys(this.marks).includes(subject)) {
            return 0;
        }
        let marksSum = this.marks[subject].reduce((acc, subject) => acc + subject, 0)
        return marksSum / this.marks[subject].length
    }

    getAverage() {
        let subjects = Object.keys(this.marks)
        let totalSum = 0
        for (let i = 0; i < subjects.length; i++) {
            totalSum += this.marks[subjects[i]].reduce((acc, mark, index, arr) => {
                const sum = acc + mark
                if (index === arr.length - 1) {
                    return sum / arr.length
                }
            })
        }
        return totalSum / subjects.length
    }
}