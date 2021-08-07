import React, { Component } from 'react';
import styles from './styles.module.scss'

class SearchbarForm extends Component {
  state = {
    inputValue: ''
  }

  handlerInputChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      return;
    }

    this.props.onSubmit(this.state);
    this.formReset();
  }

  formReset = () => {
    this.setState({inputValue: ''})
  }

  render() {
    const { inputValue } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={this.handlerInputChange}
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
}

export default SearchbarForm;