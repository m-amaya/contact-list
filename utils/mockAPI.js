export const resolveContacts = () =>
  new Promise(resolve => {
    const contacts = [
      {
        id: 0,
        firstName: 'Allen',
        lastName: 'Lane',
        phone: '542-987-3456',
        isFavorite: false,
      },
      {
        id: 1,
        firstName: 'Jane',
        lastName: 'Smith',
        phone: '',
        isFavorite: false,
      },
      {
        id: 2,
        firstName: 'Richard',
        lastName: 'Walker',
        phone: '542-737-3246',
        isFavorite: false,
      },
      {
        id: 3,
        firstName: 'Alejandro',
        lastName: 'Lane',
        phone: '542-345-8721',
        isFavorite: false,
      },
      {
        id: 4,
        firstName: 'Erin',
        lastName: 'Larson',
        phone: '(542) 321-3456',
        isFavorite: false,
      },
      {
        id: 5,
        firstName: 'Richard',
        lastName: 'Julian',
        phone: '542-211-5678',
        isFavorite: false,
      },
      {
        id: 6,
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
