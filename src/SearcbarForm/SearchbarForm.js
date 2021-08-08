import React, { useState } from 'react';
import styles from './styles.module.scss'

const SearchbarForm = ({onSubmit}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    onSubmit(inputValue);
    setInputValue('');
  }

    return (
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handleInputChange}
          value={inputValue}
          name='inputValue'
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus={true}
          placeholder="Search images and photos"
        />
      </form>
  );
  }

export default SearchbarForm;