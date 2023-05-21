import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const cangeFilter = e => {
    const filterValue = e.target.value;
    dispatch(filterContacts(filterValue));
  };

  return (
    <div className={css.filter}>
      <span className={css['filter-text']}>Find contact by name</span>

      <input
        className={css.input}
        type="text"
        name="name"
        value={filter}
        onChange={cangeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

export default Filter;
