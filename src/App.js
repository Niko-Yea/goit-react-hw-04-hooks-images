import React, { useState } from 'react';

import Searchbar from "./Searchbar/Searchbar";
import SearchbarForm from "./SearcbarForm/SearchbarForm";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Modal from './Modal/Modal';

import styles from './styles.module.scss';

const App = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className={styles.App}>
      <Searchbar>
        <SearchbarForm onSubmit={setSearchQuery} />
      </Searchbar>

      <ImageGallery searchQuery={searchQuery} setItems={setItems} items={items}>
        {items.map(item =>
          <ImageGalleryItem item={item} key={item.id} showModal={toggleModal} getLargeImg={setModalImg}/>
        )}
      </ImageGallery>

      {(showModal && <Modal largeImg={modalImg} onClose={toggleModal} />)}
    </div>
  );
}

export default App;