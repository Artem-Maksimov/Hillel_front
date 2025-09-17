class Coach {
  constructor(name, specialization, rating) {
    this.name = name;
    this.specialization = specialization;
    this.rating = rating;
  }

  displayInfo() {
    console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`);
  }
}

const coach1 = new Coach('Андрій Шевченко', 'Football', 4.9);
const coach2 = new Coach('Ілля Целютін', 'Diving', 4.2);

coach1.displayInfo();
coach2.displayInfo();