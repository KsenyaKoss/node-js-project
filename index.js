const yargs = require('yargs')
const contactsServices = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone}) => {
  switch (action) {
    case "list":
      const listContacts = await contactsServices.listContacts();
      console.log(listContacts);
      break;
    case "get":
      const contact = await contactsServices.getContactById(id);
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsServices.addContact({name, email, phone});
      console.log(newContact);
      break;
      case 'remove': 
      const removedContact = await contactsServices.removeContact(id);
      console.log(removedContact);
      break;
    default:
      console.log("Unknown action");
  }
};

const {argv} = yargs(process.argv.slice(2));
invokeAction(argv)














