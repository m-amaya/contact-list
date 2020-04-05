export const resolveContacts = () =>
  new Promise(resolve => {
    const contacts = [
      {
        firstName: 'Allen',
        lastName: 'Lane',
        phone: '542-987-3456',
        isFavorite: false,
      },
      { firstName: 'Jane', lastName: 'Smith', phone: '', isFavorite: false },
      {
        firstName: 'Richard',
        lastName: 'Walker',
        phone: '542-737-3246',
        isFavorite: false,
      },
      {
        firstName: 'Alejandro',
        lastName: 'Lane',
        phone: '542-345-8721',
        isFavorite: false,
      },
      {
        firstName: 'Erin',
        lastName: 'Larson',
        phone: '(542) 321-3456',
        isFavorite: false,
      },
      {
        firstName: 'Richard',
        lastName: 'Julian',
        phone: '542-211-5678',
        isFavorite: false,
      },
      {
        firstName: 'Bill',
        lastName: 'Allen',
        phone: '542-654-2154',
        isFavorite: false,
      },
    ];

    setTimeout(() => {
      resolve({ status: 200, data: contacts });
    }, 1000);
  });
