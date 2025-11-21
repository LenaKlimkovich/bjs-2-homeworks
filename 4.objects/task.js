function Student(name, gender, age, marks) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = []
}

let student1 = new Student('Ivan', 'male', '21', []);
let student2 = new Student('Kirill', 'male', '19', []);
let student3 = new Student('Diana', 'female', '21', []);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks')) {
		this.marks.push(...marks)
	}
}

Student.prototype.getAverage = function() {
	if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
		return 0;
	}
	return Math.round(this.marks.reduce((accumulator, current) => accumulator + current) / this.marks.length)
}

Student.prototype.exclude = function(reason) {
	delete this.marks
	delete this.subject
	this.excluded = reason
	}