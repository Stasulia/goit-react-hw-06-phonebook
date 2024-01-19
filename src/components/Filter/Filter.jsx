import React from 'react';
import css from './Filter.module.css';
import { filterAction } from 'store/filterSlice/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterAction(event.target.value));
  };
  return (
    <form className={css.form}>
      <label className={css.label}>
        Find contacts by name
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </form>
  );
};

export default Filter;
