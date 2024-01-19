import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: {
      prepare: ({ name, number }) => {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        return { payload: newContact };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    removeContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContactAction, removeContactAction } = contactsSlice.actions;
