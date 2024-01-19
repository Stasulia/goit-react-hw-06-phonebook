import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactAction,
  removeContactAction,
} from 'store/contactsSlice/contactsSlice';

const ContactsPage = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(removeContactAction(id));
  };

  const createContact = data => {
    dispatch(addContactAction(data));
  };

  const filterContact = 
  return (
    <>
      <ContactForm createContact={createContact} />
      {contacts && (
        <ContactList contacts={contacts} filterContact={filterContact} removeContact={removeContact} />
      )}
    </>
  );
};

export default ContactsPage;
