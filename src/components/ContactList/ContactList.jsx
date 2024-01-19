import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContactAction } from 'store/contactsSlice/contactsSlice';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(removeContactAction(id));
  };

  const filterContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const newContact = filterContact.map(({ id, name, number }) => {
    return (
      <li key={id} className={css.contactItem}>
        <p className={css.contactText}>
          {name} : {number}
        </p>
        <button
          className={css.contactBtn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
  return filterContact && <ul className={css.contactList}>{newContact}</ul>;
};

export default ContactList;
