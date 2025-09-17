function Student(firstName, lastName, birthYear, grades = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = new Array(25).fill(null);
  this.attendanceCount = 0; // Лічильник для кількості заповнених записів

  this.getAge = function() {
    return new Date().getFullYear() - this.birthYear;
  };

  this.getAverageGrade = function() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, val) => acc + val, 0);
    return sum / this.grades.length;
  };

  this.present = function() {
    if (this.attendanceCount < 25) {
      this.attendance[this.attendanceCount] = true;
      this.attendanceCount++;
    } else {
      console.warn("Досягнуто максимум відвідувань (25).");
    }
  };

  this.absent = function() {
    if (this.attendanceCount < 25) {
      this.attendance[this.attendanceCount] = false;
      this.attendanceCount++;
    } else {
      console.warn("Досягнуто максимум відвідувань (25).");
    }
  };

  this.getAttendanceRate = function() {
    const totalEntries = this.attendanceCount;
    const visitedEntries = this.attendance.slice(0, totalEntries).filter(status => status === true).length;
    if (totalEntries === 0) return 0;
    return visitedEntries / totalEntries;
  };

  this.summary = function() {
    const avgGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();

    if (avgGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (avgGrade < 90 && attendanceRate < 0.9) {
      return "Редиска!";
    } else {
      return "Добре, але можна краще";
    }
  };
}


const student1 = new Student("Maria", "Ivanova", 2000, [99, 98, 92, 90]);
const student2 = new Student("Ivan", "Petrov", 1998, [90, 91, 90, 95]);
const student3 = new Student("Oleg", "Sidorov", 2001, [91, 93, 89, 60]);

for (let i = 0; i < 23; i++) {
  student1.present();
}
student1.present();
student1.present();

console.log(`Вік: ${student1.firstName} ${student1.lastName}, ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getAverageGrade()}`);
console.log(`Звіт: ${student1.summary()}`); // Очікується "Молодець!"
console.log("------------------------");

student2.absent();
student2.absent();
student2.absent();

console.log(`Вік: ${student2.firstName} ${student2.lastName}, ${student2.getAge()}`);
console.log(`Середній бал: ${student2.getAverageGrade()}`);
console.log(`Звіт: ${student2.summary()}`); // Очікується "Редиска!"
console.log("------------------------");

for (let i = 0; i < 20; i++) {
  student3.present();
}
for (let i = 0; i < 5; i++) {
  student3.absent();
}
console.log(`Вік: ${student3.firstName} ${student3.lastName}, ${student3.getAge()}`);
console.log(`Середній бал: ${student3.getAverageGrade()}`);
console.log(`Звіт: ${student3.summary()}`); // Очікується "Добре, але можна краще"