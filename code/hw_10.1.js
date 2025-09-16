const user = {
  name: 'Артем',
  age: 35,
  city: 'Дніпро',
  occupation: 'Тестувальник',
  car: 'Mazda',

  getUserInfo: function() {
    return `Ім'я: ${this.name}, Вік: ${this.age}, Місто: ${this.city},Професія: ${this.occupation}, Авто: ${this.car}.`;
  }
};

console.log(user.getUserInfo());