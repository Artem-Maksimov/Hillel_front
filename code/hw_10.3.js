const contactBook = {
  contacts: [
    {
      name: 'Іван Петров',
      phone: '097-123-45-67',
      email: 'ivan.petrov@example.com',
    },
    {
      name: 'Марія Коваль',
      phone: '066-987-65-43',
      email: 'maria.koval@example.com',
    },
  ],

  addContact(name, phone, email) {
    const newContact = {
      name: name,
      phone: phone,
      email: email,
    };
    this.contacts.push(newContact);
    console.log(`Контакт "${name}" успішно додано.`);
  },

  findContact(nameToFind) {
    const foundContact = this.contacts.find(
      (contact) => contact.name.toLowerCase() === nameToFind.toLowerCase()
    );

    if (foundContact) {
      console.log('Контакт знайдено:', foundContact);
    } else {
      console.log(`Контакт "${nameToFind}" не знайдено.`);
    }

    return foundContact;
  },
};

contactBook.addContact('Олег Олексіїв', '050-111-22-33', 'oleg.oleksiiv@example.com');

contactBook.findContact('Марія Коваль');

contactBook.findContact('Петро Іванов');