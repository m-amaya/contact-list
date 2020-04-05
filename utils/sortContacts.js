export default function sortContacts(contacts) {
  const sorted = contacts.sort((contact1, contact2) => {
    const lastName1 = contact1.lastName.toUpperCase();
    const lastName2 = contact2.lastName.toUpperCase();

    if (lastName1 < lastName2) {
      return -1;
    }

    if (lastName1 > lastName2) {
      return 1;
    }

    const firstName1 = contact1.firstName.toUpperCase();
    const firstName2 = contact2.firstName.toUpperCase();

    if (firstName1 < firstName2) {
      return -1;
    }

    if (firstName1 > firstName2) {
      return 1;
    }

    return 0;
  });

  let sortedByChar = [];
  let contactSection = [];
  let currChar;

  sorted.map(contact => {
    const thisChar = contact.lastName.charAt(0).toUpperCase();

    if (thisChar === currChar) {
      contactSection.push(contact);
    } else {
      if (currChar) {
        sortedByChar.push({ letter: currChar, section: contactSection });
      }
      currChar = thisChar;
      contactSection = [contact];
    }
  });

  return sortedByChar;
}
