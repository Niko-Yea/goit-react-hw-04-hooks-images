import React, { Component } from 'react';

import Searchbar from "./Searchbar/Searchbar";
import SearchbarForm from "./SearcbarForm/SearchbarForm";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Modal from './Modal/Modal';

import styles from './styles.module.scss';

class App extends Component {
  state = {
    searchQuery: '',
    items: [],
    showModal: false,
    modalImg: ''
  }

  formSubmitHandler = ({inputValue}) => {
    this.setState({ searchQuery: inputValue })
  }

  apiResponseHandler = (apiResponse) => {
    this.setState({ items: apiResponse })
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  getLargeImg = (item) => {
    this.setState({
      modalImg: item
    })
  }

  render() {
    const {searchQuery, showModal, modalImg, items} = this.state
    return (
      <div className={styles.App}>
        <Searchbar>
          <SearchbarForm onSubmit={this.formSubmitHandler} />
        </Searchbar>

        <ImageGallery searchQuery={searchQuery} apiResponse={this.apiResponseHandler}>
          {items.map(item =>
            <ImageGalleryItem item={item} key={item.id} showModal={this.toggleModal} getLargeImg={this.getLargeImg}/>
          )}
        </ImageGallery>

        {(showModal && <Modal item={modalImg} onClose={this.toggleModal} />)}
      </div>
    );
  }
}

export default App;
